import OpenAI from 'openai';
import { VECTOR_DOCUMENTS } from './training-data';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface Document {
  id: string;
  title: string;
  text: string;
  embedding?: number[];
}

class VectorStore {
  private documents: Document[] = [];
  private initialized = false;

  constructor() {
    this.documents = VECTOR_DOCUMENTS;
  }

  async initialize() {
    if (this.initialized) return;

    for (const doc of this.documents) {
      if (!doc.embedding) {
        const embedding = await this.getEmbedding(doc.text);
        doc.embedding = embedding;
      }
    }

    this.initialized = true;
  }

  private async getEmbedding(text: string): Promise<number[]> {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
        encoding_format: "float"
      });

      return response.data[0].embedding;
    } catch (error) {
      console.error('Error getting embedding:', error);
      return [];
    }
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) return 0;
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  async findSimilarDocuments(query: string, topK: number = 3): Promise<Document[]> {
    await this.initialize();

    const queryEmbedding = await this.getEmbedding(query);
    
    const similarities = this.documents.map(doc => ({
      document: doc,
      score: this.cosineSimilarity(queryEmbedding, doc.embedding || [])
    }));

    similarities.sort((a, b) => b.score - a.score);
    
    return similarities.slice(0, topK).map(s => s.document);
  }

  async getRelevantContext(query: string): Promise<string> {
    const similarDocs = await this.findSimilarDocuments(query);
    return similarDocs.map(doc => doc.text).join('\n\n');
  }
}

export const vectorStore = new VectorStore();
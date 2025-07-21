import { useState } from 'react';
import { Bot, ChevronUp, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import OpenAI from 'openai';
import { vectorStore } from '@/lib/vector-store';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const baseSystemPrompt = `You are GigaRev's AI assistant. You help users understand GigaRev's AI implementation and consulting services. Be concise, professional, and helpful. If users ask about pricing or specific implementation details, encourage them to book a call with our team. Keep responses under 150 words.

Here is some relevant context about GigaRev that you should use to inform your responses:`;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! I'm GigaRev's AI assistant. How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get relevant context from vector store
      const context = await vectorStore.getRelevantContext(inputValue);
      const systemPrompt = `${baseSystemPrompt}\n\n${context}`;

      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text
          })),
          { role: 'user', content: inputValue }
        ],
        model: 'gpt-4-turbo-preview',
        temperature: 0.7,
        max_tokens: 150
      });

      const aiResponse = {
        text: completion.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.",
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('OpenAI error:', error);
      const errorResponse = {
        text: "I apologize, but I'm having trouble connecting to my brain right now. Please try again later or contact our team directly.",
        isUser: false
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleToggle}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
            isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-red-500 hover:bg-red-600"
          )}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
        </Button>
      </div>

      {/* Backdrop blur when chat is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30" onClick={handleToggle} />
      )}

      {/* Chatbot panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 md:w-96 rounded-xl shadow-xl z-40 transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-red-500 rounded-t-xl">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full p-1">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-sora font-medium text-sm text-white">GigaRev Assistant</h3>
            </div>
            <ChevronUp className="h-4 w-4 text-white cursor-pointer hover:text-white/90" onClick={handleToggle} />
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white border-x border-border p-4 h-80 overflow-y-auto flex flex-col gap-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg p-3 max-w-[80%]",
                message.isUser
                  ? "bg-red-500/10 ml-auto animate-slide-right"
                  : "bg-red-500/10 mr-auto animate-slide-up"
              )}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-red-500/10 rounded-lg p-3 max-w-[80%] mr-auto animate-pulse">
              <p className="text-sm">Thinking...</p>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="bg-white border border-border rounded-b-xl p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-card rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 border border-border"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage}
              size="sm"
              className="rounded-full bg-red-500 hover:bg-red-600 text-white"
              disabled={isLoading}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
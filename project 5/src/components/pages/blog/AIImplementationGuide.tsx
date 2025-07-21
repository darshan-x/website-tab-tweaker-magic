import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'strategic-assessment', title: 'Strategic Assessment' },
  { id: 'data-infrastructure', title: 'Data Infrastructure' },
  { id: 'model-selection', title: 'Model Selection and Development' },
  { id: 'integration', title: 'Integration and Deployment' },
  { id: 'training', title: 'Team Training and Change Management' },
  { id: 'conclusion', title: 'Conclusion' }
];

export default function AIImplementationGuide() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Complete AI Implementation Guide for 2025 | GigaRev"
        description="A comprehensive guide to implementing AI in your organization, from initial strategy to full deployment. Learn best practices, key considerations, and success metrics."
        keywords="AI implementation, enterprise AI, AI strategy, digital transformation, AI deployment, AI integration"
        ogUrl="/blog/ai-implementation-guide-2025"
      />
      
      <PageHeader 
        title="The Complete AI Implementation Guide for 2025" 
        description="A comprehensive guide to implementing AI in your organization"
      />
      
      <div className="pt-20">
        <article className="container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[120px] space-y-8">
                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Table of Contents</h4>
                  <nav className="space-y-3">
                    {tableOfContents.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Share Article</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="hover:text-blue-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:text-blue-600">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:text-blue-500">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="max-w-4xl">
                {/* Article Meta */}
                <div className="mb-12 p-6 bg-card border border-border rounded-xl">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>Darshan Karthik, CMO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>March 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>12 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Enterprise', 'Implementation'].map((tag) => (
                      <div
                        key={tag}
                        className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12">
                  <img 
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                    alt="AI Implementation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Mobile Table of Contents - Visible only on mobile */}
                <div className="lg:hidden mb-8 p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Table of Contents</h4>
                  <nav className="space-y-3">
                    {tableOfContents.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      As we move into 2025, artificial intelligence has become a cornerstone of business transformation. 
                      This comprehensive guide will walk you through the essential steps of implementing AI in your organization, 
                      from initial strategy to full deployment.
                    </p>
                  </div>

                  <div id="strategic-assessment" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">1. Strategic Assessment</h2>
                    <p className="mb-6">
                      Before diving into implementation, it's crucial to assess your organization's AI readiness and define clear objectives:
                    </p>
                    <ul className="space-y-3 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Evaluate current technical infrastructure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Identify key business processes for AI enhancement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Assess data quality and availability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Define success metrics and ROI targets</span>
                      </li>
                    </ul>
                  </div>

                  <div id="data-infrastructure" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">2. Data Infrastructure</h2>
                    <p className="mb-6">
                      A robust data infrastructure is the foundation of successful AI implementation:
                    </p>
                    <ul className="space-y-3 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Establish data governance frameworks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Implement data quality controls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Set up secure data pipelines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Enable real-time data processing capabilities</span>
                      </li>
                    </ul>
                  </div>

                  <div id="model-selection" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">3. Model Selection and Development</h2>
                    <p className="mb-6">
                      Choosing the right AI models is critical for success:
                    </p>
                    <ul className="space-y-3 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Evaluate pre-trained vs custom models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Consider computational requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Plan for model maintenance and updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Implement monitoring and validation systems</span>
                      </li>
                    </ul>
                  </div>

                  <div id="integration" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">4. Integration and Deployment</h2>
                    <p className="mb-6">
                      Seamless integration with existing systems is essential:
                    </p>
                    <ul className="space-y-3 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Design API interfaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Implement security measures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Set up monitoring and alerting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Plan for scalability</span>
                      </li>
                    </ul>
                  </div>

                  <div id="training" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">5. Team Training and Change Management</h2>
                    <p className="mb-6">
                      Success depends on proper training and change management:
                    </p>
                    <ul className="space-y-3 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Develop training programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Create documentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Establish support systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Monitor adoption metrics</span>
                      </li>
                    </ul>
                  </div>

                  <div id="conclusion" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Conclusion</h2>
                    <p className="mb-6">
                      Successful AI implementation requires careful planning, robust infrastructure, and strong change management. 
                      By following this guide, organizations can maximize their chances of success and realize the full potential of AI technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
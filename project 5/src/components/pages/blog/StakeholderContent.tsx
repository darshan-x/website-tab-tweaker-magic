import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-generic-fails', title: 'Why Generic Content Is Failing' },
  { id: 'personalization-in-action', title: 'Personalization in Action' },
  { id: 'best-practices', title: 'Implementation Best Practices' },
  { id: 'pitfalls', title: 'Common Pitfalls' },
  { id: 'getting-started', title: 'Getting Started' }
];

export default function StakeholderContent() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Winning Over Every Stakeholder: Why Sales Leaders Need Personalized Content Automation | GigaRev"
        description="Learn why personalized sales content automation is crucial for engaging modern B2B buying committees and how to implement it effectively in your organization."
        keywords="sales content automation, personalized content, B2B sales, stakeholder engagement, sales enablement"
        ogUrl="/blog/stakeholder-content-automation"
      />
      
      <PageHeader 
        title="Winning Over Every Stakeholder: Why Sales Leaders Need Personalized Content Automation" 
        description="A comprehensive guide to implementing personalized content automation in B2B sales"
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
                
                {/* Article Meta */}
                <div className="mb-12 p-6 bg-card border border-border rounded-xl">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>Darshan Karthik, CMO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>March 25, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Sales Content', 'Automation', 'B2B'].map((tag) => (
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

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      B2B buying committees keep growing, and generic sales pitches just aren't cutting it anymore. The secret to breaking through the noise? Personalized sales content automation that tailors your pitch to each decision-maker.
                    </p>
                  </div>

                  <div id="why-generic-fails" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Why Generic Sales Content Is Falling Flat
                    </h2>
                    <p className="mb-6">
                      In today's B2B world, buyers are overwhelmed and skeptical. Consider that 77% of B2B buyers said their last purchase was very complex or difficult, with a typical buying group involving 6–10 decision-makers – each armed with 4–5 pieces of information they gathered on their own.
                    </p>
                    <p className="mb-6">
                      Adding to the challenge, prospects are experiencing "GPT fatigue" from the flood of automated, AI-generated outreach. Buyers are drowning in generic, uninspired content that they simply ignore.
                    </p>
                    <div className="bg-card border border-border rounded-xl p-6 mb-8">
                      <blockquote className="text-lg italic mb-4">
                        "Simply blasting out boilerplate content can do more harm than good when it lacks true personalization."
                      </blockquote>
                    </div>
                  </div>

                  <div id="personalization-in-action" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      What "Personalized Sales Content Automation" Looks Like in Action
                    </h2>
                    <p className="mb-6">
                      Personalized sales content automation uses smart tools to automatically create or adapt sales collateral for each individual prospect or stakeholder – with minimal manual effort from your reps.
                    </p>
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Dynamic, Tailored Presentations</h3>
                        <p>
                          No more static one-size-fits-all pitch decks. Dynamic presentation tools can pull in data and modules relevant to each viewer. The CFO sees slides emphasizing cost savings and ROI, while the CTO sees slides on integration and security.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Chat-Enabled Interactive Content</h3>
                        <p>
                          Static PDFs give way to interactive sales assets with embedded chat assistants that answer questions 24/7, turning passive brochures into active conversations.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Personalized ROI Calculators</h3>
                        <p>
                          Interactive calculators compute benefits using the prospect's own data, bringing your value proposition from abstract to concrete.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="best-practices" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Best Practices for Implementation
                    </h2>
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Start with Approved Content</h3>
                        <p>
                          Begin by feeding your automation system with pre-vetted, high-quality content that aligns with your brand voice and messaging.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Focus on Key Personas First</h3>
                        <p>
                          Identify high-impact personas in your buying committees and roll out personalization for those first before expanding.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Integrate with Existing Workflows</h3>
                        <p>
                          Ensure your personalization tools fit seamlessly into how your sales team works today to maximize adoption.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="pitfalls" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Common Pitfalls to Avoid
                    </h2>
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Over-Reliance on AI</h3>
                        <p>
                          Don't let AI do all the work without human oversight. Keep humans in control of the narrative and review content before sending.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Empty Personalization</h3>
                        <p>
                          Avoid superficial personalization that just inserts names without adding real value or addressing actual needs.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Poor Data Hygiene</h3>
                        <p>
                          Ensure your CRM data is clean and up-to-date to avoid embarrassing personalization mistakes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="getting-started" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      How to Get Started
                    </h2>
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Define Clear Goals</h3>
                        <p>
                          Set specific objectives and metrics for your personalization initiative, such as increased engagement rates or shorter sales cycles.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Start Small</h3>
                        <p>
                          Begin with a pilot program focused on a specific segment or campaign before rolling out broadly.
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Measure and Iterate</h3>
                        <p>
                          Track results, gather feedback, and continuously refine your approach based on what works.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg mb-6">
                        The companies that master the balance of automation and personalization will be the ones signing deals while others struggle to get replies. Now is the time to ensure your sales content speaks to every person on the buying committee in a meaningful way.
                      </p>
                    </div>
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
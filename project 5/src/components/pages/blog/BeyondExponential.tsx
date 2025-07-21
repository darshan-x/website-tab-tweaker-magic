import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'vertical-scaling', title: '1. Vertical Scaling' },
  { id: 'multimodal-agents', title: '2. Multimodal Agents' },
  { id: 'agi-horizon', title: '3. AGI Horizon' },
  { id: 'scientific-compression', title: '4. Scientific Compression' },
  { id: 'safety-edge', title: '5. Safety as Edge' },
  { id: 'board-questions', title: 'Board Meeting Questions' },
  { id: 'closing-thought', title: 'Closing Thought' }
];

export default function BeyondExponential() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Beyond the Exponential Curve: AI Progress Insights | GigaRev"
        description="Key insights from DeepMind's CEO on AI's accelerating trajectory and what it means for businesses. Learn about the future of AI and its impact on industry."
        keywords="AI progress, DeepMind, future of AI, AI trajectory, AI development, AI industry impact"
        ogUrl="/blog/beyond-exponential"
      />
      
      <PageHeader 
        title="Beyond the Exponential Curve: Five Take-Home Lessons from Demis Hassabis' Latest 60 Minutes Interview"
        description="Key insights from DeepMind's CEO on AI's accelerating trajectory"
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
                      <span>March 24, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>12 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'DeepMind', 'Future Tech'].map((tag) => (
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
                    alt="AI Progress Visualization"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Google DeepMind's co-founder and CEO, Demis Hassabis, sat down with 60 Minutes to explain 
                      why AI progress now feels "straight up." Below is a distilled set of insights—and the 
                      strategic questions they raise for anyone building, regulating, or simply living with 
                      the next generation of intelligent systems.
                    </p>
                  </div>

                  <div id="vertical-scaling" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      1. We're No Longer Doubling—We're Vertically Scaling
                    </h2>

                    <div className="bg-card border border-border rounded-xl p-6 mb-8">
                      <div className="space-y-4">
                        <p>
                          Hassabis describes AI progress as an exponential curve whose slope itself is steepening. 
                          Every breakthrough begets more capital, more talent, and better tools, accelerating the 
                          next breakthrough.
                        </p>
                        <div className="pl-6 border-l-2 border-primary/30">
                          <p className="text-muted-foreground italic">
                            "If your strategic plan assumes linear change, revise the timeline—then shorten it again."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 mb-12">
                      <h3 className="font-sora font-medium mb-4">Action Check</h3>
                      <p>Audit three-year roadmaps every quarter; yesterday's safe "Year-3 bets" may already be table stakes.</p>
                    </div>
                  </div>

                  <div id="multimodal-agents" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      2. Multimodal Agents Are Moving From "Chat" to "Act"
                    </h2>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="mb-4">
                          DeepMind's prototype Project Astra doesn't just read text; it sees through a camera, 
                          hears your voice, and reasons about the world in real time. The demo eyeglasses identify 
                          Victorian warehouses, recall environmental history, and craft fiction on demand.
                        </p>
                        <div className="pl-6 border-l-2 border-primary/30">
                          <p className="text-muted-foreground italic">
                            Strategic question: if AI agents begin booking tickets, shopping, and scheduling 
                            autonomously, which of your customer touch-points survive disintermediation?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="agi-horizon" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      3. AGI Is Framed as a 5–10 Year Horizon
                    </h2>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="mb-4">
                          Hassabis predicts systems with human-level versatility by 2030: tools that "understand 
                          everything around you in nuanced, deep ways, embedded in everyday life." Whether that 
                          is true AGI or advanced narrow intelligence is a semantic debate; the business reality 
                          is the same—capabilities that today require specialist teams will become baseline features.
                        </p>
                        <div className="pl-6 border-l-2 border-primary/30">
                          <p className="text-muted-foreground italic">
                            Risk vector: competitive moats built on execution speed or pattern recognition alone 
                            will erode quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="scientific-compression" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      4. AI Is Already Compressing Decades of Scientific Work
                    </h2>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="mb-4">
                          DeepMind's AlphaFold cracked ~200 million protein structures in a single year—tasks 
                          that once took PhD lifetimes. Hassabis now aims to shrink drug-development cycles 
                          from a decade to months and talks openly about "the end of disease." Radical abundance 
                          is no longer science fiction; it's an R&D planning variable.
                        </p>
                        <div className="pl-6 border-l-2 border-primary/30">
                          <p className="text-muted-foreground italic">
                            Opportunity lens: industries dependent on slow discovery cycles (pharma, materials, 
                            energy) should budget for AI-first moonshots—and for competitors doing the same.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="safety-edge" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      5. Safety Isn't an Afterthought; It's the Competitive Edge
                    </h2>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Hassabis cites two existential risks:</h3>
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start gap-3">
                            <span className="text-primary">•</span>
                            <span>Bad actors hijacking powerful models</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary">•</span>
                            <span>Autonomous systems drifting beyond human intent</span>
                          </li>
                        </ul>
                        <p className="mb-4">
                          He worries the race for market share could trigger a "race to the bottom" on safety. 
                          DeepMind's answer is global coordination, value alignment, and guard-rails baked into 
                          model training.
                        </p>
                        <div className="pl-6 border-l-2 border-primary/30">
                          <p className="text-muted-foreground italic">
                            Leadership mandate: treat model governance like cloud security—continuous, visible, 
                            and budget-lined. Cutting corners today risks regulatory and reputational blowback 
                            that capital can't easily fix later.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="board-questions" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Three Questions to Bring to Your Next Board Meeting
                    </h2>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Capability Gap</h3>
                        <p>
                          Which core workflows will a multimodal, action-oriented agent obsolete—and how soon 
                          can we prototype our own?
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Data Advantage</h3>
                        <p>
                          Do we possess proprietary signals that can compound into a defensible AI moat before 
                          commoditised models swallow the market?
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Guard-Rail Governance</h3>
                        <p>
                          Where, in our stack, do we log decisions, validate outputs, and enforce policy? If 
                          that layer vanished, could we prove we exercised due diligence?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="closing-thought" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Closing Thought</h2>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg mb-6">
                        Hassabis notes that current systems still lack curiosity and imagination, but he expects 
                        that gap to close within the decade. If AI soon asks questions humans never thought to 
                        pose, the winners won't be those who fear that moment—they'll be the organisations 
                        prepared to harness it.
                      </p>
                      <p className="text-lg font-medium text-primary">
                        Are you treating AI like a feature, or like the substrate of every future product? The 
                        clock is running exponentially faster than it was yesterday.
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
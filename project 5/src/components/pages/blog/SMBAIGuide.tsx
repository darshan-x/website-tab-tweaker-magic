import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'budgets', title: 'Why Budgets Feel Tighter' },
  { id: 'savings', title: 'Where AI Delivers Savings' },
  { id: 'redirecting', title: 'Redirecting Savings into Growth' },
  { id: 'moat', title: 'Building the Moat' },
  { id: 'action-plan', title: '90-Day Action Plan' },
  { id: 'governance', title: 'Governance' },
  { id: 'takeaways', title: 'Key Takeaway' }
];

export default function SMBAIGuide() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI for SMBs: Unlocking Growth Through Cost Optimization | GigaRev"
        description="A practical guide to implementing AI in small and mid-sized businesses to reduce costs and fuel growth initiatives. Learn how SMBs can leverage AI effectively."
        keywords="SMB AI, small business AI, AI cost optimization, AI growth strategies, SMB digital transformation"
        ogUrl="/blog/smb-ai-guide"
      />
      
      <PageHeader 
        title="AI for SMBs: Unlocking Growth Through Cost Optimization" 
        description="A practical guide to implementing AI in small and mid-sized businesses"
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
                      <span>March 20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>12 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['SMB', 'AI', 'Cost Optimization'].map((tag) => (
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
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                    alt="SMB AI Implementation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Deploying AI is no longer a moon-shot for small and mid-sized businesses (SMBs); 
                      it's the fastest way to release cash from back-office chores and redirect it into 
                      high-growth priorities such as sales expansion and product innovation. Surveys show 
                      that AI adoption among U.S. SMBs has more than doubled in the last year, and the 
                      early movers are already reporting lower operating costs, faster decision cycles 
                      and stronger competitive moats.
                    </p>
                  </div>

                  <div id="budgets" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Why Budgets Feel Tighter Than Ever</h2>
                    <p className="mb-12">
                      Inflation, wage pressure and fragmented SaaS stacks have pushed non-revenue spend 
                      to record highs for many SMBs. Yet AI tools that automate customer service, 
                      marketing and admin are becoming cheaper and easier to deploy, creating a rare 
                      chance to shift dollars from opex to growth capex. The U.S. Small Business 
                      Administration lists cost reduction and time savings as the top two pay-offs 
                      of AI adoption.
                    </p>
                  </div>

                  <div id="savings" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Where AI Delivers Immediate Savings</h2>
                    
                    <div className="space-y-8 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">1. Customer Interactions</h3>
                        <p className="mb-4">
                          Chatbots & self-service portals handle FAQs and order status around the clock, 
                          cutting ticket volume without sacrificing CSAT.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Case-study snapshots show SMBs reducing support costs dramatically once 
                          chatbots were deployed.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">2. Marketing Automation</h3>
                        <p className="mb-4">
                          Gen-AI copy- and design-assistants now spin out ads, emails and landing pages 
                          in minutes, slashing agency and freelancer fees.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          AI-driven audience targeting keeps campaigns on budget by pausing 
                          under-performing ads automatically.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">3. Finance & Bookkeeping</h3>
                        <p>
                          Machine-learning add-ons flag duplicate invoices, auto-categorise expenses 
                          and reconcile transactions—tasks that once demanded human bookkeepers.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">4. Operations & Scheduling</h3>
                        <p className="mb-4">
                          Route-optimisation engines for field teams reduce fuel and overtime by 
                          analysing traffic and job urgency in real time.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Simple AI schedulers fill job rosters, cutting manager hours spent on 
                          rota juggling.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">5. IT & Cybersecurity</h3>
                        <p>
                          Autonomous endpoint tools patch software and quarantine threats before human 
                          analysts would even see the alert, easing MSP retainers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="redirecting" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Redirecting Savings into Growth</h2>
                    
                    <div className="space-y-8 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Invest in Sales</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary">•</span>
                            <span>
                              Use part of the freed budget to license AI prospecting platforms that 
                              enrich leads and personalise outreach—lifting pipeline without adding headcount.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary">•</span>
                            <span>
                              Deploy conversational intelligence to coach reps, shortening ramp times.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Fund Product Development</h3>
                        <p>
                          Low-code Gen-AI prototyping reduces engineering cycles and lets spare capital 
                          bankroll rapid MVP tests or premium feature launches.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="moat" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Building the Moat: Data + Process = Defensibility</h2>
                    
                    <div className="space-y-8 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Capture Proprietary Signals</h3>
                        <p>
                          Store chatbot transcripts, ad-level performance and usage telemetry in a 
                          central lake; models trained on that data can't be bought off-the-shelf 
                          by competitors.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Edge-Deploy Where Latency Matters</h3>
                        <p>
                          Local-device inference keeps customer touch-points instant and private, 
                          an emerging differentiation in trust-sensitive sectors.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Iterate Agentically</h3>
                        <p>
                          Move from passive "copilots" to autonomous agents that sense, decide and act, 
                          compounding efficiency gains over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="action-plan" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">A 90-Day Action Plan</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Weeks</th>
                            <th className="border border-border p-4 text-left">Action</th>
                            <th className="border border-border p-4 text-left">Tool Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">1-2</td>
                            <td className="border border-border p-4">
                              Audit top three cost centres and map repeatable tasks
                            </td>
                            <td className="border border-border p-4">
                              Internal spreadsheet + SBA AI checklist
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">3-6</td>
                            <td className="border border-border p-4">
                              Pilot one AI module in each cost centre
                            </td>
                            <td className="border border-border p-4">
                              HubSpot ChatSpot, Zapier AI, QuickBooks SmartScan
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">7-10</td>
                            <td className="border border-border p-4">
                              Measure labour hours saved; freeze equivalent budget lines
                            </td>
                            <td className="border border-border p-4">
                              Finance dashboard
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">11-12</td>
                            <td className="border border-border p-4">
                              Reallocate savings to sales AI and rapid-prototype fund
                            </td>
                            <td className="border border-border p-4">
                              Apollo.io, Replit Ghostwriter
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="governance" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Governance: Move Fast, But Don't Break Trust</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Data Privacy</h3>
                        <p>Hash or redact personal data before sending it to external APIs.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Human Supervision</h3>
                        <p>
                          Keep approval checkpoints for high-risk outputs such as legal or 
                          regulated content.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Vendor Vetting</h3>
                        <p>
                          Verify security practices and indemnity provisions, especially for 
                          open-source models.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="takeaways" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Key Takeaway</h2>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg font-medium text-primary">
                        Every month an SMB delays AI adoption, dollars leak into repetitive work that 
                        could instead fuel growth initiatives. Start with chatbots, marketing automation 
                        and bookkeeping AI to free up cash quickly—then reinvest those savings into 
                        AI-powered sales acceleration and faster product cycles to build a durable 
                        competitive moat.
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
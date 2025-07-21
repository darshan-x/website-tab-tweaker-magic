import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'radical-candor', title: 'Why Radical Candor Beats Comforting Myths' },
  { id: 'evidence', title: 'Evidence: AI Already Outperforms' },
  { id: 'career-resilience', title: 'From Job Security to Career Resilience' },
  { id: 'action-steps', title: 'Five Action Steps for Professionals' },
  { id: 'leader-actions', title: 'What Leaders Should Do' },
  { id: 'upside', title: 'The Upside of Existential Fear' }
];

export default function AIJobsArticle() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Is Coming for Your Job - And That's Good News | GigaRev"
        description="A candid look at how AI is reshaping careers and why this disruption could be the best thing for your professional growth. Learn how to adapt and thrive in the AI era."
        keywords="AI jobs, career development, future of work, AI disruption, professional growth, AI career impact"
        ogUrl="/blog/ai-jobs-article"
      />
      
      <PageHeader 
        title={'"AI Is Coming for Your Job" - and That\'s the Most Productive Wake-Up Call You\'ll Ever Get'}
        description="A candid look at AI's impact on careers and how to turn disruption into opportunity"
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
                      <span>March 22, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Career Development', 'Future of Work'].map((tag) => (
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
                    src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg"
                    alt="AI and Future of Work"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <div className="bg-card border border-border rounded-xl p-6 mb-12">
                      <blockquote className="text-xl font-sora italic mb-6">
                        "AI is coming for your jobs—heck, it's coming for my job, too.
                        Easy tasks will disappear. What was hard will become easy, and yesterday's 
                        'impossible' will be tomorrow's baseline. Either become exceptional or prepare 
                        for a career change."
                      </blockquote>
                      <p className="text-muted-foreground">
                        — Recent all-hands memo from a well-known tech CEO
                      </p>
                    </div>

                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Stripped of the shock value, the message carries a productive truth: the AI era 
                      rewards mastery, adaptability, and continuous reinvention—no matter your title.
                    </p>
                  </div>

                  <div id="radical-candor" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      1. Why Radical Candor Beats Comforting Myths
                    </h2>
                    
                    <p className="mb-6">
                      Most people prefer incremental change; leaders often soften bad news to preserve 
                      morale. That strategy backfires in exponential tech cycles. By stating the 
                      threat plainly, leaders:
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Short-circuit denial</h3>
                        <p>
                          Employees confront reality sooner, reducing the "wait-and-see" lag that 
                          kills careers.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Create urgency for upskilling</h3>
                        <p>
                          Teams start asking, "What can I automate? Where can I add uniquely human value?"
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Align everyone on growth mindsets</h3>
                        <p>
                          A shared understanding of risk catalyses collective learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="evidence" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      2. Evidence: AI Already Outperforms Routine Human Work
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Function</th>
                            <th className="border border-border p-4 text-left">AI Capability Today</th>
                            <th className="border border-border p-4 text-left">Human Cost Savings</th>
                            <th className="border border-border p-4 text-left">Quality Delta</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Customer Support</td>
                            <td className="border border-border p-4">24/7 chatbots with &lt;1 s response</td>
                            <td className="border border-border p-4">Reduces Tier-1 headcount</td>
                            <td className="border border-border p-4">Comparable CSAT for FAQs</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Marketing Creative</td>
                            <td className="border border-border p-4">Gen-AI images & copy in minutes</td>
                            <td className="border border-border p-4">Cuts agency fees</td>
                            <td className="border border-border p-4">A/B tests show equal or higher CTR</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Software Dev</td>
                            <td className="border border-border p-4">Code‐completion & test generation</td>
                            <td className="border border-border p-4">Speeds delivery cycles</td>
                            <td className="border border-border p-4">Fewer syntax & boilerplate errors</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-muted-foreground mb-12">
                      The pattern is clear: repetitive tasks collapse to near-zero marginal cost. 
                      The only defensible roles are those that direct, refine, or extend AI capabilities.
                    </p>
                  </div>

                  <div id="career-resilience" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      3. From Job Security to Career Resilience
                    </h2>
                    
                    <p className="mb-6">
                      Instead of asking, "Is my job safe?" ask, "Which capabilities make me expensive 
                      to automate?"
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Meta-skills</h3>
                        <p>
                          Prompt engineering, critical thinking, ethical AI governance.
                          These skills ride atop any functional domain and are still hard to codify.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Hybrid expertise</h3>
                        <p>
                          A marketer who can write Python, or a lawyer who understands LLM risk, 
                          becomes a force-multiplier.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Creative synthesis</h3>
                        <p>
                          AI is great at remixing; humans still excel at framing novel problems 
                          and narratives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="action-steps" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      4. Five Action Steps for Professionals
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Week</th>
                            <th className="border border-border p-4 text-left">Action</th>
                            <th className="border border-border p-4 text-left">Outcome</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">1</td>
                            <td className="border border-border p-4">
                              Audit your workflow—highlight rote checkpoints
                            </td>
                            <td className="border border-border p-4">
                              Identify quick-win automations
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">2</td>
                            <td className="border border-border p-4">
                              Upskill on a Gen-AI tool relevant to your craft
                            </td>
                            <td className="border border-border p-4">
                              Immediate productivity boost
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">3</td>
                            <td className="border border-border p-4">
                              Build a tiny automation that saves ≥30 min/week
                            </td>
                            <td className="border border-border p-4">
                              Hands-on learning, visible ROI
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">4</td>
                            <td className="border border-border p-4">
                              Produce a personal "AI-augmented" showcase
                            </td>
                            <td className="border border-border p-4">
                              Demonstrates future readiness
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">5</td>
                            <td className="border border-border p-4">
                              Join or start an internal AI guild
                            </td>
                            <td className="border border-border p-4">
                              Peer feedback, shared resources
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="leader-actions" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      5. What Leaders Should Do This Quarter
                    </h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Create a safe sandbox</h3>
                        <p>Give employees room to experiment without breaking prod systems.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Tie bonuses to automation wins</h3>
                        <p>Reward the elimination of manual steps, not just output volume.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Invest in data quality</h3>
                        <p>AI is only as good as the signals you feed it; fix silos now.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Appoint an AI ethics custodian</h3>
                        <p>Guard-rails build trust with customers and regulators.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Communicate relentlessly</h3>
                        <p>
                          Radical candor shouldn't be a one-off email. Make AI adaptation a 
                          standing agenda item.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="upside" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      6. The Upside of Existential Fear
                    </h2>
                    
                    <p className="mb-6">
                      History shows that disruptive tech creates more value than it destroys—for 
                      those who adapt early. Steam engines eliminated hand-loom weaving jobs but 
                      birthed industrial engineering. The internet killed local classifieds yet 
                      unleashed global e-commerce.
                    </p>

                    <p className="mb-6">
                      AI's trajectory is no different. The uncomfortable memo simply compressed the 
                      timeline and removed the illusion of safety. Treat it as permission to 
                      reinvent fast:
                    </p>

                    <ul className="space-y-4 mb-12">
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Automate the rote.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Master the high-impact.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span>Continuously reskill.</span>
                      </li>
                    </ul>

                    <p className="mb-12">
                      Those who do will find that AI isn't coming for their jobs—it's working with 
                      them to reach levels of creativity and productivity no "pre-AI" career ever could.
                    </p>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <h3 className="font-sora font-medium mb-4">Ready to Act?</h3>
                      <p className="text-lg">
                        If you lead a team and need a playbook to transition from "AI curious" to 
                        "AI powered," GigaRev's Lean AI workshops deliver an actionable roadmap—no 
                        jargon, no vendor hype, just ROI-backed next steps. Book a 30-minute consult 
                        today and turn radical candor into rapid advantage.
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
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'pipeline-ops', title: 'From "Pipeline-Ops" to Predict-and-Act' },
  { id: 'pillars', title: 'Four Pillars of an AI Revenue Engine' },
  { id: 'roadmap', title: 'Launch Roadmap (90 Days)' },
  { id: 'metrics', title: 'Metrics that Matter' },
  { id: 'final-word', title: 'Final Word' }
];

export default function FutureOfSales() {
  return (
    <div>
      <PageHeader 
        title="The Future of Sales: AI-Powered Revenue Optimization" 
        description="How AI agents are shrinking sales cycles, super-charging forecasts, and boosting win-rates—backed by new Gartner, McKinsey and Salesforce data."
      />
      
      <div className="pt-20">
        <article className="container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
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
                      <span>Darshan Karthik, CMO & Head of AI Ops</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>March 12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {['Sales', 'AI', 'Revenue'].map((tag) => (
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
                    src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg"
                    alt="Future of Sales"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Gen-AI is no longer a "nice-to-have" overlay on your CRM—it's becoming the nervous system of high-growth revenue teams. 
                      Gartner now predicts 95% of seller research workflows will start with AI by 2027, and Salesforce finds that AI-enabled 
                      sales orgs are 1.3× more likely to report year-over-year revenue growth. The message is clear: the next sales advantage 
                      will belong to companies that let autonomous agents sense, predict and act across the funnel in real time.
                    </p>
                  </div>

                  <div id="pipeline-ops" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">From "Pipeline-Ops" to Predict-and-Act</h2>
                    <p className="mb-6">
                      Traditional RevOps is descriptive ("What happened?"). AI makes it prescriptive ("What should we do next?"). 
                      McKinsey's 2024 survey shows a majority of enterprises already reporting measurable cost reductions and productivity 
                      gains from gen-AI initiatives in commercial functions. Early adopters are:
                    </p>

                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Legacy Step</th>
                            <th className="border border-border p-4 text-left">AI Equivalent</th>
                            <th className="border border-border p-4 text-left">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Weekly pipeline roll-ups</td>
                            <td className="border border-border p-4">Live deal-health scoring</td>
                            <td className="border border-border p-4">Forecast variance ↓</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Manual list-building</td>
                            <td className="border border-border p-4">Lead-enrichment bots</td>
                            <td className="border border-border p-4">Research hours ↓</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Static cadences</td>
                            <td className="border border-border p-4">LLM-generated, persona-specific sequences</td>
                            <td className="border border-border p-4">Reply rates ↑</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Ad-hoc discounts</td>
                            <td className="border border-border p-4">RL price optimizers</td>
                            <td className="border border-border p-4">Margin protection</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="pillars" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Four Pillars of an AI Revenue Engine</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">1. Unified Activity Stream</h3>
                        <p>
                          Consolidate email, call, calendar, usage and payment events in a feature store; 
                          richer context drives sharper predictions.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">2. Predictive Layer</h3>
                        <p>
                          Tabular transformers model quota attainment while LLM "message assistants" inside 
                          LinkedIn Sales Navigator draft outreach based on live account insights.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">3. Action Hub</h3>
                        <p>
                          Agents push tasks into CRM, sequencers or CPQ the moment a threshold is crossed. 
                          HubSpot reports 87% of reps now use their CRM more because AI removes data-entry friction.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">4. Guard-Rails</h3>
                        <p>
                          Policy LLMs redact PII, enforce tone and block risky offers—essential as spending 
                          on gen-AI platforms rockets toward $202B by 2027.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="roadmap" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Launch Roadmap (90 Days)</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Phase</th>
                            <th className="border border-border p-4 text-left">Outcome</th>
                            <th className="border border-border p-4 text-left">Time-box</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Pilot</td>
                            <td className="border border-border p-4">Deal-health scoring + live coaching for 1 squad</td>
                            <td className="border border-border p-4">4 wks</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Expand</td>
                            <td className="border border-border p-4">AI lead-enrichment + tailored cadences floor-wide</td>
                            <td className="border border-border p-4">8 wks</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Automate</td>
                            <td className="border border-border p-4">RL discount optimizer embedded in CPQ</td>
                            <td className="border border-border p-4">12 wks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="metrics" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Metrics that Matter</h2>
                    
                    <div className="space-y-4 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Time-to-Signal</h3>
                        <p>Minutes from buyer action to rep alert.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Forecast Delta</h3>
                        <p>Gap between AI forecast and actuals.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Automation Share</h3>
                        <p>% of touches initiated or assisted by AI.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Guard-Rail Recall</h3>
                        <p>Frequency of blocked non-compliant content.</p>
                      </div>
                    </div>
                  </div>

                  <div id="final-word" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Final Word</h2>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg mb-6">
                        AI won't replace reps; reps who wield AI will replace those who don't. Ship a guarded pilot, 
                        prove uplift, then let the data reinforce a moat your competitors can't reverse-engineer.
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
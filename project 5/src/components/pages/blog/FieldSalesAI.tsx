import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-now', title: 'Why "Soon" Means Now' },
  { id: 'quick-wins', title: 'Quick-Win AI Modules' },
  { id: 'data-moat', title: 'Building a Defensible Data Moat' },
  { id: 'architecture', title: 'Reference Architecture' },
  { id: 'roadmap', title: 'Execution Roadmap' },
  { id: 'risks', title: 'Risks & Mitigations' },
  { id: 'takeaways', title: 'Key Takeaways' }
];

export default function FieldSalesAI() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Field Sales AI: The 2025 Implementation Playbook | GigaRev"
        description="A practical guide to implementing AI in field sales operations, from route optimization to agent-based automation. Learn how to transform your field sales team."
        keywords="field sales AI, sales automation, route optimization, sales AI implementation, field sales technology"
        ogUrl="/blog/field-sales-ai"
      />
      
      <PageHeader 
        title="Field Sales AI: The 2025 Implementation Playbook" 
        description="A practical guide to implementing AI in field sales operations"
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
                      <span>March 18, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Field Sales', 'AI', 'Implementation'].map((tag) => (
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
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    alt="Field Sales AI"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Field-sales organizations that seize AI now are widening gaps their slower rivals may never close. 
                      Route-optimization engines already shave hours off windshield time; edge-AI product-visualizers turn 
                      parking-lot demos into immersive showrooms; and agentic co-pilots coach new reps in minutes instead of weeks. 
                      Meanwhile, every mile driven, pitch delivered, and order placed feeds a proprietary data moat that compounds 
                      performance advantages over time.
                    </p>
                  </div>

                  <div id="why-now" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">1. Why "Soon" Means Now</h2>
                    <p className="mb-6">Front-line results show AI pay-offs are immediate:</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 mb-8">
                      <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium">NextBillion.ai</span>
                          <span>
                            A healthcare sample-collection firm cut fuel and planning costs after standing up 
                            a NextBillion.ai route-optimiser for its field techs.
                          </span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium">Mindtickle</span>
                          <span>
                            Mindtickle's generative role-play coach slashed ramp time for new sellers by 
                            replacing live call-shadowing with AI feedback loops.
                          </span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium">DigitalDefynd</span>
                          <span>
                            Coca-Cola's AI initiatives include dynamic route and inventory optimisation for 
                            merchandisers, proving even legacy brands are embracing field-side intelligence.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-muted-foreground mb-12">
                      Lagging firms risk higher churn, bloated fuel spend, and shrinking margins while 
                      AI-enabled competitors lock in better territory coverage and rep productivity.
                    </p>
                  </div>

                  <div id="quick-wins" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">2. Quick-Win AI Modules You Can Deploy in &lt; 90 Days</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Workflow</th>
                            <th className="border border-border p-4 text-left">AI Module</th>
                            <th className="border border-border p-4 text-left">Readily Available Tools</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Daily routing</td>
                            <td className="border border-border p-4">Multi-stop route optimiser with traffic & visit-priority scoring</td>
                            <td className="border border-border p-4">Salesforce Maps, Badger Maps</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">On-site demos</td>
                            <td className="border border-border p-4">AR product visualiser that places SKUs in a live camera view</td>
                            <td className="border border-border p-4">Augment, StayinFront AR</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Rep coaching</td>
                            <td className="border border-border p-4">AI role-play simulator with sentiment scoring & objection drills</td>
                            <td className="border border-border p-4">Mindtickle AI coach</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Territory research</td>
                            <td className="border border-border p-4">LLM agent that scrapes local permits, demographic data & LinkedIn signals</td>
                            <td className="border border-border p-4">OpenAI GPT-4 or Claude-3 wrapped in an n8n workflow</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Instant recap & CRM logging</td>
                            <td className="border border-border p-4">Edge ASR + summariser that transcribes voice notes offline then syncs</td>
                            <td className="border border-border p-4">Low-footprint edge appliances for sales-vision analytics</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-muted-foreground mb-12">
                      Each module is self-contained, API-driven, and can be piloted with a small rep cohort before global rollout.
                    </p>
                  </div>

                  <div id="data-moat" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">3. Building a Defensible Data Moat</h2>
                    
                    <div className="space-y-8 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">3.1 Capture Proprietary Signals</h3>
                        <p>
                          Combine GPS tracks, check-in photos, invoice SKUs, and call transcripts into a single feature store. 
                          Only you will own this behavioural exhaust, making future models harder for competitors to replicate.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">3.2 Run Edge Inference</h3>
                        <p>
                          Deploy small models on mobile or in-vehicle gateways so insights (e.g., planogram compliance) 
                          happen in &lt; 50 ms—even with weak connectivity. Edge AI paired with 5G is emerging as the 
                          performance standard for real-time field intelligence.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">3.3 Launch Agentic Workflows</h3>
                        <p>
                          ServiceNow and other platforms are pivoting from "copilots" to autonomous agents that plan, 
                          act, and learn with minimal oversight. Early adopters will accumulate feedback-loop data that 
                          fine-tunes these agents far beyond generic industry models.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="architecture" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">4. Reference Architecture for a Modern Field-Sales Stack</h2>
                    
                    <div className="bg-card border border-border rounded-xl p-6 mb-12">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">Edge Layer</span>
                          <span>WASM/ONNX models on rugged tablets; AR visualiser.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">Event Spine</span>
                          <span>MQTT or Kafka streams for GPS, orders, media.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">Feature Store</span>
                          <span>Central Snowflake or BigQuery table fed by dbt jobs.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">ML Services</span>
                          <span>Route optimiser (e.g., Omdena intelligent-routing model).</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">Orchestration</span>
                          <span>n8n or Temporal triggers: "check-in → generate summary → sync CRM."</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-primary font-medium w-32">Guard-rails</span>
                          <span>Policy LLM filtering off-brand or non-compliant content.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="roadmap" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">5. Execution Roadmap</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Phase 1 — Data & Process Audit (Weeks 1-2)</h3>
                        <p>Map daily rep motions, data sources, and KPI bottlenecks.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Phase 2 — Pilot Two Quick-Wins (Weeks 3-8)</h3>
                        <p>
                          Deploy route optimiser and role-play coach to one territory; benchmark fuel, 
                          meeting count, and ramp metrics versus control.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Phase 3 — Edge & AR Expansion (Quarter 2)</h3>
                        <p>Roll AR visualiser to priority SKUs and instrument edge devices for offline inference.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Phase 4 — Agentic Automation (Quarter 3+)</h3>
                        <p>
                          Introduce autonomous territory re-balancing and self-adjusting playbooks using 
                          reinforcement-learning agents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="risks" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">6. Risks & Mitigations</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Risk</th>
                            <th className="border border-border p-4 text-left">Guard-Rail</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Rep push-back on AI scores</td>
                            <td className="border border-border p-4">
                              Provide transparent criteria & bonus incentives tied to AI-measured behaviours.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Data-privacy violations</td>
                            <td className="border border-border p-4">
                              Use PII hashing/redaction at edge before cloud sync.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Model drift on traffic or buyer behaviour changes</td>
                            <td className="border border-border p-4">
                              Schedule quarterly re-training with fresh telemetry.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="takeaways" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">7. Key Takeaways</h2>
                    
                    <div className="bg-card border border-border rounded-xl p-6 mb-12">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>
                            Field-sales AI is no longer experimental—it is already mainstream in routing, 
                            coaching, and on-site engagement.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>
                            Moving first lets you stockpile proprietary route, interaction, and performance 
                            data—your long-term moat.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>
                            A phased roadmap—quick-win pilots, edge rollouts, then agentic automation—delivers 
                            ROI fast without overwhelming teams.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg font-medium text-primary">
                        Ready to outpace your rivals? Start with one pilot, feed every mile and meeting into 
                        your feature store, and let AI compound your advantage.
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
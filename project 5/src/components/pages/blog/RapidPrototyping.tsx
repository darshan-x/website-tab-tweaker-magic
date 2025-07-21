import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook, Code, Bot, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'prototype-stack', title: 'The 4-Layer Prototype Stack' },
  { id: 'playbook', title: 'Three-Sprint Playbook (21 Days)' },
  { id: 'guard-rails', title: 'Guard-Rails for Speed Without Spaghetti' },
  { id: 'graduation', title: 'When to Graduate to "Product"' },
  { id: 'case-study', title: 'Case Snapshot' },
  { id: 'closing', title: 'Closing Byte' }
];

export default function RapidPrototyping() {
  return (
    <div>
      <PageHeader 
        title="Rapid Prototyping: From Concept to MVP in Weeks" 
        description="Ship MVPs in 21 days using prompt-first design, low-code scaffolds and AI coding copilots—complete with guard-rails and cost sentinels."
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
                      <span>Ravish Kamath, CTO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>March 10, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {['Prototyping', 'MVP', 'Development'].map((tag) => (
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
                    alt="Rapid Prototyping"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      Six-month roadmaps are retirement plans in an exponential tech cycle. Google's Gemini 2.5 Pro now handles 
                      million-token context windows at starter-model prices, while Figma just unveiled AI that jumps from prompt 
                      to live website code in one click. Pair that with low-code adoption rising across 70% of North-American 
                      enterprises and you have the perfect storm for week-long MVP sprints.
                    </p>
                  </div>

                  <div id="prototype-stack" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">The 4-Layer Prototype Stack</h2>

                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Layer</th>
                            <th className="border border-border p-4 text-left">Tool Picks</th>
                            <th className="border border-border p-4 text-left">Why It Matters</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Prompt-First Specs</td>
                            <td className="border border-border p-4">GPT-4o, Gemini 2.5</td>
                            <td className="border border-border p-4">Converts natural-language ideas into skeleton code & tests.</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Low-/No-Code Scaffolding</td>
                            <td className="border border-border p-4">Supabase, Retool, FlutterFlow</td>
                            <td className="border border-border p-4">Stands up auth, CRUD & dashboards in hours.</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Headless AI Services</td>
                            <td className="border border-border p-4">OpenAI / Anthropic APIs</td>
                            <td className="border border-border p-4">Swap models without refactor pain.</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">One-Click DevOps</td>
                            <td className="border border-border p-4">Terraform + GitHub Actions</td>
                            <td className="border border-border p-4">Spin preview envs for every PR; stakeholders break builds fast.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-muted-foreground mb-12">
                      Low-code shops report development cycles shrinking by 60% and costs by 40% in recent IDC studies.
                    </p>
                  </div>

                  <div id="playbook" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Three-Sprint Playbook (21 Days)</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Week</th>
                            <th className="border border-border p-4 text-left">Deliverable</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">1</td>
                            <td className="border border-border p-4">Clickable Figma prototype + prompt spec</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">2</td>
                            <td className="border border-border p-4">Functional stub (auth, primary flow, mock data)</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">3</td>
                            <td className="border border-border p-4">AI-powered MVP with analytics & cost sentinel</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-muted-foreground mb-12">
                      GitHub's research shows copilots slash time-to-first-draft code by 55% and boost developer "flow" states—a 
                      morale win that compounds.
                    </p>
                  </div>

                  <div id="guard-rails" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Guard-Rails for Speed Without Spaghetti</h2>
                    
                    <div className="space-y-4 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Feature Flags</h3>
                        <p>Canary to 5% users; rollback = toggle.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">LLM Unit Tests</h3>
                        <p>Agents auto-write tests; CI fails, no merge.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Cost Sentinel</h3>
                        <p>Track model spend per feature; prune wallet-bleeders.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-2">Policy Filters</h3>
                        <p>Block PII, profanity, off-brand tone.</p>
                      </div>
                    </div>
                  </div>

                  <div id="graduation" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">When to Graduate to "Product"</h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Trigger</th>
                            <th className="border border-border p-4 text-left">Interpretation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Users hack work-arounds</td>
                            <td className="border border-border p-4">Core value ✓; time to harden UX</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">>30% sessions rely on AI outputs</td>
                            <td className="border border-border p-4">Fine-tune own model / edge inference</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">API spend > unit-econ ceiling</td>
                            <td className="border border-border p-4">Optimize prompts or swap vendor</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Latency breaches SLA</td>
                            <td className="border border-border p-4">Consider on-prem or WASM edge deploy</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="case-study" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Case Snapshot</h2>
                    
                    <div className="bg-card border border-border rounded-xl p-6 mb-12">
                      <p>
                        A health-tech startup used this stack to build an AI triage bot in 21 days, landing a seed term-sheet 
                        after 100 patient interviews. Their secret? Ruthless scoping, prompt-generated boilerplate, and a 
                        guard-rail-first mindset.
                      </p>
                    </div>
                  </div>

                  <div id="closing" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">Closing Byte</h2>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg mb-6">
                        Great products aren't planned; they're iterated. Ship the ugly baby, learn, and level-up. If your concept 
                        isn't MVP-ready within a month, the market will birth an alternative. Let's build before your competitors 
                        finish their discovery workshop.
                      </p>
                      <p className="text-lg font-medium text-primary">
                        Need help executing either playbook? GigaRev's Rapid-Prototyping and Rev-Intelligence teams bolt in pre-built 
                        agents, guard-rails and dashboards—ROI in < 90 days.
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
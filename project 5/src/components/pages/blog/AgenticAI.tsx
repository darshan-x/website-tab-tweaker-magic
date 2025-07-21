import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-hard', title: 'Why Agentic Products Are Uniquely Challenging' },
  { id: 'stack', title: 'The Structural Stack That Makes Agents Reliable' },
  { id: 'pitfalls', title: 'Five Pitfalls We See in the Wild' },
  { id: 'checklist', title: 'Readiness Checklist' },
  { id: 'takeaways', title: 'Key Takeaways' }
];

export default function AgenticAI() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Why Building Agentic AI Products Is Harder Than It Looks | GigaRev"
        description="Agentic software demands far more than an LLM and a few function calls. Discover the full-stack architecture, common pitfalls, and readiness checklist for production-grade AI agents."
        keywords="agentic AI, AI agents, workflow orchestration, semantic cache, Temporal, LangGraph, enterprise AI architecture, GigaRev"
        ogUrl="/blog/agentic-ai-challenges"
        canonical="/blog/agentic-ai-architecture"
      />
      
      <PageHeader 
        title="Why Building Agentic AI Products Is Harder Than It Looks — and How to Get It Right" 
        description="A deep dive into the challenges and solutions of building production-grade AI agents"
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
                      <span>Ravish Kamath, CTO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>May 19, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI Agents', 'Architecture', 'Implementation'].map((tag) => (
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
                    src="https://res.cloudinary.com/dpxfwxxzi/image/upload/v1747637309/ChatGPT_Image_May_19_2025_12_18_06_PM_yfan91.png"
                    alt="Agentic AI Architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      The term "AI agent" has become synonymous with promise: software that can plan, decide, and execute work autonomously. Yet anyone who has tried to shepherd one from demo to deployment knows the journey is far tougher than the hype suggests. At GigaRev we have spent the past year pushing agentic systems into live sales, marketing, and operations environments. Here's what we have learned about the unseen plumbing you need—and the traps that catch teams who treat agents like "just another LLM feature."
                    </p>
                  </div>

                  <div id="why-hard" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">1. Why Agentic Products Are Uniquely Challenging</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Dynamic problem-solving under tight constraints</h3>
                        <p>
                          Agents must sift through terabytes of logs, configs, and tickets; pick the right tools; respect access controls; and still answer in seconds. Users will not forgive "thinking time" the way they tolerate human pauses.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">No obvious reward function</h3>
                        <p>
                          Most enterprise tasks lack a clean, numeric score. You have to encode stop criteria and success tests yourself, or the agent will loop or hallucinate.
                        </p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Unequal value of work</h3>
                        <p>
                          Diagnosing a multi-region outage and summarising a Slack thread may consume similar tokens but carry radically different risk. Reliability, oversight, and pricing must reflect that spread.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="stack" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">2. The Structural Stack That Makes Agents Reliable</h2>
                    
                    <p className="mb-6">Instead of a table, picture the platform as eight interlocking layers, rising from raw data to the end-user experience.</p>

                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Data Plane</h3>
                        <p>Authoritative databases, log stores, SaaS APIs, plus vector or graph indices for millisecond retrieval.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Memory & Semantic Cache</h3>
                        <p>A fast store that remembers solved subtasks so the agent reuses proven plans instead of re-planning from scratch.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Tool Registry & Sandbox</h3>
                        <p>A catalogue of type-safe APIs (OpenAPI / JSON schema) enforced by a secure execution layer that handles ACLs, rate limits, and rollbacks.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Planner & Policy Engine</h3>
                        <p>The reasoning core that turns a business goal into an ordered set of tool calls, complete with back-tracking rules and stop checks.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Durable Workflow Orchestrator</h3>
                        <p>A checkpointed engine (e.g., Temporal) that drives each step, persists state, and replays after crashes or human approvals.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Evaluation & Guardrails</h3>
                        <p>A harness of golden-path tests plus real-time filters for hallucinations, PII, and policy violations.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Observability & Cost Control</h3>
                        <p>Structured traces, latency and token meters, semantic diffs, and a kill / retry console for on-call engineers.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Experience Layer</h3>
                        <p>A stable API or SDK fronted by the chat UI, Slack bot, CLI, or widget in which users live.</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-12">Swap technologies to suit your stack; keep the responsibilities intact.</p>
                  </div>

                  <div id="pitfalls" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">3. Five Pitfalls We See in the Wild—and How to Dodge Them</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Hallucination Loops</h3>
                        <p className="mb-2">Root cause: noisy data or missing stop checks.</p>
                        <p>Fix: guardrails between every hop plus deterministic success tests.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Run-away Cost</h3>
                        <p className="mb-2">Root cause: recursive calls across huge corpora.</p>
                        <p>Fix: semantic caching and per-task budget ceilings.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Latency Spikes</h3>
                        <p className="mb-2">Root cause: serial tool calls and cold embeddings.</p>
                        <p>Fix: parallel fan-out in the workflow layer and hierarchical retrieval that narrows the search space before the LLM sees a token.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Brittle Evaluation</h3>
                        <p className="mb-2">Root cause: manual QA instead of scripted tests.</p>
                        <p>Fix: golden-path suites that run on every deployment.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Security Regressions</h3>
                        <p className="mb-2">Root cause: ad-hoc tool wrappers bypassing IAM.</p>
                        <p>Fix: a central registry with least-privilege scopes and signed trace IDs.</p>
                      </div>
                    </div>
                  </div>

                  <div id="checklist" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">4. Readiness Checklist Before You Go Live</h2>
                    
                    <div className="space-y-4 mb-12">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary">1</span>
                        </div>
                        <p>Golden-path tests cover the top twenty business tasks.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary">2</span>
                        </div>
                        <p>Cost and latency budgets are enforced with auto-kill guards.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary">3</span>
                        </div>
                        <p>Workflow replay and semantic diff tooling exist for rapid post-mortems.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary">4</span>
                        </div>
                        <p>Cross-tenant joins and tool scopes have passed a security review.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary">5</span>
                        </div>
                        <p>Human escalation is modelled as a formal tool (t_human) with known latency and cost.</p>
                      </div>
                    </div>
                  </div>

                  <div id="takeaways" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">5. Key Takeaways</h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Agents are full-stack products. A planner without durable workflows, caching, and guardrails is a liability.</p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Durability beats bravado. Use a workflow engine built for retries; your future self will thank you.</p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Cache what you can, trace everything else. Speed and auditability are non-negotiable in enterprise deals.</p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Price outcomes, not tokens. Classify units of work by value and risk, then align credits or SLAs accordingly.</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg mb-6">
                        Agentic AI is hard—but with the right architecture, guardrails, and operational culture, it becomes repeatable. If you are ready to explore agentic automation across sales, marketing, or customer success, GigaRev can help you design, prototype, and scale a platform that truly earns its keep. Let's build agents that do the real work—safely, quickly, and at the right price.
                      </p>
                      <Button size="lg" className="w-full pill-button bg-primary hover:bg-primary/90">
                        <span>Talk to Our Engineering Team</span>
                        <ArrowRight className="button-icon h-4 w-4" />
                      </Button>
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
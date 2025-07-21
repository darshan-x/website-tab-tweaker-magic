import { motion } from 'framer-motion';
import { ArrowRight, Brain, LineChart, Users, MessageSquare, Code, Bot, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const categories = [
  {
    title: 'Marketing',
    icon: Users,
    useCases: [
      {
        title: 'Hyper-Personalised Campaigns',
        description: 'Foundation models generate, test and rotate thousands of creative variants, slashing acquisition cost by ≈20% for early adopters.',
        source: 'AI Marketing Assistant, Adobe for Business',
        solution: 'Performance Stack wires generative creatives into brand-safe dynamic-creative-optimisation (DCO).'
      },
      {
        title: 'Predictive Audience Targeting',
        description: 'AI reallocates budget toward high-intent micro-segments in real time, a 2025 "top growth driver" per Adobe\'s Digital Trends report.',
        source: 'Adobe for Business',
        solution: 'Real-time bid optimiser with policy guard-rails.'
      },
      {
        title: 'AI-First Content Ops',
        description: 'LLM copilots draft SEO articles, social posts and email nurtures; HBR notes material lift in organic traffic for AI-led teams.',
        source: 'Forbes',
        solution: 'Prompt libraries + tone-checker agents.'
      }
    ],
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Sales',
    icon: LineChart,
    useCases: [
      {
        title: 'Deal-Health Scoring & Live Coaching',
        description: 'Gartner predicts 95% of seller research workflows will start with AI by 2027. Transformers flag at-risk deals and whisper talk-track fixes mid-call.',
        source: 'Gartner',
        solution: 'Revenue-Intelligence Core bundles scoring, enrichment and live coach.'
      },
      {
        title: 'Autonomous Lead Enrichment',
        description: 'Agents pull firmographic and technographic data, freeing reps from manual research and boosting connect rates.',
        source: 'Gartner',
        solution: 'CRM plug-in delivers updated records every hour.'
      },
      {
        title: 'Dynamic Pricing & Discounting',
        description: 'Reinforcement-learning models fine-tune quotes to maximise margin—McKinsey finds double-digit win-rate lift in pilot studies.',
        source: 'McKinsey & Company',
        solution: 'RL policy engine that sits inside your CPQ.'
      }
    ],
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Customer Support',
    icon: MessageSquare,
    useCases: [
      {
        title: 'Multimodal Concierge Bots',
        description: 'Contact-centre leaders are shifting to bots that see, hear and act, cutting Tier-1 volume while keeping CSAT stable.',
        source: 'McKinsey & Company',
        solution: 'Camera-, voice- and text-enabled concierge with PII redaction.'
      },
      {
        title: 'Predictive Ticket Routing',
        description: 'Time-series models funnel issues to the right skill group, trimming handle time and queue backlogs—McKinsey flags this as a 2025 "cost-out" lever.',
        source: 'McKinsey & Company',
        solution: 'Routing agent tied to feature store + workforce-management API.'
      }
    ],
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Customer Success',
    icon: Shield,
    useCases: [
      {
        title: 'Churn-Risk & Expansion Signals',
        description: 'AI-driven health scores let CS teams cover larger books without losing the personal touch; SaaS analysts list this as the #1 CS trend for 2025.',
        solution: 'End-to-end churn predictor and upsell recommender.'
      },
      {
        title: 'Proactive Playbook Automation',
        description: 'LLM agents trigger educative nudges and QBR prep the moment a risk or growth signal fires.',
        source: 'SuccessCOACHING',
        solution: 'Temporal-orchestrated workflows plus Slack nudges.'
      }
    ],
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Product Development',
    icon: Code,
    useCases: [
      {
        title: 'Generative Design & Code',
        description: 'Gemini 2.5-class models turn prompts into working prototypes with million-token context, letting teams jump from idea to coded UI almost instantly.',
        solution: 'Rapid-Prototyping Sprint—concept to AI-enabled MVP in three weeks.'
      },
      {
        title: 'Simulation-Driven Engineering',
        description: 'GPU-accelerated generative models output and test thousands of CAD or molecule variants; NVIDIA highlights massive cycle-time compression for manufacturers.',
        source: 'NVIDIA Developer',
        solution: 'Cloud-based simulation cluster + cost sentinel.'
      }
    ],
    color: 'from-secondary/50 to-secondary/10'
  }
];

const executiveChecklist = [
  { function: 'Marketing', pilot: 'personalised ad generator', kpi: 'CAC ↓' },
  { function: 'Sales', pilot: 'live deal-health & coaching', kpi: 'Win-rate ↑' },
  { function: 'Support', pilot: 'multimodal concierge', kpi: 'AHT ↓, CSAT ↔' },
  { function: 'Success', pilot: 'churn predictor + playbooks', kpi: 'NRR ↑' },
  { function: 'Product', pilot: 'AI-coded prototype', kpi: 'Time-to-MVP ↓' }
];

export default function AIUseCases() {
  return (
    <div>
      <PageHeader 
        title="AI Use Cases" 
        description="Explore how AI can transform your business operations"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Brain className="h-4 w-4" />
                  <span className="text-sm font-medium">AI Use Cases</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  AI budgets keep surging
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Gartner estimates global generative-AI spend will rocket to $644 billion by 2025—and executive teams are hunting for use-cases that move the revenue needle now.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-16">
              {categories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-sora font-semibold">{category.title}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.useCases.map((useCase, j) => (
                      <div
                        key={j}
                        className={`bg-gradient-to-b ${category.color} border border-border rounded-xl p-6`}
                      >
                        <h3 className="text-lg font-sora font-semibold mb-4">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-4">{useCase.description}</p>
                        {useCase.source && (
                          <div className="text-sm text-muted-foreground mb-4">
                            Source: {useCase.source}
                          </div>
                        )}
                        <div className="flex items-start gap-2 text-sm">
                          <Bot className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <div>
                            <span className="font-medium text-accent">GigaRev fit:</span>
                            <span className="ml-1">{useCase.solution}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Checklist */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-sora font-semibold mb-8 text-center">Quick Executive Checklist</h2>
            
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-12">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="p-4 text-left font-medium">Function</th>
                    <th className="p-4 text-left font-medium">Fast Pilot (30–60 days)</th>
                    <th className="p-4 text-left font-medium">KPI to Watch</th>
                  </tr>
                </thead>
                <tbody>
                  {executiveChecklist.map((item, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="p-4">{item.function}</td>
                      <td className="p-4">{item.pilot}</td>
                      <td className="p-4 text-accent">{item.kpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <p className="text-lg mb-8">
                Ready to execute? GigaRev's pre-built agents, guard-rails and feature-store connectors land in ~90 days—turning AI hype into measurable P&L impact before your next board meeting.
              </p>
              
              <Button size="lg" className="pill-button bg-accent hover:bg-accent/90">
                <span>Book Strategy Call</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
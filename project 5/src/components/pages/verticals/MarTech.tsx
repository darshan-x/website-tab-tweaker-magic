import { motion } from 'framer-motion';
import { ArrowRight, Zap, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Brain, FileText, Play, Clock, DollarSign, TrendingUp, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Reps spend hours stitching decks from product, brand, and ROI data',
    impact: 'Fewer prospecting calls, stale collateral',
    icon: FileText
  },
  {
    challenge: 'Feature-heavy demos overwhelm buyers',
    impact: 'Long, unpredictable cycles',
    icon: Target
  },
  {
    challenge: 'Ramp time measured in quarters',
    impact: 'Costly churn in fast-growing teams',
    icon: Clock
  },
  {
    challenge: 'Manual outbound & nurture',
    impact: 'Inconsistent follow-up, missed ICPs',
    icon: MessageSquare
  },
  {
    challenge: 'Lack of usage-based signals during selling',
    impact: 'Blind-spot forecasts & weak expansion pitches',
    icon: LineChart
  }
];

const aiModules = [
  {
    title: 'Collateral Composer',
    description: 'GPT-4o/Gemini agent builds on-brand decks, one-pagers, and ROI calculators in <60s—auto-pulling vertical stats & screenshots.',
    kpi: '–2h prep per opp',
    icon: FileText,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Live Call Assistant',
    description: 'Real-time cue cards, competitor rebuttals, and next-step prompts inside Zoom, Teams, or Dialpad.',
    kpi: '+21% conversion on first call',
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'AI Role-Play Coach',
    description: 'Synthetic personas score objection handling; certifies reps before they hit the phones.',
    kpi: 'Ramp time –30%',
    icon: Bot,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Digital Prospecting Agent',
    description: 'LLM-driven bot outreaches via LinkedIn DM & email, auto-personalised with firmographic & technographic hooks.',
    kpi: '+18% meetings booked',
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Usage-Signal Notifier',
    description: 'Scrapes trial / freemium events; pings reps when users hit "aha" or stall.',
    kpi: '+17% expansion pipeline',
    icon: LineChart,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'QBR / Renewal Deck Builder',
    description: 'Pulls lift metrics, campaign wins, benchmarks—slides in <2 min.',
    kpi: 'CS prep –6h per account',
    icon: FileText,
    color: 'from-accent/50 to-accent/10'
  }
];

const sellerFeatures = [
  {
    title: 'Always-Fresh Stats',
    description: 'No more "let me get back to you."',
    icon: LineChart
  },
  {
    title: 'On-Message',
    description: 'Brand-style embeddings lock tone & visuals.',
    icon: MessageSquare
  },
  {
    title: 'Data-Driven Urgency',
    description: 'Usage spikes trigger instant follow-ups.',
    icon: TrendingUp
  },
  {
    title: 'Frictionless Coaching',
    description: 'Feedback happens without booking trainer calendars.',
    icon: Brain
  }
];

const deploymentFeatures = [
  {
    title: 'Plug',
    description: 'Native Salesforce, HubSpot, Outreach, Salesloft, or Chrome side-panel.',
    icon: Workflow
  },
  {
    title: 'Train',
    description: '48-hr ingestion of your playbooks, brand guide, and case studies.',
    icon: Bot
  },
  {
    title: 'Guard-Rail',
    description: 'SOC 2-ready policy LLM filters compliance, spam, and PII.',
    icon: Shield
  },
  {
    title: 'Iterate',
    description: 'Usage dashboards surface best prompts & coach loops.',
    icon: LineChart
  }
];

const pilotPhases = [
  {
    week: '0',
    milestone: 'Use-case scoping (pick 2 modules, 10 reps)',
    icon: Target
  },
  {
    week: '1-2',
    milestone: 'API integration & sandbox agent',
    icon: Workflow
  },
  {
    week: '3-4',
    milestone: 'Live reps, shadow metrics, prompt tuning',
    icon: Bot
  },
  {
    week: '5-6',
    milestone: 'KPI review (meetings, cycle, prep time)',
    icon: LineChart
  },
  {
    week: '7-9',
    milestone: 'Rollout to entire AE/BDR org + CS hand-off',
    icon: Users
  }
];

const faqs = [
  {
    question: 'Do we lose brand control?',
    answer: 'No—style-guide vectors enforce fonts, colours, tone.'
  },
  {
    question: 'What about deliverability for outreach bot?',
    answer: 'Warm IP rotation, custom throttling, opt-out compliance.'
  },
  {
    question: 'Can we A/B our own prompts?',
    answer: 'Yes—prompt versioning & multivariate testing built-in.'
  },
  {
    question: 'Pipeline security?',
    answer: 'All prompts & outputs logged; redaction & encryption at rest.'
  }
];

export default function MarTech() {
  return (
    <div>
      <PageHeader 
        title="MarTech Solutions" 
        description="Built for companies that sell marketing-automation, CDP, email/SMS, and journey-orchestration platforms"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">MarTech</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Help Your Reps Sell MarTech Like It Sells Itself
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  AI agents that auto-craft collateral, coach live calls, and even run digital prospecting—so every seller hits quota and every buyer feels the value on Day 1.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min Sales-AI Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Grab the 2-Page Solution Brief</span>
                  </Button>
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {[
                    { icon: Clock, label: 'Prep Time', value: '-85%' },
                    { icon: DollarSign, label: 'First-Call Conv.', value: '+21%' },
                    { icon: TrendingUp, label: 'Meetings', value: '+18%' },
                    { icon: Users, label: 'Ramp Time', value: '-30%' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-xl">
                      <stat.icon className="h-8 w-8 mb-4 text-primary" />
                      <div className="font-sora font-semibold text-2xl mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                The MarTech Sales Reality Check
              </h2>
              <p className="text-muted-foreground">
                Common pain-points that drain revenue in MarTech sales organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <challenge.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-lg font-sora font-medium mb-4">{challenge.challenge}</h3>
                  <p className="text-muted-foreground">{challenge.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Modules Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Sales-AI Enablement Suite for MarTech Vendors
              </h2>
              <p className="text-muted-foreground">
                Native integration with your CRM and sales tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiModules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${module.color} border border-border rounded-xl p-6`}
                >
                  <module.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{module.title}</h3>
                  <p className="text-muted-foreground mb-6">{module.description}</p>
                  <div className="text-lg font-sora font-medium text-accent">{module.kpi}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Why MarTech Sellers Love It
              </h2>
              <p className="text-muted-foreground">
                Purpose-built features for marketing technology sales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sellerFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Zero-Friction Deployment
              </h2>
              <p className="text-muted-foreground">
                Fast and secure implementation process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deploymentFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot Process Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                45-Day Pilot Plan
              </h2>
              <p className="text-muted-foreground">
                Fast-track implementation with measurable results.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {pilotPhases.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <phase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-sora font-medium mb-1">Week {phase.week}</div>
                      <p className="text-muted-foreground">{phase.milestone}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-sm text-muted-foreground text-center">
                All code can run in your VPC—no prospect data leaves your cloud.
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8">
              <h2 className="text-2xl font-sora font-semibold mb-6">
                Sample Outcome: Mid-Market PLG Vendor
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    'Meetings per BDR ↑ 20% (Digital Prospecting Agent)',
                    'First-call deck prep ↓ 110 min → 6 min (Collateral Composer)',
                    'Ramp-to-quota ↓ 2.7 → 1.8 months (Role-Play Coach)',
                    'Expansion ARR ↑ 14 pts with Usage-Signal Notifier'
                  ].map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <Button size="lg" className="pill-button">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-sora font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Transform Your MarTech Sales?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how our AI solutions can revolutionize your sales operations.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book MarTech Sales-AI Demo</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
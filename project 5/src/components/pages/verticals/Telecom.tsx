import { motion } from 'framer-motion';
import { ArrowRight, Radio, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Brain, Play, Clock, DollarSign, TrendingUp, FileCheck, MessageSquare, Zap, Wifi, Router } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Manual serviceability look-ups',
    impact: 'Lost deals to faster rivals',
    metric: 'Slow quotes, rep errors',
    icon: Target
  },
  {
    challenge: 'Paperwork-heavy quotes & LOAs',
    impact: 'Low conversion on first call',
    metric: '30–45 min per prospect',
    icon: FileCheck
  },
  {
    challenge: 'Route & dispatch juggling in spreadsheets',
    impact: 'OPEX bloat',
    metric: 'Empty truck rolls, overtime',
    icon: Workflow
  },
  {
    challenge: 'Reactive support model',
    impact: 'Churn & NPS hits',
    metric: 'Tickets spike after outages',
    icon: MessageSquare
  },
  {
    challenge: 'Billing & usage data spread across silos',
    impact: 'Flat ARPU',
    metric: 'No upsell timing, blind renewals',
    icon: DollarSign
  }
];

const aiModules = [
  {
    title: 'Instant Serviceability Check',
    description: 'AI parses address, GIS & plant data → "Yes/No + tech ready date" in <2s',
    kpi: '+23% quote rate',
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Quote & Contract Composer',
    description: 'Auto-builds on-brand PDF with plans, fees, e-sign link, and fiber map',
    kpi: '–25 min rep prep',
    icon: FileCheck,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Live Call Assistant',
    description: 'In-call speed test, competitor rebuttals, upsell cue cards',
    kpi: '+18% first-call close',
    icon: Brain,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Digital Prospecting Agent',
    description: 'Geo-targeted email & LinkedIn outreach to SMBs in build zones',
    kpi: '+20% new-logo meetings',
    icon: Bot,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Route & Dispatch Optimiser',
    description: 'AI re-orders truck rolls with traffic, install length, permit windows',
    kpi: '–17% fuel / OT',
    icon: Workflow,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Install Concierge Bot',
    description: 'SMS bot confirms appointment, pre-qual questions, reschedule',
    kpi: 'No-show rate –28%',
    icon: MessageSquare,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Bandwidth-Upsell Recommender',
    description: 'Time-series model flags heavy users & sends targeted upgrade offers',
    kpi: '+11% ARPU',
    icon: LineChart,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Churn-Risk Sentinel',
    description: 'Monitors tickets, RSSI, usage dips; alerts CX with retention script',
    kpi: '–19% voluntary churn',
    icon: Shield,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Network-Pulse Dashboard',
    description: 'LLM converts NOC alerts into plain-language SMS/email blasts',
    kpi: 'NPS dip avoided',
    icon: Wifi,
    color: 'from-accent/50 to-accent/10'
  }
];

const telecomFeatures = [
  {
    title: 'Plant & GIS Hooks',
    description: 'Real-time integration with VETRO, Esri, Comsof, etc.',
    icon: Router
  },
  {
    title: 'B/OSS Friendly',
    description: 'REST/GraphQL connectors for Salesforce, ServiceNow, Netcracker, Calix, Nokia Altiplano.',
    icon: Workflow
  },
  {
    title: 'Offline-Capable Field App',
    description: 'Edge models keep routing & workflows live in dead zones.',
    icon: Bot
  },
  {
    title: 'Reg & Privacy Ready',
    description: 'PII redaction, CPNI safeguards, SOC 2-ready audit trail.',
    icon: Shield
  }
];

const pilotPhases = [
  {
    week: '0',
    milestone: 'Pick 1 Sales + 1 CX quick-win module',
    icon: Target
  },
  {
    week: '1–2',
    milestone: 'API/GIS hookup, sandbox agent',
    icon: Workflow
  },
  {
    week: '3–4',
    milestone: 'Live reps & techs, prompt tuning',
    icon: Bot
  },
  {
    week: '5–6',
    milestone: 'KPI review (quotes, installs, churn)',
    icon: LineChart
  },
  {
    week: '7–9',
    milestone: 'Org-wide rollout; add Route Optimiser',
    icon: Zap
  }
];

const faqs = [
  {
    question: 'Does this replace our GIS or OSS?',
    answer: 'No—AI calls your existing systems, adds speed & intelligence.'
  },
  {
    question: 'Union or contractor field techs—any difference?',
    answer: 'Same mobile app; permissions & time tracking adjust by role.'
  },
  {
    question: 'What about local privacy rules?',
    answer: 'Edge inference + data-minimising prompts; compliant with CPNI and regional regs.'
  },
  {
    question: 'Can we start with just one market?',
    answer: 'Yes—typical pilot is one build zone or ten-rep inside-sales pod.'
  }
];

export default function Telecom() {
  return (
    <div>
      <PageHeader 
        title="Telecom & Fibre Solutions" 
        description="Built for regional & national ISPs, fiber overbuilders, cable MSOs, and CLECs"
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
                  <Radio className="h-4 w-4" />
                  <span className="text-sm font-medium">Telecom/Fibre</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Close More Installs & Keep Subscribers for Life—with AI That Sells, Schedules & Saves
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  AI agents that pinpoint serviceable addresses, auto-draft quotes, coach live calls, book installs, 
                  and predict churn—so your Sales and CX teams hit numbers while trucks keep rolling on full routes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min Fiber-Sales AI Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <FileCheck className="h-4 w-4 mr-2" />
                    <span>Download Solution Brief</span>
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
                    { icon: Clock, label: 'Quote Time', value: '-85%' },
                    { icon: DollarSign, label: 'First-Call Close', value: '+18%' },
                    { icon: TrendingUp, label: 'No-Shows', value: '-28%' },
                    { icon: Shield, label: 'Churn Rate', value: '-19%' }
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
                Why Connectivity Providers Still Leak Revenue
              </h2>
              <p className="text-muted-foreground">
                Common bottlenecks that slow down sales and impact business performance.
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
                  <p className="text-muted-foreground mb-2">{challenge.metric}</p>
                  <p className="text-accent">{challenge.impact}</p>
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
                AI Modules for Telecom & Fiber GTM + CX Teams
              </h2>
              <p className="text-muted-foreground">
                Native integration with CRM / OSS / Field Apps.
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

        {/* Telecom Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Why It's Telecom-Native
              </h2>
              <p className="text-muted-foreground">
                Purpose-built features for telecom and fiber providers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {telecomFeatures.map((feature, i) => (
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
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
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
                Private-cloud or on-premises deploy available—no subscriber data leaves your network.
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8">
              <h2 className="text-2xl font-sora font-semibold mb-6">
                Success Snapshot: Regional Fiber Overbuilder
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    'Quote Composer & Serviceability Check cut quote-prep from 28 min → 2 min',
                    'First-call close ↑ 19% (Live Call Assistant)',
                    'No-show installs ↓ 27% (Install Concierge Bot)',
                    'Voluntary churn ↓ 17% in 90 days (Churn-Risk Sentinel)'
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
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
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
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Let AI Quote, Route & Retain—So Your Teams Can Focus on Growth?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                30-minute call → live demo → 45-day pilot roadmap—zero obligation.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Your Free Telecom Sales-AI Assessment</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
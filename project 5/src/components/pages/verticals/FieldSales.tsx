import { motion } from 'framer-motion';
import { ArrowRight, Users, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Brain, Play, Car, Clock, DollarSign, TrendingUp, FileCheck, MapPin, MessageSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Reps spend 15-20% of their week planning routes',
    impact: 'Missed appointments, wasted fuel',
    icon: Car
  },
  {
    challenge: 'Manual note-taking & CRM updates',
    impact: 'Incomplete data, poor forecasting',
    icon: FileCheck
  },
  {
    challenge: 'One-size pitches & collateral',
    impact: 'Low on-site conversion',
    icon: Target
  },
  {
    challenge: 'High churn & slow ramp',
    impact: 'Rising onboarding costs',
    icon: TrendingUp
  },
  {
    challenge: 'Fragmented tools (maps, CRM, LMS)',
    impact: 'Lost productivity, no single source of truth',
    icon: Workflow
  }
];

const aiModules = [
  {
    title: 'Route Optimiser Copilot',
    description: 'Re-orders multi-stop schedules with live traffic & intent scores',
    kpi: '+12% meetings / week',
    icon: MapPin,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Voice-to-CRM Logger',
    description: 'Transcribes voice notes, writes next steps, logs to CRM instantly',
    kpi: '−2h admin / rep / week',
    icon: MessageSquare,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'AR Product Visualiser',
    description: 'Overlays product at true scale via phone camera',
    kpi: '+18% on-site close rate',
    icon: Bot,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Territory Prioritisation Engine',
    description: 'Scores zip-codes by win-rate, distance, and trigger events',
    kpi: '+9% pipeline volume',
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Real-Time Talk-Track Coach',
    description: 'Sentiment & keyword cues during pitches',
    kpi: 'Ramp time −30%',
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Predictive Inventory & Service',
    description: 'Flags restock/service needs before reps roll',
    kpi: 'Stock-outs −40%',
    icon: LineChart,
    color: 'from-accent/50 to-accent/10'
  }
];

const implementationPhases = [
  {
    title: 'Discovery Workshop',
    description: 'Map current routes, data streams, KPIs.',
    timeline: 'Week 0',
    icon: Target
  },
  {
    title: 'Pilot Build',
    description: 'Deploy Route Optimiser + Voice-to-CRM for one territory.',
    timeline: 'Weeks 1-4',
    icon: Bot
  },
  {
    title: 'Validation',
    description: 'Measure fuel, meeting count, rep NPS.',
    timeline: 'Weeks 5-6',
    icon: FileCheck
  },
  {
    title: 'Scale',
    description: 'Add AR Visualiser + real-time coach; roll to national fleet.',
    timeline: 'Weeks 7-12',
    icon: TrendingUp
  }
];

const edgeFeatures = [
  'On-device WASM models for image & speech',
  'Offline mode with auto-sync when coverage returns',
  'Enterprise-grade PII redaction & SOC 2 guard-rails',
  'Sub-50 ms inference running right on the rep\'s device'
];

const deliverables = [
  'Full AI Stack – Models, API integrations, edge apps',
  'MLOps & Monitoring – Drift alerts, cost sentinel, audit trail',
  'Change Management – Micro-training videos, Slackbot tips',
  'Free Workflow Automation – One route-planning or logging task at zero cost'
];

const faqs = [
  {
    question: 'Can we deploy in our private cloud?',
    answer: 'Yes—AWS, Azure, GCP or on-prem with VPN peering.'
  },
  {
    question: 'How long until reps see value?',
    answer: 'Most pilots hit KPI lift within 30 days.'
  },
  {
    question: 'Does it integrate with Salesforce / HubSpot?',
    answer: 'Native connectors plus custom API hooks.'
  }
];

export default function FieldSales() {
  return (
    <div>
      <PageHeader 
        title="AI for Field-Sales Powerhouses" 
        description="Turn every rep into a data-driven revenue machine"
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
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Field Sales AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Turn Every Rep into a Data-Driven Revenue Machine
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  AI copilots that optimise routes, auto-log visits, and coach reps in real time—boosting meetings booked, 
                  closing speed, and fuel efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min Field-Sales AI Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Watch 2-min product video</span>
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
                    { icon: Clock, label: 'Admin Time Saved', value: '10hrs/wk' },
                    { icon: DollarSign, label: 'Revenue per Rep', value: '+38%' },
                    { icon: Car, label: 'Fuel Savings', value: '-25%' },
                    { icon: Target, label: 'Close Rate', value: '+18%' }
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
                Today's Field-Sales Reality
              </h2>
              <p className="text-muted-foreground">
                Common challenges facing field sales teams and their impact on business performance.
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

        {/* AI Suite Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                GigaRev's Field-Sales AI Suite
              </h2>
              <p className="text-muted-foreground">
                Comprehensive AI solutions tailored for field sales teams.
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

        {/* Edge Computing Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Why Edge-Native Matters
              </h2>
              <p className="text-muted-foreground">
                Lightning-fast performance, even in dead zones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {edgeFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="text-lg font-medium mb-4">Chipr Case Study Highlight</div>
                <p className="text-muted-foreground mb-6">
                  38% revenue lift per rep & 90% lower back-fill training spend after implementing our edge-native AI suite.
                </p>
                <Button asChild>
                  <Link to="/case-studies/chipr">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Fast-Track Implementation
              </h2>
              <p className="text-muted-foreground">
                Our proven approach to transforming field sales operations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {implementationPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <phase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-sora font-medium">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
                  <div className="text-sm font-medium text-accent">{phase.timeline}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                What You Get
              </h2>
              <p className="text-muted-foreground">
                Everything you need for successful AI implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deliverables.map((deliverable, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{deliverable}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Customer Quote */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8"
              >
                <blockquote className="text-xl font-sora italic mb-6">
                  "We recovered two hours of selling time per rep per week and cut fuel spend by double digits in the first month."
                </blockquote>
                <div className="font-medium">— VP Sales Operations, National Fiber Provider</div>
              </motion.div>
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
                Ready to Transform Your Field Sales?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how our AI solutions can revolutionize your field sales operations.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Field-Sales AI Demo</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
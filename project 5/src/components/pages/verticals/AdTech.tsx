import { motion } from 'framer-motion';
import { ArrowRight, LineChart, Target, Bot, Brain, Shield, Workflow, CheckCircle2, Zap, FileText, Play, DollarSign, Users, Clock, TrendingUp, BarChart, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Deck-building scavenger hunts',
    impact: 'Fewer agency calls',
    metric: '2–3h per proposal',
    icon: FileText
  },
  {
    challenge: 'CPM / vCPM math on the fly',
    impact: 'Lost confidence & deals',
    metric: 'Reps stumble on rate cards',
    icon: DollarSign
  },
  {
    challenge: 'Feature-dense ad manager',
    impact: 'Longer cycles',
    metric: 'Buyers overwhelmed → stalled IOs',
    icon: BarChart
  },
  {
    challenge: 'Reactive performance QBRs',
    impact: 'Shrinking NRR',
    metric: 'Surprise churn',
    icon: TrendingUp
  },
  {
    challenge: 'Sparse, manual outreach',
    impact: 'Reliance on a handful of whales',
    metric: 'Cold pipeline',
    icon: Users
  }
];

const aiModules = [
  {
    title: 'Media-Deck Composer',
    description: 'Auto-builds on-brand PPT/PDF with vertical benchmarks, reach curves, and mock creatives in <60s.',
    kpi: '−2.2h prep per proposal',
    icon: FileText,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Reach & Rate Genie',
    description: 'Converts budget + KPI → CPM/vCPM forecast & recommended ad mix in real time.',
    kpi: '+15% IO size',
    icon: DollarSign,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Live Pitch Assistant',
    description: 'Real-time cue cards, competitive rebuttals & next-step prompts in Zoom / Teams / Dialpad.',
    kpi: '+19% first-call conversion',
    icon: Brain,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'AI Role-Play Coach',
    description: 'Synthetic media planner persona scores objection handling; certifies new reps.',
    kpi: 'Ramp time −28%',
    icon: Bot,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Digital Prospecting Agent',
    description: 'LLM-driven bot emails & LinkedIn messages agencies with hyper-personalised hooks.',
    kpi: '+21% new-logo meetings',
    icon: Target,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Campaign-Pulse Notifier',
    description: 'Flags under-delivery, viewability dips, or pacing issues; CS gets auto-generated fix email.',
    kpi: '−24% churn risk',
    icon: LineChart,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'QBR & Renewal Deck Builder',
    description: 'Pulls spend, lift metrics, creative wins into polished slides in 2 min.',
    kpi: 'CS prep −6h / account',
    icon: FileCheck,
    color: 'from-primary/50 to-primary/10'
  }
];

const adtechFeatures = [
  {
    title: 'Rate-Card Intelligence',
    description: 'Supports CPM, vCPM, CPV, CPC, CPA and retail-media ROAS maths.',
    icon: DollarSign
  },
  {
    title: 'Inventory Graph API',
    description: 'Agents pull live reach & frequency curves from your forecasting backend.',
    icon: LineChart
  },
  {
    title: 'Brand-Safety Guard-Rails',
    description: 'Style-guide embeddings, vertical-exclusion checks, GARM alignment.',
    icon: Shield
  },
  {
    title: 'Agency Mode',
    description: 'Multi-client decks with automatic logo, NDA, and pixel instructions.',
    icon: Users
  }
];

const pilotPhases = [
  {
    week: '0',
    milestone: 'Workflow scoping (pick 2 modules, 10 reps/CSMs)',
    icon: Target
  },
  {
    week: '1-2',
    milestone: 'OAuth/API hookup; sandbox agents',
    icon: Workflow
  },
  {
    week: '3-4',
    milestone: 'Live reps, shadow metrics, prompt tuning',
    icon: Bot
  },
  {
    week: '5-6',
    milestone: 'KPI review (IO velocity, prep time, pipeline)',
    icon: LineChart
  },
  {
    week: '7-9',
    milestone: 'Org-wide rollout; add Prospecting & Pulse modules',
    icon: Zap
  }
];

const faqs = [
  {
    question: 'Will AI go off-brand?',
    answer: 'No—style-guide vectors and policy LLM keep fonts, tone, stats, and compliance locked.'
  },
  {
    question: 'Does Prospecting Agent spam?',
    answer: 'No—warm-IP rotation, throttles, custom opt-out links; reputation-safe.'
  },
  {
    question: 'Our forecasting engine is proprietary—can you hook in?',
    answer: 'Yes—agents call your GraphQL/REST reach API; logic stays yours.'
  },
  {
    question: 'How is data secured?',
    answer: 'SOC 2-ready; encryption at rest & transit; full audit trail of every prompt & output.'
  }
];

export default function AdTech() {
  return (
    <div>
      <PageHeader 
        title="AdTech AI Solutions" 
        description="Purpose-built for media platforms such as LinkedIn Ads, Reddit Ads, Snap, X / Twitter, and retail-media networks"
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
                  <LineChart className="h-4 w-4" />
                  <span className="text-sm font-medium">AdTech AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Sell More Impressions. Close IOs Faster. Retain Every Agency.
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  AI copilots that draft media decks, forecast reach, coach live pitches, and prospect around the clock—so your sellers smash quota and your CS team guards every renewal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min AdTech-Sales AI Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <FileText className="h-4 w-4 mr-2" />
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
                    { icon: Clock, label: 'Proposal Time', value: '-75%' },
                    { icon: DollarSign, label: 'IO Size', value: '+15%' },
                    { icon: Users, label: 'First-Call Conv.', value: '+19%' },
                    { icon: TrendingUp, label: 'Churn Risk', value: '-24%' }
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
                Why AdTech GTM Still Leaks Revenue
              </h2>
              <p className="text-muted-foreground">
                Common bottlenecks that slow down sales and impact platform growth.
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
                AI Enablement Modules for AdTech Vendors
              </h2>
              <p className="text-muted-foreground">
                Comprehensive AI solutions inside SFDC / HubSpot / Chrome-side panel.
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

        {/* AdTech Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                What Makes It AdTech-Native
              </h2>
              <p className="text-muted-foreground">
                Purpose-built features for media platforms and ad networks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {adtechFeatures.map((feature, i) => (
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
                45-Day "Show-Me" Pilot
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
                Private-cloud or on-prem deploy optional; no advertiser PII leaves your tenancy.
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8">
              <h2 className="text-2xl font-sora font-semibold mb-6">
                Success Snapshot: Community Media Platform
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    'Deck Composer & Rate Genie cut proposal prep from 130 min → 8 min',
                    'Average IO ↑ 18%',
                    'First-call conversions ↑ 22% (Live Pitch Assistant)',
                    'Early-life churn ↓ 26% (Campaign-Pulse Notifier)'
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
                Ready to Accelerate Your Media Sales?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how our AI solutions can transform your AdTech sales operations.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book AdTech-Sales AI Demo</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
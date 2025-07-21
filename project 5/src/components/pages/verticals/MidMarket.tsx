import { motion } from 'framer-motion';
import { ArrowRight, Building, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Brain, FileText, Clock, DollarSign, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Fragmented GTM Stack',
    symptoms: '5+ tools per rep',
    impact: 'Data silos, shaky forecasting',
    icon: Workflow
  },
  {
    challenge: 'Rising CAC',
    symptoms: 'Paid channels plateau',
    impact: 'Stalled marketing ROI',
    icon: DollarSign
  },
  {
    challenge: 'Recruit-and-Ramp Drag',
    symptoms: '60-90 days to seat a seller or engineer',
    impact: 'Missed revenue quarters',
    icon: Users
  },
  {
    challenge: 'Ops Overload',
    symptoms: 'Manual invoices, tickets & reporting',
    impact: '30-40% of payroll on low-value tasks',
    icon: TrendingUp
  },
  {
    challenge: 'Product Backlog > Roadmap',
    symptoms: 'Market windows close',
    impact: 'Lost competitive edge',
    icon: Clock
  }
];

const elevateModules = [
  {
    function: 'Sales',
    modules: [
      {
        name: 'Deal-Health Scorer + Live Call Coach',
        win: 'Win-rate ↑ 14% in 8 wks',
        icon: Brain
      },
      {
        name: 'Digital SDR Bot (email+LinkedIn)',
        win: '200 net-new warm leads / mo',
        icon: Bot
      }
    ]
  },
  {
    function: 'Marketing',
    modules: [
      {
        name: 'Gen-Content & Creative Studio',
        win: 'Content calendar produced 4× faster',
        icon: FileText
      },
      {
        name: 'Budget Optimiser + Channel Shifter',
        win: 'CAC ↓ 18%',
        icon: LineChart
      }
    ]
  },
  {
    function: 'Recruitment / HR',
    modules: [
      {
        name: 'Resume Ranker + Interview Scheduler',
        win: 'Time-to-first-round ↓ 55%',
        icon: Users
      },
      {
        name: 'AI Onboarding Concierge',
        win: 'New-hire ramp ↓ 25%',
        icon: Bot
      }
    ]
  },
  {
    function: 'Operations / CX',
    modules: [
      {
        name: 'Invoice & Expense OCR + Reconciler',
        win: 'Finance hours ↓ 70%',
        icon: FileText
      },
      {
        name: 'Tier-1 Support Concierge',
        win: 'Tickets deflected ↑ 32%',
        icon: MessageSquare
      }
    ]
  },
  {
    function: 'Product / Prototyping',
    modules: [
      {
        name: 'Prompt-to-MVP Builder (Web / Mobile)',
        win: 'Demoable app in 21 days',
        icon: Bot
      },
      {
        name: 'User-Feedback Summariser',
        win: 'Roadmap decisions in minutes',
        icon: Brain
      }
    ]
  }
];

const deploymentTracks = [
  {
    track: 'Quick-Win Pilot',
    idealFor: 'One workflow, one team',
    timeline: '30 days',
    icon: Target
  },
  {
    track: 'Department Sprint',
    idealFor: 'Sales or Marketing overhaul',
    timeline: '60 days',
    icon: LineChart
  },
  {
    track: 'Full-Stack Rollout',
    idealFor: 'Cross-functional AI adoption',
    timeline: '90 days',
    icon: Workflow
  }
];

const outcomes = [
  {
    company: 'SaaS (400 FTE)',
    industry: 'MarTech',
    result: 'Pipeline ↑ 2.8× / Win-rate + 15 pts'
  },
  {
    company: 'Manufacturer (1,100 FTE)',
    industry: 'Industrial',
    result: 'AP invoice cycle time ↓ 68%'
  },
  {
    company: 'B2B Marketplace (650 FTE)',
    industry: 'E-Com',
    result: 'CAC ↓ 21% / LTV:CAC > 4:1'
  },
  {
    company: 'FinTech (280 FTE)',
    industry: 'Services',
    result: 'MVP mobile app shipped 23 days, secured Series C'
  }
];

const whyGigaRev = [
  {
    title: 'Mid-Market DNA',
    description: 'Lean engagement model—no bloated consulting benches.',
    icon: Building
  },
  {
    title: 'Modular Agents',
    description: 'Activate what you need today; expand later.',
    icon: Bot
  },
  {
    title: 'Governed by Design',
    description: 'Policy LLMs, PII redaction, cost & drift sentinels.',
    icon: Shield
  },
  {
    title: 'Own the IP',
    description: 'All code, prompts, and dashboards handed over.',
    icon: FileText
  },
  {
    title: 'Outcome Billing',
    description: 'Simple usage-plus-success pricing—skin in the game.',
    icon: Target
  }
];

const kickStartSteps = [
  'AI Opportunity Map (Free, 45 min) – quantify time & cash trapped in current workflows.',
  'Pick 1 High-Impact Workflow – e.g., proposal decks, expense recon, SDR outreach.',
  'Deploy & Tune – live inside your stack in ≤ 3 weeks.',
  'ROI Review – decide to scale or walk away (you keep the automation).'
];

const faqs = [
  {
    question: 'Do we need in-house data scientists?',
    answer: 'No—our team handles modelling and MLOps; your IT reviews.'
  },
  {
    question: 'Our data lives in multiple SaaS tools—will that block us?',
    answer: 'We tap APIs (HubSpot, NetSuite, Zendesk, etc.) or staged CSVs. No rip-and-replace.'
  },
  {
    question: 'Can we start small?',
    answer: 'Yes—minimum scope is one workflow, one department.'
  },
  {
    question: 'Security?',
    answer: 'SOC 2 Type II, field-level encryption, private-cloud deploy on request.'
  }
];

export default function MidMarket() {
  return (
    <div>
      <PageHeader 
        title="Enterprise-Grade AI, Mid-Market Speed" 
        description={`"out-grown startup hacks but aren't yet enterprise behemoths" (200 – 2,500 employees, $25M-$750M ARR)`}
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
                  <Building className="h-4 w-4" />
                  <span className="text-sm font-medium">Mid-Market</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Enterprise-Grade AI, Mid-Market Speed
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Plug-and-play agents that boost pipeline, slash CAC, hire faster, automate busywork, and spin up new products—without six-month SOWs or Fortune-500 price tags.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min AI Value-Map Session</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Download the Elevate Playbook</span>
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
                    { icon: Clock, label: 'Implementation', value: '30-90 days' },
                    { icon: DollarSign, label: 'CAC Reduction', value: '18-25%' },
                    { icon: Users, label: 'Team Efficiency', value: '+40%' },
                    { icon: TrendingUp, label: 'ROI Timeline', value: '90 days' }
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
                Why Mid-Market Orgs Hit a Growth Ceiling
              </h2>
              <p className="text-muted-foreground">
                Elevate tackles each choke-point with modular AI agents you can turn on one at a time.
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
                  <p className="text-muted-foreground mb-2">{challenge.symptoms}</p>
                  <p className="text-accent">{challenge.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Elevate Modules Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Elevate Modules
              </h2>
              <p className="text-muted-foreground">
                Pick What You Need - All modules ship with cost, compliance & brand guard-rails.
              </p>
            </div>

            <div className="space-y-8">
              {elevateModules.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-sora font-semibold mb-4">{category.function}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.modules.map((module, j) => (
                      <div key={j} className="bg-card border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <module.icon className="h-6 w-6 text-primary" />
                          <h4 className="font-medium">{module.name}</h4>
                        </div>
                        <p className="text-accent">{module.win}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Deployment Options
              </h2>
              <p className="text-muted-foreground">
                Private-cloud, VPC, or SOC 2-ready SaaS—your choice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deploymentTracks.map((track, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <track.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-lg font-sora font-medium mb-4">{track.track}</h3>
                  <p className="text-muted-foreground mb-2">{track.idealFor}</p>
                  <p className="text-accent">{track.timeline}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Real Mid-Market Outcomes
              </h2>
              <p className="text-muted-foreground">
                Results achieved within 90 days of implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="mb-4">
                    <h3 className="font-sora font-medium">{outcome.company}</h3>
                    <p className="text-sm text-muted-foreground">{outcome.industry}</p>
                  </div>
                  <p className="text-accent">{outcome.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why GigaRev Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Why GigaRev?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyGigaRev.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <reason.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-lg font-sora font-medium mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 30-Day Kick-Start Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                30-Day Kick-Start
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {kickStartSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </motion.div>
                ))}
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
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a 30-minute AI Value-Map session to see how our solutions can transform your business.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Your Session Now</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
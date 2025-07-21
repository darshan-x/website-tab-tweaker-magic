import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Brain, Play, Clock, DollarSign, TrendingUp, FileCheck, MessageSquare, Users, Zap, Code, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const challenges = [
  {
    challenge: 'Founders juggling sales calls, ads, and product',
    impact: 'No time to close funding or hire',
    icon: Users
  },
  {
    challenge: 'Lead gen = manual LinkedIn + cold emails',
    impact: 'Inconsistent pipeline, long droughts',
    icon: Target
  },
  {
    challenge: 'Marketing depends on freelancers',
    impact: 'Brand voice drifts, CAC spikes',
    icon: FileText
  },
  {
    challenge: 'Candidate screening steals builder hours',
    impact: 'Top talent slips away',
    icon: Users
  },
  {
    challenge: 'Ops buried in invoices & ticket triage',
    impact: 'Costly distractions, late nights',
    icon: FileCheck
  },
  {
    challenge: 'Engineering backlog > runway',
    impact: 'MVP misses market window',
    icon: Code
  }
];

const aiModules = [
  {
    title: 'Lead-Gen Bot',
    description: 'Scrapes ICP signals, sends personalised emails & DMs',
    kpi: '+150 warm leads / mo',
    function: 'Sales',
    icon: Bot,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Proposal Composer',
    description: 'Auto-builds pitch decks & quotes',
    kpi: '−4h founder time / wk',
    function: 'Sales',
    icon: FileText,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Gen-Content Studio',
    description: 'Blogs, ads, emails—brand-safe & SEO\'d',
    kpi: 'CAC −22%',
    function: 'Marketing',
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Budget Optimiser',
    description: 'Pauses weak ads, shifts spend hourly',
    kpi: 'ROAS +17%',
    function: 'Marketing',
    icon: LineChart,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Resume Screener',
    description: 'Ranks applicants, drafts recruiter notes',
    kpi: 'Time-to-interview −60%',
    function: 'Recruitment',
    icon: Users,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Candidate Drip Bot',
    description: 'Auto-updates, schedules, nurtures',
    kpi: 'Offer acceptance +12 pts',
    function: 'Recruitment',
    icon: MessageSquare,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Invoice & Exp-Recon',
    description: 'OCR + LLM auto-codes bills & receipts',
    kpi: 'Bookkeeping hours −70%',
    function: 'Operations',
    icon: FileCheck,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Tier-1 Support Concierge',
    description: 'Handles FAQs, routes tickets',
    kpi: 'Tickets resolved +30%',
    function: 'Operations',
    icon: MessageSquare,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Prompt-to-MVP Builder',
    description: 'Generates front-end, CRUD, auth',
    kpi: 'MVP in 21 days',
    function: 'Product / Prototyping',
    icon: Code,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'User-Feedback Summariser',
    description: 'Clusters reviews & support chats',
    kpi: 'Roadmap clarity in minutes',
    function: 'Product / Prototyping',
    icon: MessageSquare,
    color: 'from-secondary/50 to-secondary/10'
  }
];

const smbFeatures = [
  {
    title: 'Usage-Based Pricing',
    description: 'Pay per action—no 6-figure licence.',
    icon: DollarSign
  },
  {
    title: 'Plug-&-Play APIs',
    description: 'Works with HubSpot, Pipedrive, Gmail, Slack, QuickBooks, Webflow.',
    icon: Workflow
  },
  {
    title: 'One Slack Channel Support',
    description: 'Talk directly to builders, not ticket bots.',
    icon: MessageSquare
  },
  {
    title: 'Guard-Rails On',
    description: 'No off-brand copy, no PII leaks, SOC 2-ready logs.',
    icon: Shield
  }
];

const pilotPhases = [
  {
    week: '0',
    milestone: '90-min scoping call—pick 1-2 agents',
    icon: Target
  },
  {
    week: '1',
    milestone: 'Sandbox live in your stack',
    icon: Workflow
  },
  {
    week: '2',
    milestone: 'First AI actions generating real leads / content',
    icon: Bot
  },
  {
    week: '3',
    milestone: 'KPI check + prompt tweak',
    icon: LineChart
  },
  {
    week: '4',
    milestone: 'Go-live + "next agent" roadmap',
    icon: Zap
  }
];

const successStories = [
  {
    type: 'SaaS (Series A)',
    result: 'Lead-Gen Bot + Content Studio = pipeline ↑ 3.4× in 60 days'
  },
  {
    type: 'DTC E-Com',
    result: 'Budget Optimiser cut ad spend 27% while sales ↑ 14%'
  },
  {
    type: 'HR Tech Seed',
    result: 'Prompt-to-MVP shipped investor demo in 17 days—secured $1.2M'
  },
  {
    type: 'Local Services SMB',
    result: 'Support Concierge deflected 42% calls; Yelp score ↑ 0.6⭐'
  }
];

const faqs = [
  {
    question: 'Do we need engineers?',
    answer: 'No—low-code scripts or our dev team. Your builders focus on core product.'
  },
  {
    question: 'Can we cancel anytime?',
    answer: 'Yes—month-to-month after pilot. Keep the workflows you\'ve already deployed.'
  },
  {
    question: 'What if we outgrow Launchpad?',
    answer: 'We switch you to our Enterprise stack with zero migration pain.'
  }
];

export default function TechSMB() {
  return (
    <div>
      <PageHeader 
        title="Big-League Automation for Start-Up Budgets" 
        description="Everything you need to sell, market, hire, run, and ship products—powered by AI"
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
                  <Smartphone className="h-4 w-4" />
                  <span className="text-sm font-medium">Tech SMB</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Big-League Automation for Start-Up Budgets
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  AI agents that write copy, hunt leads, shortlist candidates, run back-office ops, and even build your first MVP—so you can scale without bloating head-count.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Book a 30-min Launchpad Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Grab the One-Page ROI Sheet</span>
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
                    { icon: Clock, label: 'Time Saved', value: '15hrs/wk' },
                    { icon: DollarSign, label: 'CAC Reduction', value: '-22%' },
                    { icon: TrendingUp, label: 'Lead Volume', value: '+150/mo' },
                    { icon: Users, label: 'Hiring Speed', value: '2x faster' }
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
                Why Growing Companies Hit the Wall
              </h2>
              <p className="text-muted-foreground">
                Common growing pains that stall startup growth.
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
                GigaRev Launchpad Modules
              </h2>
              <p className="text-muted-foreground">
                Pick-and-match AI solutions for every business function.
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
                  <div className="flex items-center gap-2 mb-6">
                    <module.icon className="h-10 w-10" />
                    <span className="text-sm text-muted-foreground">{module.function}</span>
                  </div>
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
                What Makes Launchpad SMB-Friendly
              </h2>
              <p className="text-muted-foreground">
                Purpose-built features for growing companies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {smbFeatures.map((feature, i) => (
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
                30-Day Quick-Win Plan
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
                Bonus: We'll automate one workflow (lead scrape, ad-pause, invoice OCR, etc.) for free to prove ROI.
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Success Snippets
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="font-sora font-medium mb-4">{story.type}</div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{story.result}</span>
                  </div>
                </motion.div>
              ))}
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
                Ready to Scale Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how our AI solutions can help you grow faster and more efficiently.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Your Launchpad Demo</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
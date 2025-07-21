import { motion } from 'framer-motion';
import { Bot, MessageSquare, BarChart, ArrowRight, Target, Zap, Users, Route, Headphones, Brain, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const salesStacks = [
  {
    title: 'Prospecting Stack',
    description: 'Supercharge your outreach with AI-powered lead enrichment and multi-channel sequencing',
    features: [
      'Lead Enrichment Bot',
      'Personalised Email & LI Writer',
      'Predictive Dial Sequencer'
    ],
    buyers: ['SDR / BDR Leader'],
    outcomes: [
      'Meetings ↑ 20-30%',
      'Research time ↓ 75%',
      '3-5× leads researched/hr'
    ],
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Live-Call Stack',
    description: 'Real-time AI assistance during customer calls to maximize conversion rates',
    features: [
      'Real-Time Talk-Track Coach',
      'Content Router & Recommender',
      'Empathy Tuner'
    ],
    buyers: ['Inside-Sales Manager'],
    outcomes: [
      'Conversion ↑ 25%',
      'Ramp time ↓ 30%',
      'CSAT ↑ 15%'
    ],
    icon: Headphones,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Field-Sales Copilot',
    description: 'Optimize field sales operations with AI-powered territory management',
    features: [
      'Territory & Route Optimizer',
      'Voice-to-CRM Logger',
      'AR Product Visualizer'
    ],
    buyers: ['Dir. Field Sales'],
    outcomes: [
      '+15% meetings/week',
      'Zero data entry',
      'Close rate ↑ 20%'
    ],
    icon: Route,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Enablement Accelerator',
    description: 'Accelerate sales training and knowledge retention with AI simulation',
    features: [
      'AI Role-Play Simulator',
      'Competitive Pulse Agent',
      'Content Router'
    ],
    buyers: ['Head of Enablement'],
    outcomes: [
      'Ramp ↓ 30%',
      'Objective scoring',
      'Content usage ↑'
    ],
    icon: Brain,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Revenue Intelligence Core',
    description: 'Data-driven insights to optimize sales performance and forecast accuracy',
    features: [
      'Deal-Health Predictor',
      'Conversation Intelligence',
      'Quota & Territory Simulator'
    ],
    buyers: ['CRO', 'RevOps'],
    outcomes: [
      'Forecast accuracy ↑',
      'Coaching at scale',
      'Evidence-based plans'
    ],
    icon: BarChart,
    color: 'from-secondary/50 to-secondary/10'
  }
];

const enterpriseBundles = [
  {
    title: 'Real-Time Deal Desk Suite',
    description: 'AI-powered deal optimization and approval automation',
    features: [
      'Live Gen-AI pricing/discount assistant',
      'Guided T&C clause generator',
      'CFO approval bot'
    ],
    deployment: [
      'VPC deployment',
      'SAP/Oracle CPQ hooks',
      'Audit trail'
    ],
    icon: Shield
  },
  {
    title: 'Multilingual Field Copilot',
    description: 'Global field sales enablement with edge computing',
    features: [
      'Edge-deployed concierge (WASM)',
      'On-device Whisper for offline voice notes',
      '24-language prompt-library'
    ],
    deployment: [
      '< 60 ms inference SLA',
      'Data remains on device',
      'Offline capabilities'
    ],
    icon: Globe
  },
  {
    title: 'Regulated Sales Shield',
    description: 'Compliant AI for regulated industries',
    features: [
      'PII redaction pipeline',
      'Federated model training',
      'Compliance Guard-Rail Engine'
    ],
    deployment: [
      'On-prem or gov-cloud',
      'SOC 2 / ISO-27001',
      'FINRA/Med-device compliant'
    ],
    icon: Shield
  }
];

export default function SalesAI() {
  return (
    <div>
      <SEOHead
        title="Sales AI Solutions | GigaRev"
        description="Transform your sales operations with AI-powered solutions. From lead generation to deal closing, boost productivity and win rates with intelligent automation."
        keywords="sales AI, AI sales automation, sales intelligence, deal optimization, sales enablement, AI-driven sales"
        ogUrl="/services/sales-ai"
      />
      
      <PageHeader 
        title="Sales AI" 
        description="Enterprise-grade AI solutions for modern sales teams"
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
                  <BarChart className="h-4 w-4" />
                  <span className="text-sm font-medium">Sales AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Transform Sales with Enterprise AI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive AI solutions for modern sales teams - from prospecting to closing and analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Schedule Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Bot className="h-4 w-4 mr-2" />
                    <span>View Solutions</span>
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
                    { icon: Target, label: 'Win Rate', value: '+24%' },
                    { icon: Zap, label: 'Sales Cycle', value: '-31%' },
                    { icon: MessageSquare, label: 'Deal Size', value: '+17%' },
                    { icon: Users, label: 'Productivity', value: '+40%' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-xl">
                      <stat.icon className="h-8 w-8 mb-4 text-primary" />
                      <div className="font-sora font-semibold text-xl mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Stacks Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Sales AI Stacks
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions tailored for enterprise sales teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salesStacks.map((stack, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${stack.color} border border-border rounded-xl p-6`}
                >
                  <stack.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{stack.title}</h3>
                  <p className="text-muted-foreground mb-6">{stack.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {stack.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Primary Buyers</h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.buyers.map((buyer, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border"
                          >
                            {buyer}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {stack.outcomes.map((outcome, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">→</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Bundles Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Enterprise Implementation Bundles
              </h2>
              <p className="text-muted-foreground">
                Custom-built solutions for enterprise-scale deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {enterpriseBundles.map((bundle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <bundle.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{bundle.title}</h3>
                  <p className="text-muted-foreground mb-6">{bundle.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Custom Builds</h4>
                      <ul className="space-y-2">
                        {bundle.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Deployment & Security</h4>
                      <ul className="space-y-2">
                        {bundle.deployment.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <Card className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Transform Your Sales?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how our AI solutions can revolutionize your sales operations.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Enterprise Demo</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
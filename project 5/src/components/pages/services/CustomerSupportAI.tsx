import { motion } from 'framer-motion';
import { HeartHandshake, Bot, Brain, ArrowRight, Zap, Users, MessageSquare, LineChart, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const supportStacks = [
  {
    title: 'Deflection Stack',
    description: 'Reduce ticket volume with intelligent self-service',
    features: [
      'Self-Serve Concierge',
      'Macro Generator',
      'Article Recommender'
    ],
    buyers: ['Support Ops Manager'],
    outcomes: [
      '40% fewer human tickets',
      'AHT reduction'
    ],
    icon: Bot,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Realtime Assist Stack',
    description: 'Empower agents with real-time AI assistance',
    features: [
      'Auto-Triage Router',
      'Empathy Tuner',
      'Context Summariser'
    ],
    buyers: ['Tier-1 Lead'],
    outcomes: [
      '2× tickets per rep',
      'CSAT improvement'
    ],
    icon: Zap,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Retention Intelligence Stack',
    description: 'Proactive customer success and retention',
    features: [
      'Churn-Risk Predictor',
      'Upsell Signal Miner',
      'QBR Deck Builder'
    ],
    buyers: ['Head of CS'],
    outcomes: [
      'Reduced churn',
      'Increased NRR'
    ],
    icon: Users,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Ops Excellence Stack',
    description: 'Optimize support operations with AI insights',
    features: [
      'Volume & Capacity Forecaster',
      'Conversation Intelligence Scorer',
      'Voice-of-Customer Miner'
    ],
    buyers: ['VP Support / CX'],
    outcomes: [
      'Improved SLA compliance',
      'Reduced QA costs'
    ],
    icon: LineChart,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Platform Insight Stack',
    description: 'Extract actionable insights from support data',
    features: [
      'Voice-of-Customer Miner',
      'Product-Defect Auto-Cluster',
      'Trend Analysis'
    ],
    buyers: ['Product Ops'],
    outcomes: [
      '60% faster defect discovery',
      'Data-driven roadmap'
    ],
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  }
];

const enterpriseBundles = [
  {
    title: 'Zero-Latency Edge Care',
    description: 'Ultra-fast, globally distributed support AI',
    features: [
      'Edge-deployed Self-Serve Concierge (WASM)',
      'Real-Time Language Localiser (24 langs)',
      '< 30 ms inference SLA'
    ],
    compliance: [
      'CDN edge containers',
      'HIPAA/GDPR logging isolation'
    ],
    icon: Zap
  },
  {
    title: 'Regulated Support Shield',
    description: 'Compliant AI for regulated industries',
    features: [
      'PII-redaction ASR & chat pipeline',
      'Federated model training across regions',
      'Guard-Rail Policy Engine'
    ],
    compliance: [
      'On-prem or VPC',
      'SOC 2 / ISO-27001',
      'Audit dashboards'
    ],
    icon: Shield
  }
];

export default function CustomerSupportAI() {
  return (
    <div>
      <SEOHead
        title="Customer Support AI Solutions | GigaRev"
        description="Transform your customer support with AI-powered solutions. From intelligent chatbots to predictive analytics, enhance customer satisfaction while reducing costs."
        keywords="customer support AI, AI chatbot, support automation, customer service AI, intelligent support, AI customer experience"
        ogUrl="/services/customer-support-ai"
      />
      
      <PageHeader 
        title="Customer Support AI" 
        description="Enterprise-grade AI solutions for modern support teams"
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
                  <HeartHandshake className="h-4 w-4" />
                  <span className="text-sm font-medium">Support AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Transform Support with Enterprise AI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive AI solutions for modern support teams - from self-service to agent assistance and analytics.
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
                    { icon: Bot, label: 'Ticket Deflection', value: '40-60%' },
                    { icon: MessageSquare, label: 'CSAT Score', value: '+8-10pts' },
                    { icon: Zap, label: 'First Response', value: '70-80%↑' },
                    { icon: Users, label: 'Resolution Time', value: '20-30%↓' }
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

        {/* Support Stacks Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Support AI Stacks
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions tailored for enterprise support teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportStacks.map((stack, i) => (
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

            <div className="grid md:grid-cols-2 gap-8">
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
                      <h4 className="text-sm font-medium mb-2">Compliance & Deployment</h4>
                      <ul className="space-y-2">
                        {bundle.compliance.map((item, j) => (
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
                Ready to Transform Your Support?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how our AI solutions can revolutionize your support operations.
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
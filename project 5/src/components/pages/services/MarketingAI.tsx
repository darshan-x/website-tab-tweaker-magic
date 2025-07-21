import { motion } from 'framer-motion';
import { LineChart, Shield, Globe, Target, Zap, Brain, FileCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const marketingSuites = [
  {
    title: 'Growth OS Suite',
    description: 'Unified AI platform for holistic growth optimization',
    features: [
      'Unified AI Growth Platform',
      'Media-Mix Optimizer Dashboard',
      'Board-level "Explain-ability" Layer'
    ],
    buyers: ['CMO', 'CRO', 'CFO'],
    outcomes: ['+5-15% pipeline per $', 'Single source of truth for spend → revenue'],
    icon: LineChart,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Zero-Trust Data Suite',
    description: 'Secure, compliant AI model training and deployment',
    features: [
      'Federated Model-Training Framework',
      'Homomorphic-encrypted Feature Scoring',
      'VPC / On-prem Deployment Playbook'
    ],
    buyers: ['CTO', 'CISO', 'Data Gov. Lead'],
    outcomes: ['Regional data compliance (GDPR/CCPA)', '<2% PII leakage risk'],
    icon: Shield,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Global Content Factory',
    description: 'Multilingual content generation with brand consistency',
    features: [
      'Multilingual Gen-AI Content Hub (24 languages)',
      'Brand Style-Guard Engine',
      'Human-in-the-loop QC Workflow'
    ],
    buyers: ['Global Brand VP', 'Creative Ops'],
    outcomes: ['60-70% asset TTM reduction', '100% brand/style compliance'],
    icon: Globe,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Predictive Pipeline Suite',
    description: 'ML-powered pipeline optimization and forecasting',
    features: [
      'Look-alike & Propensity ML Service',
      'AI Attribution Re-Scorer',
      'Forecast Copilot with GPT narratives'
    ],
    buyers: ['Demand-Gen Dir.', 'RevOps'],
    outcomes: ['+25% qualified TAM', '≥30-day forecast accuracy at ±5%'],
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Personalisation Edge Suite',
    description: 'Real-time personalization with minimal latency',
    features: [
      'Rust/WASM Real-time Recommender',
      'Persona-aware CTAs & Banners',
      'ABM/field Content Injector'
    ],
    buyers: ['PLG Lead', 'Head of Growth'],
    outcomes: ['<50ms page latency', '+15% conversion to hand-raiser'],
    icon: Zap,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Analytics Copilot Suite',
    description: 'AI-powered analytics and business intelligence',
    features: [
      'Self-Serve Gen-AI BI Copilot (SQL → charts)',
      'Semantic-layer + Vector Search over Snowflake/BigQuery',
      'Lineage & Security Tagging'
    ],
    buyers: ['Analytics CoE', 'FP&A'],
    outcomes: ['5× faster insight cycles', 'Analyst hours re-deployed to strategy'],
    icon: Brain,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Compliance Shield Suite',
    description: 'Automated compliance and brand safety',
    features: [
      'Brand & Regulatory Guard-Rail Engine',
      'Competitive & Restricted-claims Checker',
      'Audit Log & Policy Dashboard'
    ],
    buyers: ['General Counsel', 'Compliance', 'Brand Integrity'],
    outcomes: ['Zero off-policy assets', 'Audit prep time cut by 80%'],
    icon: FileCheck,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Field & Event Accelerator',
    description: 'AI-powered event marketing optimization',
    features: [
      'Event-Aware Content Generator',
      'Booth Scanner AI (OCR + intent scoring)',
      'Post-event Recap Sequencer'
    ],
    buyers: ['VP Field Mkting', 'ABM', 'Events'],
    outcomes: ['2-3× post-event engagement', 'Hot-lead routing within minutes'],
    icon: MapPin,
    color: 'from-secondary/50 to-secondary/10'
  }
];

export default function MarketingAI() {
  return (
    <div>
      <SEOHead
        title="Marketing AI Solutions | GigaRev"
        description="Transform your marketing operations with AI-powered solutions. From content generation to campaign optimization, maximize ROI with intelligent automation."
        keywords="marketing AI, AI marketing automation, content generation, campaign optimization, marketing intelligence, AI-driven marketing"
        ogUrl="/services/marketing-ai"
      />

      <PageHeader 
        title="Marketing AI" 
        description="Enterprise-grade AI solutions for modern marketing teams"
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
                  <Brain className="h-4 w-4" />
                  <span className="text-sm font-medium">Marketing AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Transform Marketing with Enterprise AI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive AI solutions for modern marketing teams - from content creation to analytics and compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Schedule Demo</span>
                    <Brain className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Globe className="h-4 w-4 mr-2" />
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
                    { icon: Target, label: 'Pipeline Growth', value: '+15%' },
                    { icon: Zap, label: 'Time to Market', value: '-70%' },
                    { icon: Shield, label: 'Compliance', value: '100%' },
                    { icon: LineChart, label: 'ROI', value: '5×' }
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

        {/* Suites Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Enterprise Marketing AI Suites
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions tailored for enterprise marketing teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingSuites.map((suite, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${suite.color} border border-border rounded-xl p-6`}
                >
                  <suite.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{suite.title}</h3>
                  <p className="text-muted-foreground mb-6">{suite.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {suite.features.map((feature, j) => (
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
                        {suite.buyers.map((buyer, j) => (
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
                        {suite.outcomes.map((outcome, j) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <Card className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how our AI solutions can revolutionize your marketing operations.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Enterprise Demo</span>
                <Brain className="button-icon h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
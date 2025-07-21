import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Bot, Target, LineChart, Shield, Workflow, CheckCircle2, Play, Clock, DollarSign, TrendingUp, FileCheck, MessageSquare, Database, Cpu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const aiServices = [
  {
    title: 'AI Readiness Audit',
    description: 'Comprehensive assessment of AI implementation readiness',
    features: [
      'Gap analysis',
      'Target-state ref-arch',
      'TCO & ROI model'
    ],
    buyers: ['CTO', 'Head of Data'],
    outcomes: [
      'Exec sign-off to proceed',
      'Clear implementation roadmap',
      'Risk mitigation strategy'
    ],
    icon: Brain,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Model-Match & Finetune',
    description: 'Custom model selection and optimization',
    features: [
      'Fine-tuned model checkpoints',
      'Evaluation report',
      'HF/Vertex registry push'
    ],
    buyers: ['AI / ML Lead'],
    outcomes: [
      '≥ x% lift vs baseline',
      'Production-ready models',
      'Performance validation'
    ],
    icon: Bot,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Inference API & SDK',
    description: 'Production-ready AI service deployment',
    features: [
      'Auto-scaled GPU/CPU inference',
      'Language-specific SDKs',
      'Performance optimization'
    ],
    buyers: ['Platform / Dev Lead'],
    outcomes: [
      'P95 latency targets met',
      'Cost optimization',
      'Seamless integration'
    ],
    icon: Database,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Agent & Workflow Orchestrator',
    description: 'AI workflow automation and orchestration',
    features: [
      'Event-driven workflows',
      'n8n/Zapier/Cadence integration',
      'Audit logging'
    ],
    buyers: ['Workflow / Product Ops'],
    outcomes: [
      'Manual steps ↓ > 50%',
      'Process automation',
      'Workflow optimization'
    ],
    icon: Workflow,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Trust & Guard-Rail Layer',
    description: 'Secure and compliant AI implementation',
    features: [
      'PII redaction pipeline',
      'Policy LLM',
      'Audit dashboard'
    ],
    buyers: ['Security & Compliance'],
    outcomes: [
      'Zero violations in test suite',
      'Compliance adherence',
      'Risk management'
    ],
    icon: Shield,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Observability & Drift Sentinel',
    description: 'AI performance monitoring and maintenance',
    features: [
      'Prom / Grafana dashboards',
      'Alert rules',
      'Retrain triggers'
    ],
    buyers: ['SRE / MLOps'],
    outcomes: [
      'MTTR to drift < 1 day',
      'Proactive maintenance',
      'Performance stability'
    ],
    icon: FileCheck,
    color: 'from-accent/50 to-accent/10'
  }
];

const implementationBundles = [
  {
    title: 'Foundation Build-Out',
    description: 'Core AI implementation for digital-native companies',
    features: [
      'Readiness Audit',
      'Model-Match & Finetune',
      'Inference API'
    ],
    specs: [
      'Timeline: 8 weeks',
      'Fee: $120K',
      'Ideal: Series-B SaaS'
    ],
    icon: Brain
  },
  {
    title: 'Workflow Fusion',
    description: 'AI-powered workflow automation and adoption',
    features: [
      'Foundation + Orchestrator',
      'Adoption Accelerator',
      'Process optimization'
    ],
    specs: [
      'Timeline: 10 weeks',
      'Fee: $165K',
      'Ideal: Mid-Market Ops'
    ],
    icon: Workflow
  },
  {
    title: 'Edge-Latency Suite',
    description: 'Ultra-fast AI deployment at the edge',
    features: [
      'Model quantization',
      'Rust/WASM inference',
      'CDN deployment'
    ],
    specs: [
      'Timeline: 10 weeks',
      'Custom pricing',
      'Ideal: AdTech / IoT'
    ],
    icon: Globe
  }
];

export default function AIImplementation() {
  return (
    <div>
      <SEOHead
        title="AI Implementation Services - Custom AI Solutions"
        description="Transform your business with custom AI solutions. We architect, fine-tune, and embed AI into your tech stack with zero workflow disruption."
        keywords="AI implementation, custom AI solutions, enterprise AI, AI integration, machine learning deployment"
        ogUrl="/services/ai-implementation"
      />

      <PageHeader 
        title="AI Implementation" 
        description="Custom AI solutions built on cutting-edge models"
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
                  <span className="text-sm font-medium">AI Implementation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Transform Your Business with AI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Custom AI solutions architected, fine-tuned, and embedded into your existing tech stack with zero workflow disruption.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Schedule Demo</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Brain className="h-4 w-4 mr-2" />
                    <span>View Process</span>
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
                    { icon: Bot, label: 'Model Accuracy', value: '95%+' },
                    { icon: Database, label: 'Data Processing', value: '10M+/day' },
                    { icon: Cpu, label: 'Response Time', value: '<100ms' },
                    { icon: Brain, label: 'Cost Reduction', value: '40%+' }
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

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                AI Implementation Services
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions for enterprise AI adoption.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${service.color} border border-border rounded-xl p-6`}
                >
                  <service.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
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
                        {service.buyers.map((buyer, j) => (
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
                        {service.outcomes.map((outcome, j) => (
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

        {/* Bundles Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Implementation Bundles
              </h2>
              <p className="text-muted-foreground">
                Pre-packaged solutions for common implementation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {implementationBundles.map((bundle, i) => (
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
                      <h4 className="text-sm font-medium mb-2">Included Services</h4>
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
                      <h4 className="text-sm font-medium mb-2">Package Specs</h4>
                      <ul className="space-y-2">
                        {bundle.specs.map((spec, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">→</span>
                            <span>{spec}</span>
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Implementation Process
              </h2>
              <p className="text-muted-foreground">
                Our proven framework for successful AI implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Discover & Scope',
                  description: 'Stakeholder workshops, data audit, success KPIs',
                  duration: '≤ 2 weeks',
                  icon: Brain
                },
                {
                  title: 'Prototype / Pilot',
                  description: 'Finetuned model + sandbox API, single-workflow plug-in',
                  duration: '≤ 4 weeks',
                  icon: Bot
                },
                {
                  title: 'Validate',
                  description: 'A/B vs baseline, latency & cost benchmarking',
                  duration: '≤ 2 weeks',
                  icon: FileCheck
                },
                {
                  title: 'Scale & Operate',
                  description: 'IaC deploy to prod, MLOps dashboards, enablement',
                  duration: '≤ 4 weeks',
                  icon: Globe
                }
              ].map((phase, i) => (
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
                    <h3 className="font-sora font-semibold">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
                  <div className="text-sm font-medium text-primary">{phase.duration}</div>
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
                Ready to Implement AI?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how our AI implementation solutions can transform your business.
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
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Code, Brain, Database, Lightbulb, Palette, Workflow, Zap, Users, CheckCircle2, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const prototypeServices = [
  {
    title: 'Clickable UX Demo',
    description: 'Transform wireframes into interactive prototypes',
    features: [
      'Interactive Figma prototype',
      'Annotated flow map',
      'User testing scripts'
    ],
    buyers: ['Product Founder', 'GM'],
    outcomes: [
      'Usability score ≥ 80/100',
      '≤ 2 weeks delivery',
      'Stakeholder validation'
    ],
    icon: Lightbulb,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'AI Fast-Track PoC',
    description: 'Rapid AI model validation and testing',
    features: [
      'Fine-tuned model (Colab/Vertex)',
      'Jupyter report',
      'REST API stub'
    ],
    buyers: ['Head of AI', 'CTO'],
    outcomes: [
      '> X% lift vs baseline',
      'Sandbox validation',
      'Production readiness'
    ],
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Dark-Data Drill',
    description: 'Rapid data pipeline prototyping',
    features: [
      'Ingest → Transform → Query pipeline',
      'Snowflake/BigQuery integration',
      'Performance optimization'
    ],
    buyers: ['Data Platform Lead'],
    outcomes: [
      'End-to-end latency ≤ 5 min',
      'Data quality metrics',
      'Scale testing'
    ],
    icon: Database,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Growth Gadget Sprint',
    description: 'Quick growth experiments and micro-apps',
    features: [
      'Deployable micro-site',
      'Slack bot integration',
      'Analytics hooks'
    ],
    buyers: ['Growth PM'],
    outcomes: [
      'Lead-gen conversion ≥ target',
      'Rapid iteration cycles',
      'Data-driven insights'
    ],
    icon: Rocket,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Design-System Seed',
    description: 'Rapid component library setup',
    features: [
      'shadcn/ui or Tailwind components',
      'Storybook documentation',
      'Design tokens & themes'
    ],
    buyers: ['Design Systems Lead'],
    outcomes: [
      'Design debt reduction',
      'Adoption checklist',
      'Developer velocity'
    ],
    icon: Palette,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'No-Code Pilot',
    description: 'Quick workflow automation setup',
    features: [
      'Zapier/Make scenario',
      'Error-handling',
      'Monitoring & logs'
    ],
    buyers: ['RevOps', 'CRO'],
    outcomes: [
      'Manual hours saved ≥ xx/wk',
      'Process reliability',
      'Scale validation'
    ],
    icon: Workflow,
    color: 'from-accent/50 to-accent/10'
  }
];

const prototypeBundles = [
  {
    title: 'AI Quick-Win',
    description: 'Fast-track AI implementation and validation',
    features: [
      'AI Fast-Track PoC',
      'Data Prep Booster',
      'Model Optimization'
    ],
    specs: [
      'Time-box: 4 weeks',
      'Fixed Fee: $45K',
      'Ideal Buyer: AI Director'
    ],
    icon: Brain
  },
  {
    title: 'Full-Stack MVP',
    description: 'End-to-end product prototype development',
    features: [
      'UX Sprint',
      'API Scaffold',
      'Cloud Deploy'
    ],
    specs: [
      'Time-box: 6 weeks',
      'Fixed Fee: $85K',
      'Ideal Buyer: Startup Founder'
    ],
    icon: Code
  },
  {
    title: 'Growth Hack Pack',
    description: 'Rapid growth experiments and automation',
    features: [
      'Growth Gadget Sprint',
      'No-Code Pilot',
      'Analytics Tune-up'
    ],
    specs: [
      'Time-box: 3 weeks',
      'Fixed Fee: $30K',
      'Ideal Buyer: Growth PM'
    ],
    icon: Zap
  }
];

export default function RapidPrototyping() {
  return (
    <div>
      <SEOHead
        title="Rapid Prototyping Services | GigaRev"
        description="Transform ideas into working prototypes in days. Our accelerated development process helps you validate concepts and ship MVPs faster."
        keywords="rapid prototyping, MVP development, proof of concept, prototype development, fast development, quick MVP"
        ogUrl="/services/rapid-prototyping"
      />

      <PageHeader 
        title="Rapid Prototyping" 
        description="From concept to working prototype in ≤ 6 weeks"
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
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <Rocket className="h-4 w-4" />
                  <span className="text-sm font-medium">Rapid Prototyping</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Fail Fast, Learn Fast
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Our rapid prototyping lab converts napkin ideas into tested artifacts in 6 weeks or less.
                  Validate concepts quickly and iterate based on real feedback.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-accent hover:bg-accent/90">
                    <span>Start Your Project</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Rocket className="h-4 w-4 mr-2" />
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
                    { icon: Clock, label: 'Time to MVP', value: '2-6 wks' },
                    { icon: Target, label: 'Success Rate', value: '92%' },
                    { icon: Zap, label: 'Cost Savings', value: '60%' },
                    { icon: CheckCircle2, label: 'Client Satisfaction', value: '4.8/5' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-xl">
                      <stat.icon className="h-8 w-8 mb-4 text-accent" />
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
                Prototype Services
              </h2>
              <p className="text-muted-foreground">
                Comprehensive rapid prototyping solutions for every need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prototypeServices.map((service, i) => (
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
                Pre-Packaged Bundles
              </h2>
              <p className="text-muted-foreground">
                Fixed-scope, fixed-price packages for common prototype needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {prototypeBundles.map((bundle, i) => (
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
                Our Process
              </h2>
              <p className="text-muted-foreground">
                A lean, iterative approach to prototype development.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Scope Workshop',
                  description: 'Define hypothesis, success KPI, and "definition of done"',
                  duration: '≤ 3 days',
                  icon: Lightbulb
                },
                {
                  title: 'Build Sprint(s)',
                  description: '1- or 2-week cycles with mid-sprint demo',
                  duration: '1-2 weeks',
                  icon: Code
                },
                {
                  title: 'User Testing',
                  description: 'Rapid validation against KPI',
                  duration: '1 week',
                  icon: Users
                },
                {
                  title: 'Scale Planning',
                  description: 'Tech-debt ledger & go/no-go to full development',
                  duration: '1 week',
                  icon: Rocket
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
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <phase.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-sora font-semibold">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
                  <div className="text-sm font-medium text-accent">{phase.duration}</div>
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
                Ready to Build Your Prototype?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's turn your idea into reality. Our team of experts will help you validate your concept
                and build a working prototype in weeks.
              </p>
              <Button size="lg" className="pill-button bg-accent hover:bg-accent/90">
                <span>Start Your Project</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Globe, Server, Cloud, Shield, Workflow, LineChart, Cpu, GitBranch, Bot, Rocket, Users, Clock, CheckCircle2, Target, ChevronRight, Building, ShoppingCart, Layout, Search, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const serviceModules = [
  {
    title: 'MVP Accelerator',
    buyer: 'Product Owner / Founder',
    painPoint: 'Need MVP fast',
    inputs: ['Feature list', 'User stories', 'Brand kit'],
    deliverables: ['React/Next.js app', 'REST/GraphQL API', 'CI/CD pipeline'],
    metric: 'Demo-ready in ≤ 12 wks',
    icon: Rocket,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Mod-to-Micro Transition',
    buyer: 'CTO / Engineering Lead',
    painPoint: 'Legacy monolith strangler',
    inputs: ['Source repo', 'Infrastructure map'],
    deliverables: ['Microservices split', 'Service mesh', 'Migration path'],
    metric: 'Latency ↓ ≥ 20%',
    icon: GitBranch,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Perf & Scale Hardening',
    buyer: 'Growth PM',
    painPoint: 'Global scale needs',
    inputs: ['Current metrics', 'Traffic profile'],
    deliverables: ['CDN config', 'DB sharding', 'K8s autoscale'],
    metric: 'P95 latency < 150ms',
    icon: LineChart,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'FinOps Code-Sweep',
    buyer: 'Ops / DevSecOps',
    painPoint: 'Cloud cost sprawl',
    inputs: ['Cloud bill', 'IaC repos'],
    deliverables: ['Optimized IaC', 'Cost dashboards'],
    metric: 'Spend ↓ 10-30%',
    icon: Cloud,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'API & Integration Forge',
    buyer: 'RevOps / Biz Apps',
    painPoint: 'SaaS workflow gaps',
    inputs: ['SaaS credentials', 'Process docs'],
    deliverables: ['Event-driven integrations', 'Webhooks'],
    metric: 'Manual ops hours ↓',
    icon: Workflow,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Data + Stream Stack',
    buyer: 'Data Platform Lead',
    painPoint: 'Real-time analytics',
    inputs: ['Schemas', 'BI goals'],
    deliverables: ['Kafka pipeline', 'BI dashboard'],
    metric: 'Data latency ≤ 5 min',
    icon: Database,
    color: 'from-accent/50 to-accent/10'
  }
];

const bundles = [
  {
    name: 'Startup Launch Pad',
    description: 'Complete tech stack for seed/Series-A startups',
    includes: ['MVP Accelerator', 'Security Wrap (light)', 'FinOps Sweep'],
    timeline: '10 weeks',
    price: '$95K fixed',
    icon: Rocket
  },
  {
    name: 'Enterprise Modernisation',
    description: 'Legacy system transformation for Fortune 1000',
    includes: ['Mod-to-Micro', 'API Forge', 'Perf Hardening'],
    timeline: '16 weeks',
    price: 'T&M / SOW',
    icon: Building
  },
  {
    name: 'Realtime Commerce Edge',
    description: 'High-performance stack for e-commerce',
    includes: ['Data-Stream Stack', 'Perf Hardening', 'Security Wrap'],
    timeline: '12 weeks',
    price: '$140K',
    icon: ShoppingCart
  }
];

const techStack = [
  {
    category: 'UI / Mobile',
    tools: ['Next.js', 'React', 'shadcn/ui', 'Flutter', 'React Native'],
    icon: Layout
  },
  {
    category: 'API / Services',
    tools: ['Node.js (NestJS)', 'FastAPI', 'Go', 'Django', 'GraphQL'],
    icon: Server
  },
  {
    category: 'Data',
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Snowflake'],
    icon: Database
  },
  {
    category: 'Infra / DevOps',
    tools: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD'],
    icon: Cloud
  }
];

const deliveryPhases = [
  {
    title: 'Discover & Architect',
    duration: '≤ 2 weeks',
    tasks: ['Workshops', 'Tech audit', 'Success KPIs'],
    icon: Search
  },
  {
    title: 'Sprint Build',
    duration: '2-4 week cycles',
    tasks: ['Agile backlog', 'Weekly demos', 'QA gates'],
    icon: Code2
  },
  {
    title: 'UAT & Performance',
    duration: '1-2 weeks',
    tasks: ['Load testing', 'Security scan', 'User sign-off'],
    icon: TestTube
  },
  {
    title: 'Go-Live & Handover',
    duration: '1 week',
    tasks: ['Blue-green deploy', 'Runbooks', 'Observability'],
    icon: Rocket
  }
];

export default function FullStackDev() {
  return (
    <div>
      <SEOHead
        title="Full Stack Development Services | GigaRev"
        description="End-to-end product engineering delivered by cross-functional pods. From UI wireframe to auto-scaling production clusters, we transform ideas into production-ready systems."
        keywords="full stack development, product engineering, web development, application development, cloud architecture, DevOps"
        ogUrl="/services/full-stack-development"
      />
      
      <PageHeader 
        title="Full Stack Development" 
        description="End-to-end product engineering delivered by cross-functional pods"
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
                  <Code2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Full Stack Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  From Zero to Production in One Quarter
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  End-to-end product engineering—from UI wireframe to auto-scaling production clusters—delivered by a single, cross-functional pod.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <span>Start Your Project</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Code2 className="h-4 w-4 mr-2" />
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
                    { icon: Clock, label: 'Time to MVP', value: '8-12 wks' },
                    { icon: Users, label: 'Client Satisfaction', value: '4.9/5' },
                    { icon: Bot, label: 'Automation', value: '70%+' },
                    { icon: Shield, label: 'Security Score', value: '98/100' }
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

        {/* Service Modules Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Service Modules
              </h2>
              <p className="text-muted-foreground">
                Modular service catalogue tailored for specific stakeholder needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceModules.map((module, i) => (
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
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{module.buyer}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{module.painPoint}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Required Inputs</h4>
                      <ul className="space-y-2">
                        {module.inputs.map((input, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">•</span>
                            <span>{input}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Deliverables</h4>
                      <ul className="space-y-2">
                        {module.deliverables.map((deliverable, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">→</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{module.metric}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Reference Tech Stack
              </h2>
              <p className="text-muted-foreground">
                Battle-tested tools and frameworks we use to build scalable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-sora font-medium">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.tools.map((tool, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Framework Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Delivery Framework
              </h2>
              <p className="text-muted-foreground">
                Our proven approach to delivering successful projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryPhases.map((phase, i) => (
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
                    <div>
                      <h3 className="font-sora font-medium">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-accent" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
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
                Ready to Build Your Next Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our full-stack development services can help you build and scale your next big idea.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
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
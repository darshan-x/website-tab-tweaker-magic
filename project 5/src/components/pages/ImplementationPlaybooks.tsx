import { motion } from 'framer-motion';
import { ArrowRight, Brain, Bot, Database, Shield, Workflow, Code2, LineChart, Users, CheckCircle2, FileText, BookOpen, Download, Play, Rocket, Zap, MessageSquare, Target, Globe, Building2, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const playbooks = [
  {
    title: 'AI Implementation Playbook',
    description: 'Step-by-step guide to implementing enterprise AI solutions',
    chapters: [
      'AI Readiness Assessment',
      'Model Selection Framework',
      'Data Pipeline Setup',
      'Security & Compliance',
      'Production Deployment',
      'Monitoring & Maintenance'
    ],
    metrics: [
      { label: 'Implementation Time', value: '-40%' },
      { label: 'Project Risk', value: '-65%' },
      { label: 'ROI Timeline', value: '2-3x faster' }
    ],
    icon: Brain,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Full-Stack Development Playbook',
    description: 'Complete guide to building scalable applications',
    chapters: [
      'Architecture Design',
      'Tech Stack Selection',
      'Development Workflow',
      'Testing Strategy',
      'DevOps Pipeline',
      'Performance Optimization'
    ],
    metrics: [
      { label: 'Development Time', value: '-35%' },
      { label: 'Code Quality', value: '98/100' },
      { label: 'Performance', value: '+45%' }
    ],
    icon: Code2,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Sales AI Transformation',
    description: 'Complete framework for AI-powered sales enablement',
    chapters: [
      'Sales Process Analysis',
      'AI Tool Selection',
      'Rep Enablement Plan',
      'Performance Metrics',
      'Change Management',
      'ROI Tracking'
    ],
    metrics: [
      { label: 'Win Rate', value: '+24%' },
      { label: 'Sales Cycle', value: '-31%' },
      { label: 'Productivity', value: '+40%' }
    ],
    icon: LineChart,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Marketing AI Playbook',
    description: 'Guide to implementing AI in marketing operations',
    chapters: [
      'Content Generation Setup',
      'Campaign Optimization',
      'Audience Targeting',
      'Analytics Integration',
      'Creative Automation',
      'Performance Tracking'
    ],
    metrics: [
      { label: 'Campaign ROI', value: '+42%' },
      { label: 'Content Creation', value: '3x faster' },
      { label: 'Engagement', value: '+38%' }
    ],
    icon: Target,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Customer Support AI',
    description: 'Guide to implementing AI in customer support operations',
    chapters: [
      'Support Flow Mapping',
      'AI Agent Design',
      'Knowledge Base Setup',
      'Agent Augmentation',
      'Quality Assurance',
      'Scaling Strategy'
    ],
    metrics: [
      { label: 'Resolution Time', value: '-45%' },
      { label: 'CSAT Score', value: '+12pts' },
      { label: 'Cost per Ticket', value: '-35%' }
    ],
    icon: MessageSquare,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Rapid Prototyping Playbook',
    description: 'Framework for fast, effective prototype development',
    chapters: [
      'Concept Validation',
      'MVP Scoping',
      'Tech Selection',
      'Sprint Planning',
      'User Testing',
      'Iteration Process'
    ],
    metrics: [
      { label: 'Time to MVP', value: '2-4 weeks' },
      { label: 'Cost Savings', value: '60%' },
      { label: 'Success Rate', value: '92%' }
    ],
    icon: Rocket,
    color: 'from-accent/50 to-accent/10'
  }
];

const implementationTools = [
  {
    title: 'Assessment Templates',
    description: 'Ready-to-use templates for evaluating implementation readiness',
    features: [
      'Technical Readiness Checklist',
      'Data Quality Assessment',
      'Risk Analysis Framework',
      'ROI Calculator'
    ],
    icon: FileText
  },
  {
    title: 'Process Workflows',
    description: 'Detailed workflows for each implementation phase',
    features: [
      'Implementation Timeline',
      'Milestone Tracking',
      'Resource Allocation',
      'Quality Gates'
    ],
    icon: Workflow
  },
  {
    title: 'Security Guidelines',
    description: 'Comprehensive security and compliance documentation',
    features: [
      'Security Checklist',
      'Compliance Framework',
      'Data Protection',
      'Access Controls'
    ],
    icon: Shield
  },
  {
    title: 'Training Materials',
    description: 'End-user and administrator training resources',
    features: [
      'User Guides',
      'Video Tutorials',
      'Best Practices',
      'Troubleshooting'
    ],
    icon: BookOpen
  }
];

const verticalGuides = [
  {
    title: 'Enterprise Implementation',
    description: 'For Fortune 1000 companies',
    features: [
      'Change Management',
      'Enterprise Integration',
      'Compliance Framework',
      'Global Rollout'
    ],
    icon: Building2
  },
  {
    title: 'Startup Fast-Track',
    description: 'For Series A-C companies',
    features: [
      'Rapid Deployment',
      'Growth Scaling',
      'Cost Optimization',
      'Market Adaptation'
    ],
    icon: Rocket
  },
  {
    title: 'Mid-Market Solutions',
    description: 'For growing businesses',
    features: [
      'Balanced Approach',
      'Flexible Scaling',
      'ROI Optimization',
      'Team Enablement'
    ],
    icon: Building
  }
];

export default function ImplementationPlaybooks() {
  return (
    <div>
      <PageHeader 
        title="Implementation Playbooks" 
        description="Step-by-step guides for successful implementation across all verticals"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Implementation Playbooks
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive guides and tools for implementing solutions across all verticals.
                  Based on real-world experience and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    <span>Download All Playbooks</span>
                  </Button>
                  <Button size="lg" variant="outline" className="pill-button">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Watch Overview</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Available Playbooks
              </h2>
              <p className="text-muted-foreground">
                Comprehensive implementation guides for every domain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playbooks.map((playbook, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${playbook.color} border border-border rounded-xl p-6`}
                >
                  <playbook.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{playbook.title}</h3>
                  <p className="text-muted-foreground mb-6">{playbook.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Chapters</h4>
                      <ul className="space-y-2">
                        {playbook.chapters.map((chapter, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="h-5 w-5 flex-shrink-0">•</span>
                            <span>{chapter}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Impact Metrics</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {playbook.metrics.map((metric, j) => (
                          <div key={j} className="text-center p-2 bg-background/30 rounded-lg">
                            <div className="text-lg font-sora font-semibold text-accent mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Tools */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Implementation Tools
              </h2>
              <p className="text-muted-foreground">
                Ready-to-use templates and resources to accelerate your implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationTools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <tool.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-sora font-medium">{tool.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {tool.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vertical-Specific Guides */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Vertical-Specific Guides
              </h2>
              <p className="text-muted-foreground">
                Tailored implementation approaches for different business scales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {verticalGuides.map((guide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <guide.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-sora font-medium">{guide.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {guide.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {guide.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{feature}</span>
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
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Start Your Implementation?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download our playbooks and schedule a call with our implementation experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                  <span>Book Strategy Call</span>
                  <ArrowRight className="button-icon h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="pill-button">
                  <Download className="h-4 w-4 mr-2" />
                  <span>Download All Resources</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
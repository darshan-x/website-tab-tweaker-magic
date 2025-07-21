import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, LineChart, Users, Bot, Shield, Database, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const caseStudies = [
  {
    title: 'Chipr × GigaRev',
    subtitle: 'Re-engineering Field-Sales Growth with Programmatic Recruitment & Agentic AI',
    description: 'How we helped Chipr cut churn-related costs by 90% and boost revenue per rep by 38%.',
    metrics: [
      { label: 'Revenue / Rep', value: '+38%' },
      { label: 'Training Cost', value: '-90%' },
      { label: 'First-call Resolution', value: '+19%' },
      { label: 'Forecast Accuracy', value: '+14%' }
    ],
    industry: 'T-Mobile / Fibre Retail',
    workforce: '1,600+ employees',
    scope: 'Sales Enablement · Programmatic Talent Acquisition · RevOps Data Fabric · AI Automation',
    link: '/case-studies/chipr',
    icon: Users,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Notion × GigaRev',
    subtitle: 'Building a Clean, Connected Revenue Engine',
    description: 'Transforming siloed data into a unified revenue system with enterprise-grade automation.',
    metrics: [
      { label: 'Lead-to-Cash', value: 'Unified' },
      { label: 'Email Performance', value: '+42%' },
      { label: 'Data Disputes', value: '-85%' },
      { label: 'Campaign Launch', value: '3x faster' }
    ],
    industry: 'SaaS – Digital Workspace',
    workforce: 'Enterprise',
    scope: 'Salesforce Implementation · Marketo Setup · Data Hygiene & Enrichment',
    link: '/case-studies/notion',
    icon: Building2,
    color: 'from-secondary/50 to-secondary/10'
  }
];

export default function CaseStudies() {
  return (
    <div>
      <PageHeader 
        title="Case Studies" 
        description="Real results from our enterprise implementations"
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
                  Client Success Stories
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Explore how we've helped enterprises implement AI, slash costs, and accelerate revenue with measurable results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${study.color} border border-border rounded-xl p-8`}
                >
                  <study.icon className="h-12 w-12 mb-6" />
                  <h2 className="text-2xl font-sora font-semibold mb-2">{study.title}</h2>
                  <h3 className="text-lg text-muted-foreground mb-6">{study.subtitle}</h3>
                  
                  <p className="mb-8">{study.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {study.metrics.map((metric, j) => (
                      <div key={j} className="text-center p-4 bg-background/30 rounded-lg">
                        <div className="text-xl font-sora font-semibold text-accent mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Industry</div>
                        <div className="text-sm text-muted-foreground">{study.industry}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Scale</div>
                        <div className="text-sm text-muted-foreground">{study.workforce}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Workflow className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Scope</div>
                        <div className="text-sm text-muted-foreground">{study.scope}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full pill-button bg-accent hover:bg-accent/90"
                    asChild
                  >
                    <Link to={study.link}>
                      <span>Read Case Study</span>
                      <ArrowRight className="button-icon h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
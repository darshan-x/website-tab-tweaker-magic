import { motion } from 'framer-motion';
import { ArrowRight, Brain, Database, Globe, Shield, Workflow, Bot, LineChart, Clock, Users, CheckCircle2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function NotionCaseStudy() {
  return (
    <div>
      <PageHeader 
        title="Notion Case Study" 
        description="Building a Clean, Connected Revenue Engine"
      />
      
      <div className="pt-20">
        {/* Hero Stats */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Lead-to-Cash', value: 'Unified' },
                { label: 'Email Performance', value: '+42%' },
                { label: 'Data Disputes', value: '-85%' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-sora font-semibold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">The Business Challenge</h2>
            
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left font-medium">Issue</th>
                      <th className="p-4 text-left font-medium">Impact on Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Siloed data in multiple CRMs, marketing tools and regional spreadsheets</td>
                      <td className="p-4">Inconsistent funnel reporting and difficult revenue attribution</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Large volumes of duplicate or incomplete records</td>
                      <td className="p-4">Rep frustration, usage-based billing discrepancies, commission disputes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">No enterprise-grade marketing-automation platform</td>
                      <td className="p-4">Limited nurture journeys and slow campaign launches</td>
                    </tr>
                    <tr>
                      <td className="p-4">Limited in-house admin bandwidth</td>
                      <td className="p-4">Ongoing backlog of change requests and configuration drift</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">GigaRev Solution Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Salesforce Revamp',
                  features: [
                    'Fresh Sales & Service Cloud architecture',
                    'Territory models, lead queues, usage-based pricing workflows'
                  ],
                  icon: LineChart
                },
                {
                  title: 'Marketo Stand-Up',
                  features: [
                    'Net-new instance with workspaces, partitions and secure API sync to Salesforce',
                    'Automated PLG nurture programs with dynamic content'
                  ],
                  icon: Bot
                },
                {
                  title: 'Data Hygiene & Enrichment',
                  features: [
                    'AI-assisted deduplication and normalisation',
                    'Continuous enrichment via trusted data providers',
                    'Live data-quality dashboard for RevOps'
                  ],
                  icon: Database
                },
                {
                  title: 'Ongoing Administration',
                  features: [
                    'Dedicated admin pod across Salesforce & Marketo',
                    'Regular optimisation sprints and user enablement sessions'
                  ],
                  icon: Users
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <pillar.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-sora font-medium">{pillar.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {pillar.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              All changes shipped through Git-backed IaC; every release is traceable and rollback-safe.
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">Business Outcomes</h2>
            
            <div className="space-y-6">
              {[
                'Marketing now spins campaigns in days rather than weeks.',
                'Sales reps trust CRM data and rarely need to chase duplicate or outdated leads.',
                'Finance reconciles usage-based invoices with far fewer disputes.',
                'RevOps reports a single source of truth across sales, marketing and customer success.',
                'Stakeholder satisfaction has risen across frontline reps, managers and executives.'
              ].map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-card border border-border rounded-lg p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>{outcome}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-card border border-border rounded-xl p-6">
              <div className="text-lg italic text-muted-foreground mb-4">
                "GigaRev took us from spreadsheet chaos to a single, governed revenue system. Our marketers move faster and our sellers finally believe the data."
              </div>
              <div className="font-medium">— Will J, Program Coordinator, Notion</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Unify Your Revenue Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build a clean, connected revenue engine.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Book Strategy Call</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
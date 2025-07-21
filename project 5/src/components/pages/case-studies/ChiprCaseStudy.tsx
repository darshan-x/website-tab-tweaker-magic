import { motion } from 'framer-motion';
import { ArrowRight, Brain, Database, Globe, Shield, Workflow, Bot, LineChart, Clock, Users, CheckCircle2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function ChiprCaseStudy() {
  return (
    <div>
      <PageHeader 
        title="Chipr Case Study" 
        description="Re-engineering Field-Sales Growth with Programmatic Recruitment & Agentic AI"
      />
      
      <div className="pt-20">
        {/* Hero Stats */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Revenue / Rep', value: '+38%' },
                { label: 'Training Cost', value: '-90%' },
                { label: 'First-call Resolution', value: '+19%' },
                { label: 'Forecast Accuracy', value: '+14%' }
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
                      <th className="p-4 text-left font-medium">Pain-Point</th>
                      <th className="p-4 text-left font-medium">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Chronic rep churn (35–45% YoY) → expensive back-fills & ramp-up delays</td>
                      <td className="p-4">$12k average direct cost per vacated seat</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Head-count gaps in new fibre-launch markets</td>
                      <td className="p-4">Territory coverage &lt; 70% in Georgia & Utah</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Siloed data — sales performance, commissions, LMS and HRIS stored in seven systems</td>
                      <td className="p-4">Forecast and payroll disputes; hours wasted in reconciliation</td>
                    </tr>
                    <tr>
                      <td className="p-4">Lengthy call prep — reps spent 2–3 h/week on prospect research & script practice</td>
                      <td className="p-4">&lt; 40% selling time</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-lg font-medium mb-4">Chipr's mandate to GigaRev:</div>
                <div className="text-muted-foreground italic">
                  "Cut churn-related cost, fill territories faster, and give managers real-time line-of-sight into revenue and commissions."
                </div>
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
                  title: 'Programmatic Recruitment',
                  features: [
                    'Geo-targeted ad sets across Meta + Indeed + TikTok',
                    'RL-based bid optimiser holding CPA < $18',
                    'Candidate-Engagement Bot (SMS + voice) for reminders, doc collection, pre-screen'
                  ],
                  icon: Users
                },
                {
                  title: 'Sales-Enablement Automation',
                  features: [
                    'Prospect Concierge Bot (LinkedIn + SMS) auto-answers product FAQs',
                    'AI Role-Play Simulator ("Chipr Coach") with GPT-4o personas & rubric scoring'
                  ],
                  icon: Bot
                },
                {
                  title: 'RevOps Data Fabric',
                  features: [
                    'Snowflake lakehouse ingesting CRM, dialer, LMS, HRIS & ADP payroll',
                    'dbt lineage, real-time metrics in Superset'
                  ],
                  icon: Database
                },
                {
                  title: 'Agentic Intelligence Layer',
                  features: [
                    'Deal-Health Predictor & Forecast Copilot',
                    'Commission Accuracy Agent (cross-checks activities vs comp plan)',
                    'Churn-Risk Predictor for new reps (onboarding telemetry)'
                  ],
                  icon: Brain
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

            <div className="mt-12 bg-card border border-border rounded-xl p-6">
              <h3 className="font-sora font-medium mb-4">Architecture Snapshot</h3>
              <pre className="text-sm text-muted-foreground overflow-x-auto">
                SaaS APIs ─► Snowpipe ─► Snowflake
                                   ├─ dbt models ─► Feature Store
                                   │
                                   ├─ FastAPI Micro-services (Inference / Actions)
                                   └─ Temporal Workflows (Recruit • Engage • Coach)
              </pre>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">Implementation Timeline</h2>
            
            <div className="space-y-4">
              {[
                { month: '0–1', milestone: 'Data audit, KPI baselines, prompt-library workshop' },
                { month: '2', milestone: 'Recruitment DSP live in 12 states · Candidate Bot pilot' },
                { month: '3', milestone: 'Role-Play Simulator GA · 1,200 sessions first fortnight' },
                { month: '5', milestone: 'Unified data fabric live · first AI commission check' },
                { month: '7', milestone: 'Sales Concierge rolled to 700 reps (mobile app)' },
                { month: '12', milestone: 'Edge-deployed inference (WASM) brings response latency < 40 ms' }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-card border border-border rounded-lg p-4"
                >
                  <div className="font-sora font-medium text-primary w-16">Month {phase.month}</div>
                  <div>{phase.milestone}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              All code shipped as Terraform-backed modules; AI models monitored in MLflow with drift alerts to RevOps.
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">Business Outcomes</h2>
            
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left font-medium">Metric</th>
                    <th className="p-4 text-left font-medium">Baseline</th>
                    <th className="p-4 text-left font-medium">12-Month Result</th>
                    <th className="p-4 text-left font-medium">Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Recruiting CPA (qualified applicant)', '$42', '$16.85', '–60%'],
                    ['Time-to-Offer', '11 days', '4.2 days', '–62%'],
                    ['Training Cost / Back-fill Rep', '$1,400', '$135', '–90%'],
                    ['Ramp-to-Quota', '10 weeks', '6 weeks', '–40%'],
                    ['Revenue / Active Rep', '$8.9k/mo', '$12.3k/mo', '+38%'],
                    ['Forecast Accuracy (±)', '22%', '8%', '+14 pts'],
                    ['Commission Disputes / Q', '114', '9', '–92%']
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="p-4">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4">{row[2]}</td>
                      <td className="p-4 text-accent">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-lg italic text-muted-foreground mb-4">
                "In under a year we replaced seven disconnected tools with an AI-driven RevOps cockpit and cut our churn-replacement cost to a tenth. GigaRev delivered on every promise."
              </div>
              <div className="font-medium">— Joel Rackham, President, Chipr</div>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-sora font-semibold mb-8">Key Stack Snapshot</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  layer: 'Orchestration',
                  tech: ['Temporal', 'n8n'],
                  icon: Workflow
                },
                {
                  layer: 'Models',
                  tech: ['GPT-4o (chat)', 'Whisper (ASR)', 'TabTransformer (deal health)', 'RL Bidding Agent'],
                  icon: Brain
                },
                {
                  layer: 'Data',
                  tech: ['Snowflake', 'dbt', 'Feast feature-store'],
                  icon: Database
                },
                {
                  layer: 'Security',
                  tech: ['Vault', 'OPA policies', 'column-level encryption'],
                  icon: Shield
                }
              ].map((stack, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <stack.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-sora font-medium">{stack.layer}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {stack.tech.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{item}</span>
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
          <div className="container max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Transform Your Sales Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve similar results.
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
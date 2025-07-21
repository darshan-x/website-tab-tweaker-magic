import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, CheckCircle2, Clock, Calendar, Bot, Shield, Zap, Building2, Users, MessageSquare, Brain, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const sampleWorkflows = [
  {
    function: 'Marketing',
    ideas: [
      'Auto-produce & schedule weekly nurture email based on blog RSS',
      'Daily ad-budget optimiser that pauses low-ROI campaigns'
    ],
    icon: Brain,
    color: 'from-primary/50 to-primary/10'
  },
  {
    function: 'Sales',
    ideas: [
      'Lead-enrichment bot that fills firmographic gaps before each call',
      'Meeting-summary agent that drafts follow-up emails & logs CRM notes'
    ],
    icon: Users,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    function: 'Sales Enablement',
    ideas: [
      'AI role-play simulator that certifies reps on objections',
      'Just-in-time battlecard recommender inside Zoom/GMeet'
    ],
    icon: Shield,
    color: 'from-accent/50 to-accent/10'
  },
  {
    function: 'HR',
    ideas: [
      'New-hire onboarding checklist that pings IT, finance, manager—then tracks completion'
    ],
    icon: Building2,
    color: 'from-primary/50 to-primary/10'
  },
  {
    function: 'Recruitment',
    ideas: [
      'Resume-screening agent that ranks candidates & drafts recruiter notes',
      'Candidate-engagement drip: auto-send updates, schedule interviews'
    ],
    icon: Users,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    function: 'Customer Support',
    ideas: [
      'Ticket-triage bot that tags, prioritises, and routes issues',
      'FAQ chatbot trained on your KB + policy guard-rails'
    ],
    icon: MessageSquare,
    color: 'from-accent/50 to-accent/10'
  }
];

const scopeIncludes = [
  {
    phase: 'Discovery Workshop (2 hrs)',
    description: 'Map current steps, data sources & success KPI.'
  },
  {
    phase: 'Design & Build (2 weeks)',
    description: 'LLM prompts, API hooks, policy guard-rails.'
  },
  {
    phase: 'User Testing (1 week)',
    description: 'Pilot group feedback & tweaks.'
  },
  {
    phase: 'Go-Live & Monitoring (1 week)',
    description: 'Dashboard, alerting, rollback plan.'
  },
  {
    phase: 'Post-Launch Report',
    description: 'Measured time/cost savings + expansion roadmap.'
  }
];

const eligibilityCriteria = [
  'B2B companies with ≥ 50 employees',
  'API-accessible data (CRM, MAP, HRIS, etc.)',
  'Executive sponsor willing to provide pilot access & 30-minute weekly check-ins'
];

const realWorldWins = [
  { metric: 'Marketing nurture bot', impact: 'campaign cycle time −70%' },
  { metric: 'Sales meeting-summary agent', impact: 'rep admin time −2h/week' },
  { metric: 'Ticket-triage classifier', impact: 'first-response SLA +25%' }
];

const faqs = [
  {
    question: 'What if we need custom security?',
    answer: 'We deploy in your cloud/VPC and add policy LLM redaction.'
  },
  {
    question: 'What tech do you use?',
    answer: 'GPT-4o, Gemini 2.5, n8n/Temporal, Snowflake/BigQuery—whatever fits the stack.'
  },
  {
    question: 'Will we own the IP?',
    answer: 'Yes. All code & prompts are handed over at hand-off.'
  }
];

export default function SpecialOffer() {
  return (
    <div>
      <PageHeader 
        title="Automate One High-Impact Workflow — On Us" 
        description="Get a live, production-ready automation in < 30 days. Zero fees. Zero strings."
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
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-6">
                  <Gift className="h-4 w-4" />
                  <span className="text-sm font-medium">Limited Time Offer</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Automate One High-Impact Workflow — On Us
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  The fastest way to prove AI-powered automation works is to ship something real—not another slide deck. 
                  So we're giving select companies a chance to pick one critical workflow. We'll design, build, deploy, 
                  and monitor it for free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="pill-button bg-red-500 hover:bg-red-600"
                    asChild
                  >
                    <Link to="/contact">
                      <span>Book My Free Automation Call</span>
                      <ArrowRight className="button-icon h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scope Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                What "Free" Actually Includes
              </h2>
              <p className="text-muted-foreground">
                You pay nothing. If you like the results, we can talk about scaling; if not, you keep the automation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {scopeIncludes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sora font-medium mb-1">{item.phase}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sample Workflows */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Pick Your Function—Sample Workflows We'll Build
              </h2>
              <p className="text-muted-foreground">
                Have another workflow in mind? Pitch it—we love unusual challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleWorkflows.map((workflow, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${workflow.color} border border-border rounded-xl p-6`}
                >
                  <workflow.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-xl font-sora font-semibold mb-4">{workflow.function}</h3>
                  <ul className="space-y-3">
                    {workflow.ideas.map((idea, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Bot className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility & Process */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-sora font-semibold mb-6">Who's Eligible?</h2>
                <div className="space-y-4">
                  {eligibilityCriteria.map((criteria, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{criteria}</span>
                    </div>
                  ))}
                </div>
                <p className="text-accent font-medium">Only 6 slots / quarter. We prioritise teams that move fast.</p>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-sora font-semibold mb-6">How It Works</h2>
                <div className="space-y-4">
                  {[
                    'Apply → 3-minute form',
                    'We Select → confirm within 5 business days',
                    'Design Sprint → you approve mocked flow',
                    'Build & Test → rapid iterations in staging',
                    'Go Live → see ROI within a month'
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results & FAQs */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-sora font-semibold mb-6">Real-World Wins (Previous Pilots)</h2>
                <div className="space-y-4">
                  {realWorldWins.map((win, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <FileCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium">{win.metric}</div>
                          <div className="text-accent">{win.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-sora font-semibold mb-6">FAQ</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-sora font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to See AI Workflows in Action?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                30 minutes → pick a workflow → go live in weeks—on GigaRev's dime.
              </p>
              <Button 
                size="lg" 
                className="pill-button bg-red-500 hover:bg-red-600"
                asChild
              >
                <Link to="/contact">
                  <span>Book My Free Automation Call</span>
                  <ArrowRight className="button-icon h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
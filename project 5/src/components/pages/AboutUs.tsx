import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, LineChart, Users, Mail, Linkedin, Code, Wand2, Database, Rocket, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const teamMembers = [
  {
    name: 'Darshan Karthik',
    role: 'CMO & Head of AI Operations (Marketing)',
    tagline: 'Ex-agency storyteller who swapped coffee for SQL. Darshan teaches chatbots to write copy, trims CAC like topiary, and has permanently banned the phrase "spray-and-pray."',
    expertise: ['Marketing AI', 'Growth Engineering', 'Data Analytics'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Ravish Kamath',
    role: 'CTO',
    tagline: 'Code whisperer with 20 years of shipping ML before it was cool. Ravish makes generative models behave, prototypes at warp speed, and insists every feature earn its keep on the P&L.',
    expertise: ['AI Architecture', 'Product Engineering', 'ML Ops'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_20_PM_kf0ywz.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Pavitra',
    role: 'Staff AI Engineer',
    tagline: 'Turns half-baked specs into production-grade agents before the espresso cools. If it compiles, she\'s already optimizing it.',
    expertise: ['ML Engineering', 'Model Training', 'AI Optimization'],
    icon: Wand2,
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Dax Abraham',
    role: 'Director, AI Delivery & Transformation',
    tagline: 'Two-decade veteran who\'s launched more products than most startups pitch decks. Dax air-drops into client chaos and leaves behind sleek, AI-first ops.',
    expertise: ['AI Implementation', 'Digital Transformation', 'Product Launch'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718455/ChatGPT_Image_May_8_2025_09_03_44_PM_z4v8hj.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Apoorva Chathukutty',
    role: 'Director, Creative & Campaigns',
    tagline: 'Agency-honed maestro of scroll-stopping ideas. Apoorva translates strategy into campaigns that make attribution dashboards blush.',
    expertise: ['Creative Direction', 'Campaign Strategy', 'Content AI'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718455/ChatGPT_Image_May_8_2025_09_03_23_PM_p4epee.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Ankit Balani',
    role: 'Lead, Data Hygiene & Enrichment',
    tagline: 'The Marie Kondo of B2B data—declutters CRMs, dedupes at scale, and sparks joy (and revenue) in every record set.',
    expertise: ['Data Cleansing', 'CRM Optimization', 'Process Automation'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718394/Ankit_Balani_kigo3e.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  },
  {
    name: 'Tabish Khan',
    role: 'CEO',
    tagline: 'Revenue alchemist and former MarketStar rainmaker. Tabish turns AI agents into quota-crushing BDRs, glues sales-to-support workflows together, and still breaks CRMs just to rebuild them better.',
    expertise: ['Revenue Operations', 'GTM Strategy', 'AI Implementation'],
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746717363/0cdd6847-81c2-488f-8fcf-0634c234fc6f_1_tf2hdi.png',
    social: {
      linkedin: 'https://www.linkedin.com/company/gigarev/',
      email: 'team@gigarev.com'
    }
  }
];

const values = [
  {
    title: 'Innovation First',
    description: "Pushing the boundaries of what's possible with AI",
    icon: Brain,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'Client Success',
    description: 'Dedicated to delivering measurable business outcomes',
    icon: LineChart,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'Technical Excellence',
    description: 'Building robust, scalable AI solutions',
    icon: Code,
    color: 'from-accent/50 to-accent/10'
  },
  {
    title: 'Collaborative Growth',
    description: 'Growing together with our clients and partners',
    icon: Users,
    color: 'from-primary/50 to-primary/10'
  }
];

export default function AboutUs() {
  return (
    <div>
      <SEOHead
        title="About Us | GigaRev - AI Implementation Experts"
        description="Meet the GigaRev team - AI experts, engineers, and business leaders dedicated to transforming enterprises through intelligent automation and AI implementation."
        keywords="AI experts, technology leadership, AI implementation team, enterprise AI consultants"
        ogUrl="/about"
      />
      
      <PageHeader 
        title="About Us" 
        description="Building the future of business with AI"
      />
      
      <div className="pt-20">
        {/* Mission Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Our Mission
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  At GigaRev, we're on a mission to revolutionize how businesses operate through 
                  intelligent AI implementation. We help organizations slash costs, accelerate revenue, 
                  and achieve operational excellence through cutting-edge artificial intelligence solutions.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {values.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`bg-gradient-to-b ${value.color} border border-border rounded-xl p-6 text-center`}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-sora font-medium mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                A diverse team of AI experts, engineers, and business leaders dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl overflow-hidden group hover:border-accent/50 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <member.icon className="h-12 w-12 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-sora font-semibold">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{member.tagline}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, j) => (
                            <span
                              key={j}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${member.social.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
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
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a call to discuss how our AI solutions can help you achieve operational excellence.
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
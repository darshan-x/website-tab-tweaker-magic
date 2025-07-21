import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, DivideIcon as LucideIcon, Cpu, Code, LineChart, Users, BarChart, Headphones, Play, Zap, Award, Building, Building2, Radio, Smartphone, Rocket, Database, Bot, Workflow, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import SEOHead from '@/components/shared/SEOHead';
import HeroSection from '@/components/sections/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  color: string;
}

const aiImplementationService: Service = {
  title: 'AI Implementation',
  icon: Cpu,
  description: 'Custom AI solutions built on cutting-edge models with seamless integration.',
  features: [
    'Model selection & fine-tuning',
    'Real-time inference < 100ms',
    'Secure deployment & monitoring',
    'Compliance & guard-rails',
  ],
  color: 'from-primary/50 to-primary/10',
};

const developmentService: Service = {
  title: 'Development Services',
  icon: Code,
  description: 'End-to-end product engineering delivered by cross-functional pods.',
  features: [
    'MVP in 8-12 weeks',
    'Microservices architecture',
    'Cloud-native deployment',
    'Performance optimization',
  ],
  color: 'from-secondary/50 to-secondary/10',
};

const revenueService: Service = {
  title: 'Revenue Services',
  icon: LineChart,
  description: 'AI-powered solutions for sales, marketing, and customer success.',
  features: [
    'AI sales coaching & automation',
    'Real-time deal intelligence',
    'Conversation analytics',
    'Revenue optimization',
  ],
  color: 'from-accent/50 to-accent/10',
};

const techSubServices = [
  {
    title: 'Rapid Prototyping',
    icon: Rocket,
    description: 'Transform ideas into working prototypes in days with our accelerated development process.',
    link: '/services/rapid-prototyping'
  },
  {
    title: 'AI Implementation',
    icon: Bot,
    description: 'Custom AI solutions built on cutting-edge models with seamless integration into your workflow.',
    link: '/services/ai-implementation'
  },
  {
    title: 'Full-Stack Development',
    icon: Code,
    description: 'End-to-end development of AI-powered applications with scalable architecture.',
    link: '/services/full-stack-development'
  },
];

const revenueSubServices = [
  {
    title: 'Sales AI',
    icon: BarChart,
    description: 'AI-powered sales enablement, coaching, and automation to accelerate pipeline and close deals faster.',
    link: '/services/sales-ai'
  },
  {
    title: 'Marketing AI',
    icon: Users,
    description: 'Content generation, campaign optimization, and audience targeting to maximize marketing ROI.',
    link: '/services/marketing-ai'
  },
  {
    title: 'Customer Support AI',
    icon: Headphones,
    description: 'Intelligent support automation, sentiment analysis, and proactive engagement to enhance satisfaction.',
    link: '/services/customer-support-ai'
  },
];

const industriesServed = [
  {
    name: 'Field Sales',
    href: '/verticals/field-sales',
    icon: Users,
    color: 'bg-primary/20',
  },
  {
    name: 'AdTech',
    href: '/verticals/adtech',
    icon: LineChart,
    color: 'bg-secondary/20',
  },
  {
    name: 'MarTech',
    href: '/verticals/martech',
    icon: Zap,
    color: 'bg-accent/20',
  },
  {
    name: 'Telecom/Fibre',
    href: '/verticals/telecom',
    icon: Radio,
    color: 'bg-primary/20',
  },
  {
    name: 'Tech SMB',
    href: '/verticals/tech-smb',
    icon: Smartphone,
    color: 'bg-secondary/20',
  },
  {
    name: 'Mid-Market',
    href: '/verticals/mid-market',
    icon: Building,
    color: 'bg-accent/20',
  },
];

const upcomingWebinars = [
  {
    title: 'Best Practices for n8n Workflow Automation',
    presenter: 'Ravish Kamath',
    date: 'June 1st, 2025',
    time: '11:00 AM PST',
    icon: Bot
  },
  {
    title: 'AI in Sales Enablement: From Coaching to Content Creation',
    presenter: 'Ravish Kamath',
    date: 'June 15th, 2025',
    time: '10:00 AM PST',
    icon: Bot
  },
  {
    title: 'AI Use Cases in Marketing and Creative Services',
    presenter: 'Darshan Karthik',
    date: 'June 30th, 2025',
    time: '11:00 AM PST',
    icon: Bot
  }
];

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState(0);
  
  return (
    <div>
      <SEOHead
        title="GigaRev | AI-First Consulting & Build Studio"
        description="Transform your business with AI implementation, development, and revenue optimization services. Expert consulting for enterprise AI adoption and digital transformation."
        keywords="AI consulting, AI implementation, enterprise AI, digital transformation, revenue optimization, AI development, machine learning, business automation"
        ogUrl="/"
      />
      
      <HeroSection />
      
      {/* Services section */}
      <section id="services" className="section-padding bg-background noise-overlay">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-red-500 mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We help businesses implement AI, slash costs, and accelerate revenue with our comprehensive suite of services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard service={aiImplementationService} />
            <ServiceCard service={developmentService} />
            <ServiceCard service={revenueService} />
          </div>
        </div>
      </section>

      {/* Tech Services Hub */}
      <section id="tech-services" className="section-padding bg-gradient-to-b from-background to-background/80 noise-overlay">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-red-500 mb-4">
              Tech Services Hub
            </h2>
            <p className="text-muted-foreground">
              Cutting-edge technical solutions to power your AI transformation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techSubServices.map((service, index) => (
              <Button
                key={service.title}
                variant={activeTechTab === index ? "default" : "outline"}
                onClick={() => setActiveTechTab(index)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all",
                  activeTechTab === index ? "bg-[#E94E3D] hover:bg-[#E94E3D]/90" : "border-border hover:border-primary/50"
                )}
              >
                <service.icon className="h-4 w-4 mr-2" />
                {service.title}
              </Button>
            ))}
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
            {techSubServices.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "p-8 transition-all duration-300",
                  activeTechTab === index ? "block" : "hidden"
                )}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-sora font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[...Array(4)].map((_, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                          <span>
                            {index === 0 && i === 0 && "Rapid MVP development in 2-4 weeks"}
                            {index === 0 && i === 1 && "Interactive prototypes for validation"}
                            {index === 0 && i === 2 && "Technical feasibility assessment"}
                            {index === 0 && i === 3 && "Iterative refinement process"}
                            
                            {index === 1 && i === 0 && "Custom LLM model fine-tuning"}
                            {index === 1 && i === 1 && "RAG system implementation"}
                            {index === 1 && i === 2 && "API & webhook integration"}
                            {index === 1 && i === 3 && "Secure deployment & monitoring"}
                            
                            {index === 2 && i === 0 && "Full-stack application development"}
                            {index === 2 && i === 1 && "Scalable cloud architecture"}
                            {index === 2 && i === 2 && "AI/ML pipeline integration"}
                            {index === 2 && i === 3 && "Performance optimization"}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="pill-button bg-[#E94E3D] hover:bg-[#E94E3D]/90 text-accent-foreground"
                      asChild
                    >
                      <Link to={techSubServices[activeTechTab].link}>
                        <span>Learn More</span>
                        <ArrowRight className="button-icon h-4 w-4 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border h-full">
                    <div className="text-lg font-medium mb-4 font-sora text-center pb-4 border-b border-border">
                      {index === 0 ? 'Development Metrics' : index === 1 ? 'AI Implementation' : 'Tech Stack'}
                    </div>
                    
                    <div className="space-y-6 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Time to MVP' : index === 1 ? 'Model Accuracy' : 'Code Quality'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          {index === 0 ? '2-4 Weeks' : index === 1 ? '95%+' : '98%'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Cost Savings' : index === 1 ? 'Response Time' : 'Test Coverage'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          {index === 0 ? '60%' : index === 1 ? '<100ms' : '90%+'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Success Rate' : index === 1 ? 'Training Time' : 'Performance'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          {index === 0 ? '92%' : index === 1 ? '24-48h' : '99.9%'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Client Satisfaction' : index === 1 ? 'Cost Reduction' : 'Uptime'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          {index === 0 ? '4.8/5' : index === 1 ? '40%+' : '99.99%'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Revenue Services Hub */}
      <section id="revenue-services" className="section-padding bg-gradient-to-b from-background to-background/80 noise-overlay">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-red-500 mb-4">
              Revenue Services Hub
            </h2>
            <p className="text-muted-foreground">
              AI-powered solutions to optimize every stage of your customer journey.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {revenueSubServices.map((service, index) => (
              <Button
                key={service.title}
                variant={activeTab === index ? "default" : "outline"}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all",
                  activeTab === index ? "bg-[#E94E3D] hover:bg-[#E94E3D]/90" : "border-border hover:border-primary/50"
                )}
              >
                <service.icon className="h-4 w-4 mr-2" />
                {service.title}
              </Button>
            ))}
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
            {revenueSubServices.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "p-8 transition-all duration-300",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-sora font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[...Array(4)].map((_, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                          <span>
                            {index === 0 && i === 0 && "AI role-play coaching for pitch perfection"}
                            {index === 0 && i === 1 && "Automated lead scoring and prioritization"}
                            {index === 0 && i === 2 && "Deal intelligence and competitive insights"}
                            {index === 0 && i === 3 && "Smart follow-ups and conversation analytics"}
                            
                            {index === 1 && i === 0 && "AI-generated content across formats"}
                            {index === 1 && i === 1 && "Audience targeting and segmentation"}
                            {index === 1 && i === 2 && "Campaign optimization and A/B testing"}
                            {index === 1 && i === 3 && "ROI tracking and attribution"}
                            
                            {index === 2 && i === 0 && "24/7 intelligent customer support"}
                            {index === 2 && i === 1 && "Sentiment analysis and issue prediction"}
                            {index === 2 && i === 2 && "Automated ticket routing and resolution"}
                            {index === 2 && i === 3 && "Knowledge base enhancement and optimization"}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="pill-button bg-[#E94E3D] hover:bg-[#E94E3D]/90 text-accent-foreground"
                      asChild
                    >
                      <Link to={revenueSubServices[activeTab].link}>
                        <span>Learn More</span>
                        <ArrowRight className="button-icon h-4 w-4 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border h-full">
                    <div className="text-lg font-medium mb-4 font-sora text-center pb-4 border-b border-border">
                      {index === 0 ? 'Sales KPI Impact' : index === 1 ? 'Marketing Performance' : 'Support Metrics'}
                    </div>
                    
                    <div className="space-y-6 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Win Rate' : index === 1 ? 'Campaign ROI' : 'Issue Resolution'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          +{index === 0 ? '24' : index === 1 ? '42' : '65'}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Sales Cycle' : index === 1 ? 'Content Creation Speed' : 'Response Time'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          -{index === 0 ? '31' : index === 1 ? '75' : '89'}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Deal Size' : index === 1 ? 'Lead Quality' : 'CSAT Score'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          +{index === 0 ? '17' : index === 1 ? '38' : '27'}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? 'Sales Productivity' : index === 1 ? 'Conversion Rate' : 'Cost Reduction'}
                        </span>
                        <span className="text-lg font-medium text-accent">
                          +{index === 0 ? '40' : index === 1 ? '32' : '53'}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries section */}
      <section id="industries" className="section-padding bg-gradient-to-b from-background/80 to-background noise-overlay">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-red-500 mb-4">
              Domain Expertise
            </h2>
            <p className="text-muted-foreground">
              We specialize in these industries with deep domain knowledge and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesServed.map((industry) => (
              <Link
                key={industry.name}
                to={industry.href}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all cursor-pointer group"
              >
                <div className={cn(
                  "mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4",
                  industry.color
                )}>
                  <industry.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-medium font-sora group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
              Upcoming Webinars
            </h2>
            <p className="text-muted-foreground">
              Join our expert-led sessions on AI implementation and business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {upcomingWebinars.map((webinar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <webinar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm text-primary">{webinar.presenter}</div>
                </div>

                <h3 className="text-lg font-sora font-medium mb-4 group-hover:text-accent transition-colors">
                  {webinar.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.time}</span>
                  </div>
                </div>

                <Button 
                  className="w-full pill-button bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/webinars">
                    <span>Register Now</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="pill-button"
              asChild
            >
              <Link to="/webinars">
                <span>View All Webinars</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary/5 noise-overlay">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Ready to revolutionize your business with AI?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free 30-minute strategy call to discover how GigaRev can help you implement AI, slash costs, and accelerate revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="pill-button bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="button-icon h-4 w-4 transition-transform duration-200" />
                </Button>
                <Button 
                  variant="outline"
                  className="pill-button border-accent/30 hover:border-accent/60"
                  size="lg"
                >
                  <Play className="h-4 w-4 mr-2" />
                  <span>Watch 90-sec Overview</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-sora font-medium">
                Trusted by innovative companies
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { name: 'Notion', icon: Building2 },
                { name: 'Accuras', icon: Award },
                { name: 'Chipr', icon: Building2 },
                { name: 'Recoup', icon: Award },
                { name: 'Instabloom', icon: Building2 }
              ].map((company, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-2 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <company.icon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-muted-foreground font-medium">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
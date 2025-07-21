
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Code, 
  TrendingUp, 
  Zap, 
  Users, 
  ArrowRight,
  Building,
  Factory,
  Smartphone,
  Globe,
  CheckCircle,
  Calendar,
  Play,
  BarChart,
  Target,
  Shield
} from 'lucide-react';

const Index = () => {
  // Main services with flip cards
  const services = [
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Custom AI solutions that integrate seamlessly with your existing workflow.',
      features: ['Custom AI models', 'Workflow automation', 'Performance optimization'],
      href: '/services/ai-implementation',
      gradient: 'from-electric-indigo to-cerulean-glow'
    },
    {
      icon: Code,
      title: 'Development Services', 
      description: 'End-to-end development with modern technologies and best practices.',
      features: ['Modern tech stack', 'Scalable architecture', 'CI/CD pipelines'],
      href: '/services/full-stack-development',
      gradient: 'from-cerulean-glow to-signal-lime'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Services',
      description: 'AI-powered solutions to accelerate your revenue growth and optimization.',
      features: ['Sales automation', 'Marketing AI', 'Support optimization'],
      href: '/services/sales-ai',
      gradient: 'from-signal-lime to-electric-indigo'
    }
  ];

  // Tech Services Hub
  const techServices = [
    {
      title: 'Rapid Prototyping',
      description: 'Fast MVP development with user feedback integration',
      metrics: { label: 'Development Speed', value: '5x Faster' },
      features: ['React/Next.js', 'Node.js APIs', 'Real-time features', 'User testing'],
      techStack: ['TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel']
    },
    {
      title: 'AI Implementation',
      description: 'Custom AI solutions for your specific use case',
      metrics: { label: 'Performance Boost', value: '300% ROI' },
      features: ['OpenAI integration', 'Custom models', 'Vector databases', 'RAG systems'],
      techStack: ['Python', 'LangChain', 'Pinecone', 'OpenAI API']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications with modern tech stack',
      metrics: { label: 'Delivery Time', value: '60% Faster' },
      features: ['TypeScript', 'Serverless', 'Database design', 'Performance optimization'],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    }
  ];

  // Revenue Services Hub
  const revenueServices = [
    {
      title: 'Sales AI',
      description: 'Automate and accelerate your sales processes',
      kpiImpact: { metric: 'Conversion Rate', increase: '+45%' },
      features: ['Lead qualification', 'Pipeline automation', 'Predictive analytics', 'CRM integration']
    },
    {
      title: 'Marketing AI',
      description: 'Intelligent marketing automation and optimization',
      kpiImpact: { metric: 'Engagement', increase: '+200%' },
      features: ['Content generation', 'A/B testing', 'Customer segmentation', 'Campaign optimization']
    },
    {
      title: 'Customer Support AI',
      description: '24/7 intelligent customer support automation',
      kpiImpact: { metric: 'Satisfaction', increase: '90%' },
      features: ['Chatbots', 'Ticket routing', 'Knowledge base', 'Sentiment analysis']
    }
  ];

  const industries = [
    { icon: Building, title: 'Field Sales', count: '50+ companies', href: '/verticals/field-sales' },
    { icon: Globe, title: 'AdTech', count: '30+ platforms', href: '/verticals/adtech' },
    { icon: TrendingUp, title: 'MarTech', count: '40+ solutions', href: '/verticals/martech' },
    { icon: Smartphone, title: 'Telecom/Fibre', count: '20+ providers', href: '/verticals/telecom' },
    { icon: Code, title: 'Tech SMB', count: '100+ startups', href: '/verticals/tech-smb' },
    { icon: Factory, title: 'Mid-Market', count: '25+ enterprises', href: '/verticals/mid-market' }
  ];

  const webinars = [
    {
      title: 'AI Implementation for SMBs',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      description: 'Learn how to implement AI in your business without breaking the budget.',
      attendees: 150
    },
    {
      title: 'Revenue Acceleration with AI',
      date: 'Dec 22, 2024',
      time: '3:00 PM EST',
      description: 'Discover proven strategies to boost revenue using AI automation.',
      attendees: 200
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section with Flip Cards */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-lg text-neutral-light/70 max-w-3xl mx-auto">
              We specialize in three key areas that drive business transformation and growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-flip h-80"
              >
                <div className="card-flip-inner">
                  {/* Front */}
                  <Card className="card-flip-front glass h-full flex flex-col justify-center items-center text-center p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-sora text-neutral-light mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-neutral-light/70">{service.description}</CardDescription>
                  </Card>

                  {/* Back */}
                  <Card className="card-flip-back glass h-full p-6 flex flex-col">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-sora text-neutral-light">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 p-0">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-signal-lime" />
                            <span className="text-sm text-neutral-light/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full mt-auto">
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Services Hub */}
      <section className="section-padding angled-divider">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              <span className="gradient-text">Tech Services</span> Hub
            </h2>
            <p className="text-lg text-neutral-light/70 max-w-3xl mx-auto">
              Cutting-edge technology solutions for modern businesses
            </p>
          </motion.div>

          <Tabs defaultValue="prototyping" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-card/50">
              <TabsTrigger value="prototyping" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">
                Rapid Prototyping
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">
                AI Implementation
              </TabsTrigger>
              <TabsTrigger value="fullstack" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">
                Full-Stack Dev
              </TabsTrigger>
            </TabsList>

            {techServices.map((service, index) => (
              <TabsContent key={service.title} value={index === 0 ? 'prototyping' : index === 1 ? 'ai' : 'fullstack'}>
                <div className="grid lg:grid-cols-3 gap-8 mt-8">
                  <div className="lg:col-span-2">
                    <Card className="glass h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-sora text-neutral-light">{service.title}</CardTitle>
                        <CardDescription className="text-base text-neutral-light/70">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {service.features.map((feature) => (
                            <div key={feature} className="text-center p-3 bg-card/30 rounded-lg">
                              <div className="font-medium text-sm text-neutral-light">{feature}</div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {service.techStack.map((tech) => (
                            <div key={tech} className="text-center p-2 bg-electric-indigo/20 rounded text-xs font-medium text-electric-indigo">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="glass p-6 text-center">
                      <div className="text-sm text-neutral-light/60 mb-2">{service.metrics.label}</div>
                      <div className="text-3xl font-bold gradient-text">{service.metrics.value}</div>
                      <div className="text-xs text-neutral-light/60 mt-1">average improvement</div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Revenue Services Hub */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              <span className="gradient-text">Revenue Services</span> Hub
            </h2>
            <p className="text-lg text-neutral-light/70 max-w-3xl mx-auto">
              AI-powered solutions to accelerate your revenue growth
            </p>
          </motion.div>

          <Tabs defaultValue="sales" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-card/50">
              <TabsTrigger value="sales" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">Sales AI</TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">Marketing AI</TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-electric-indigo data-[state=active]:text-white">Support AI</TabsTrigger>
            </TabsList>

            {revenueServices.map((service, index) => (
              <TabsContent key={service.title} value={index === 0 ? 'sales' : index === 1 ? 'marketing' : 'support'}>
                <div className="grid lg:grid-cols-3 gap-8 mt-8">
                  <div className="lg:col-span-2">
                    <Card className="glass h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-sora text-neutral-light">{service.title}</CardTitle>
                        <CardDescription className="text-base text-neutral-light/70">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.map((feature) => (
                            <div key={feature} className="text-center p-3 bg-card/30 rounded-lg">
                              <div className="font-medium text-sm text-neutral-light">{feature}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="glass p-6 text-center">
                      <div className="text-sm text-neutral-light/60 mb-2">KPI Impact</div>
                      <div className="text-2xl font-bold gradient-text">{service.kpiImpact.increase}</div>
                      <div className="text-xs text-neutral-light/60 mt-1">{service.kpiImpact.metric}</div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding angled-divider">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-lg text-neutral-light/70 max-w-3xl mx-auto">
              Specialized solutions for various industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={industry.href}>
                  <Card className="text-center glass hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <industry.icon className="w-12 h-12 mx-auto mb-4 text-electric-indigo group-hover:scale-110 transition-transform" />
                      <h3 className="font-sora font-semibold mb-2 text-neutral-light">{industry.title}</h3>
                      <p className="text-sm text-neutral-light/60">{industry.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              Upcoming <span className="gradient-text">Webinars</span>
            </h2>
            <p className="text-lg text-neutral-light/70 max-w-3xl mx-auto">
              Join our expert-led sessions and learn about AI implementation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-sora mb-2 text-neutral-light">{webinar.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-neutral-light/60">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-electric-indigo">{webinar.attendees}</div>
                        <div className="text-xs text-neutral-light/60">registered</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-light/70 mb-4">{webinar.description}</p>
                    <Button asChild className="w-full bg-gradient-to-r from-electric-indigo to-cerulean-glow">
                      <Link to="/webinars">
                        <Play className="w-4 h-4 mr-2" />
                        Register Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6 text-neutral-light">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-neutral-light/70 mb-8">
              Join 200+ SMBs that have accelerated their growth with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="pill-button">
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

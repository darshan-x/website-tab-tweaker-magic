
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
  Play
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Rapid Prototyping',
      description: 'From idea to MVP in weeks, not months. Validate your concepts with working prototypes.',
      features: ['48-hour proof of concepts', 'User feedback integration', 'Scalable architecture'],
      href: '/services/rapid-prototyping'
    },
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Custom AI solutions that integrate seamlessly with your existing workflow.',
      features: ['Custom AI models', 'Workflow automation', 'Performance optimization'],
      href: '/services/ai-implementation'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end development with modern technologies and best practices.',
      features: ['Modern tech stack', 'Scalable architecture', 'CI/CD pipelines'],
      href: '/services/full-stack-development'
    }
  ];

  const techServices = [
    {
      title: 'Rapid Prototyping',
      description: 'Fast MVP development with user feedback integration',
      metrics: '48hr turnaround',
      features: ['React/Next.js', 'Node.js APIs', 'Real-time features', 'User testing']
    },
    {
      title: 'AI Implementation',
      description: 'Custom AI solutions for your specific use case',
      metrics: '300% ROI avg',
      features: ['OpenAI integration', 'Custom models', 'Vector databases', 'RAG systems']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications with modern tech stack',
      metrics: '60% faster delivery',
      features: ['TypeScript', 'Serverless', 'Database design', 'Performance optimization']
    }
  ];

  const revenueServices = [
    {
      title: 'Sales AI',
      description: 'Automate and accelerate your sales processes',
      metrics: '+45% conversion',
      features: ['Lead qualification', 'Pipeline automation', 'Predictive analytics', 'CRM integration']
    },
    {
      title: 'Marketing AI',
      description: 'Intelligent marketing automation and optimization',
      metrics: '+200% engagement',
      features: ['Content generation', 'A/B testing', 'Customer segmentation', 'Campaign optimization']
    },
    {
      title: 'Customer Support AI',
      description: '24/7 intelligent customer support automation',
      metrics: '90% satisfaction',
      features: ['Chatbots', 'Ticket routing', 'Knowledge base', 'Sentiment analysis']
    }
  ];

  const industries = [
    { icon: Building, title: 'Field Sales', count: '50+ companies', href: '/verticals/field-sales' },
    { icon: Globe, title: 'AdTech', count: '30+ platforms', href: '/verticals/adtech' },
    { icon: TrendingUp, title: 'MarTech', count: '40+ solutions', href: '/verticals/martech' },
    { icon: Smartphone, title: 'Telecom', count: '20+ providers', href: '/verticals/telecom' },
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

      {/* Services Section */}
      <section className="section-padding bg-neutral-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
              >
                <Card className="h-full glass hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-indigo to-cerulean-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-sora">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-signal-lime" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Services Hub */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              <span className="gradient-text">Tech Services</span> Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology solutions for modern businesses
            </p>
          </motion.div>

          <Tabs defaultValue="prototyping" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="prototyping">Rapid Prototyping</TabsTrigger>
              <TabsTrigger value="ai">AI Implementation</TabsTrigger>
              <TabsTrigger value="fullstack">Full-Stack Dev</TabsTrigger>
            </TabsList>

            {techServices.map((service, index) => (
              <TabsContent key={service.title} value={index === 0 ? 'prototyping' : index === 1 ? 'ai' : 'fullstack'}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-sora">{service.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{service.metrics}</div>
                        <div className="text-sm text-muted-foreground">average improvement</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="font-medium text-sm">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Revenue Services Hub */}
      <section className="section-padding bg-neutral-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              <span className="gradient-text">Revenue Services</span> Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI-powered solutions to accelerate your revenue growth
            </p>
          </motion.div>

          <Tabs defaultValue="sales" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sales">Sales AI</TabsTrigger>
              <TabsTrigger value="marketing">Marketing AI</TabsTrigger>
              <TabsTrigger value="support">Support AI</TabsTrigger>
            </TabsList>

            {revenueServices.map((service, index) => (
              <TabsContent key={service.title} value={index === 0 ? 'sales' : index === 1 ? 'marketing' : 'support'}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-sora">{service.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{service.metrics}</div>
                        <div className="text-sm text-muted-foreground">typical results</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="font-medium text-sm">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <Card className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <industry.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="font-sora font-semibold mb-2">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="section-padding bg-neutral-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              Upcoming <span className="gradient-text">Webinars</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                        <CardTitle className="text-xl font-sora mb-2">{webinar.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{webinar.attendees}</div>
                        <div className="text-xs text-muted-foreground">registered</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{webinar.description}</p>
                    <Button asChild className="w-full">
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
            <h2 className="text-3xl lg:text-5xl font-sora font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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

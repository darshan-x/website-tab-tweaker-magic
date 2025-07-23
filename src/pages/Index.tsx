
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import SpecialOfferBanner from '@/components/shared/SpecialOfferBanner';
import HeroSection from '@/components/sections/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import ServicesSection from '@/components/sections/ServicesSection';
import ServiceHubTabs from '@/components/shared/ServiceHubTabs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WebinarsSection from '@/components/sections/WebinarsSection';
import FooterCTA from '@/components/shared/FooterCTA';
import TrustLogos from '@/components/shared/TrustLogos';
import Footer from '@/components/layout/Footer';
import AIChatbot from '@/components/shared/AIChatbot';

export default function Index() {
  // Tech Services Hub Data
  const techServices = [
    {
      title: 'Rapid Prototyping',
      description: 'From concept to MVP in weeks, not months. Fast iteration and validation.',
      features: ['MVP in 8-12 weeks', 'Rapid iteration cycles', 'Market validation'],
      link: '/services/rapid-prototyping'
    },
    {
      title: 'AI Implementation',
      description: 'Custom AI solutions built on cutting-edge models with seamless integration.',
      features: ['Model selection & fine-tuning', 'Real-time inference < 100ms', 'Secure deployment'],
      link: '/services/ai-implementation'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development of AI-powered applications with scalable architecture.',
      features: ['Full-stack application development', 'Scalable cloud architecture', 'AI/ML pipeline integration'],
      link: '/services/full-stack-dev'
    }
  ];

  const techMetrics = [
    { label: 'Code Quality', value: '98%' },
    { label: 'Test Coverage', value: '90%+' },
    { label: 'Performance', value: '99.9%' },
    { label: 'Uptime', value: '99.99%' }
  ];

  // Revenue Services Hub Data
  const revenueServices = [
    {
      title: 'Sales AI',
      description: 'AI-powered sales enablement, coaching, and automation to accelerate pipeline and close deals faster.',
      features: [
        'AI role-play coaching for pitch perfection',
        'Automated lead scoring and prioritization', 
        'Deal intelligence and competitive insights',
        'Smart follow-ups and conversation analytics'
      ],
      link: '/services/sales-ai'
    },
    {
      title: 'Marketing AI',
      description: 'Intelligent marketing automation that personalizes customer experiences at scale.',
      features: ['Personalized campaigns', 'Content generation', 'Audience targeting'],
      link: '/services/marketing-ai'
    },
    {
      title: 'Customer Support AI',
      description: '24/7 intelligent support that resolves issues and delights customers.',
      features: ['24/7 automated responses', 'Intelligent routing', 'Sentiment analysis'],
      link: '/services/customer-support-ai'
    }
  ];

  const salesMetrics = [
    { label: 'Win Rate', value: '+24%' },
    { label: 'Sales Cycle', value: '-31%' },
    { label: 'Deal Size', value: '+17%' },
    { label: 'Sales Productivity', value: '+40%' }
  ];

  return (
    <div className="min-h-screen">
      <SpecialOfferBanner />
      <Navbar />
      <HeroSection />
      
      {/* Key Metrics Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">40%+</div>
                <div className="text-lg font-medium text-foreground mb-2">Cost Reduction</div>
                <div className="text-sm text-muted-foreground">Average cost savings through AI automation</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">2-6 Weeks</div>
                <div className="text-lg font-medium text-foreground mb-2">Implementation Time</div>
                <div className="text-sm text-muted-foreground">From strategy to deployment</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
                <div className="text-lg font-medium text-foreground mb-2">ROI (First Year)</div>
                <div className="text-sm text-muted-foreground">Return on AI investment</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      <ServiceHubTabs
        techServices={techServices}
        revenueServices={revenueServices}
        techMetrics={techMetrics}
        salesMetrics={salesMetrics}
      />

      <IndustriesSection />
      <WebinarsSection />
      <NewsletterCTA />
      <FooterCTA />
      <TrustLogos />
      <Footer />
      <AIChatbot />
    </div>
  );
}

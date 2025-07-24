
import React from 'react';
import { Brain, Code, TrendingUp } from 'lucide-react';
import ServiceBlock from '@/components/shared/ServiceBlock';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Implementation',
      bullets: [
        'Model selection & fine-tuning',
        'Real-time inference < 100ms',
        'Secure deployment & monitoring',
        'Compliance & guard-rails'
      ],
      hoverContent: {
        title: 'AI Implementation',
        description: 'Custom AI solutions architected, fine-tuned, and embedded into your existing tech stack with zero workflow disruption. From model selection to production deployment, we handle the entire implementation lifecycle.',
        benefits: [
          'Model accuracy ≥ 95%',
          'Response time < 100ms',
          'Cost reduction > 40%'
        ]
      },
      link: '/services/ai-implementation'
    },
    {
      icon: Code,
      title: 'Development Services',
      bullets: [
        'MVP in 8-12 weeks',
        'Microservices architecture',
        'Cloud-native deployment',
        'Performance optimization'
      ],
      hoverContent: {
        title: 'Development Services',
        description: 'End-to-end product engineering—from UI wireframe to auto-scaling production clusters—delivered by a single, cross-functional pod. We transform ideas into production-ready systems in one quarter.',
        benefits: [
          'MVP in 8-12 weeks',
          '70%+ process automation',
          '98/100 security score'
        ]
      },
      link: '/services/full-stack-dev'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Services',
      bullets: [
        'AI sales coaching & automation',
        'Real-time deal intelligence',
        'Conversation analytics',
        'Revenue optimization'
      ],
      hoverContent: {
        title: 'Revenue Services',
        description: 'Comprehensive AI solutions for modern sales teams - from prospecting to closing and analytics. Our AI-powered stacks help increase win rates, reduce sales cycles, and boost productivity.',
        benefits: [
          'Win rate +24%',
          'Sales cycle -31%',
          'Productivity +40%'
        ]
      },
      link: '/services/sales-ai'
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-sora font-extrabold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We help businesses implement AI, slash costs, and accelerate revenue with our comprehensive suite of services.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceBlock key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

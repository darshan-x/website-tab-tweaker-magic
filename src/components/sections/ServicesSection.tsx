
import React from 'react';
import ServiceBlock from '@/components/shared/ServiceBlock';

const ServicesSection = () => {
  const services = [
    {
      title: 'AI Implementation',
      description: 'Custom AI solutions built on cutting-edge models with seamless integration.',
      bullets: [
        'Model selection & fine-tuning',
        'Real-time inference < 100ms',
        'Secure deployment & monitoring',
        'Compliance & guard-rails'
      ],
      expandedDescription: 'Custom AI solutions architected, fine-tuned, and embedded into your existing tech stack with zero workflow disruption. From model selection to production deployment, we handle the entire implementation lifecycle.',
      benefits: [
        'Model accuracy ≥ 95%',
        'Response time < 100ms',
        'Cost reduction > 40%'
      ],
      link: '/services/ai-implementation'
    },
    {
      title: 'Development Services',
      description: 'End-to-end product engineering delivered by cross-functional pods.',
      bullets: [
        'MVP in 8-12 weeks',
        'Microservices architecture',
        'Cloud-native deployment',
        'Performance optimization'
      ],
      expandedDescription: 'End-to-end product engineering—from UI wireframe to auto-scaling production clusters—delivered by a single, cross-functional pod. We transform ideas into production-ready systems in one quarter.',
      benefits: [
        'MVP in 8-12 weeks',
        '70%+ process automation',
        '98/100 security score'
      ],
      link: '/services/full-stack-dev'
    },
    {
      title: 'Revenue Services',
      description: 'AI-powered solutions for sales, marketing, and customer success.',
      bullets: [
        'AI sales coaching & automation',
        'Real-time deal intelligence',
        'Conversation analytics',
        'Revenue optimization'
      ],
      expandedDescription: 'Comprehensive AI solutions for modern sales teams - from prospecting to closing and analytics. Our AI-powered stacks help increase win rates, reduce sales cycles, and boost productivity.',
      benefits: [
        'Win rate +24%',
        'Sales cycle -31%',
        'Productivity +40%'
      ],
      link: '/services/sales-ai'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-10 md:px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-semibold text-5xl md:text-4xl sm:text-3xl text-[#FF4444] mb-4 leading-[1.2] tracking-[-0.01em]">
            Our Services
          </h2>
          <p className="font-sora text-lg md:text-base sm:text-sm text-[#5A5A5A] leading-[1.6] max-w-[700px] mx-auto">
            We help businesses implement AI, slash costs, and accelerate revenue with our comprehensive suite of services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className={index === 2 ? "lg:col-span-2 lg:max-w-md lg:mx-auto" : ""}>
              <ServiceBlock {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

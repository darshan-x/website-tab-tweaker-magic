
import React from 'react';
import { 
  Brain, 
  Code, 
  Zap, 
  TrendingUp, 
  Target, 
  Headphones 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Custom AI solutions with seamless integration into your existing workflows and systems.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end product engineering from concept to deployment with modern technologies.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'From concept to MVP in weeks, not months. Fast iteration and validation.'
    },
    {
      icon: TrendingUp,
      title: 'Sales AI',
      description: 'AI-powered sales enablement tools that help your team close more deals faster.'
    },
    {
      icon: Target,
      title: 'Marketing AI',
      description: 'Intelligent marketing automation that personalizes customer experiences at scale.'
    },
    {
      icon: Headphones,
      title: 'Customer Support AI',
      description: '24/7 intelligent support that resolves issues and delights customers.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build AI solutions that solve real business problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className="w-8 h-8 text-[#FF4444]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

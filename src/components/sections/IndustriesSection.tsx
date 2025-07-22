
import React from 'react';
import { 
  Building, 
  Globe, 
  TrendingUp, 
  Smartphone, 
  Code, 
  Factory 
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Field Sales', icon: Building },
    { name: 'AdTech', icon: Globe },
    { name: 'MarTech', icon: TrendingUp },
    { name: 'Telecom/Fibre', icon: Smartphone },
    { name: 'Tech SMB', icon: Code },
    { name: 'Mid-Market', icon: Factory }
  ];

  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sora font-bold text-foreground mb-4">
            Domain Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep industry knowledge across key verticals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="service-card text-center p-6 bg-background-alt rounded-lg border border-border"
            >
              <industry.icon className="w-12 h-12 text-[#FF4444] mx-auto mb-4" />
              <h3 className="service-title font-medium text-foreground">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

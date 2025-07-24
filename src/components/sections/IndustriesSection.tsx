
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-extrabold text-foreground mb-4">
            Domain Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep industry knowledge across key verticals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-4">
              <industry.icon className="w-8 h-8 text-[#FF4444] mx-auto mb-3" />
              <h3 className="font-medium text-foreground text-sm">
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

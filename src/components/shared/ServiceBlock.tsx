import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceBlockProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bullets: string[];
  hoverContent: {
    title: string;
    description: string;
    benefits: string[];
  };
  link: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  icon: Icon,
  title,
  bullets,
  hoverContent,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <Card 
        className="px-4 py-4 cursor-pointer transition-all duration-200 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
           <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
               <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
               <ul className="space-y-1 mb-3">
                {bullets.map((bullet, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-3">Hover to learn more</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hover Content Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-background border border-border rounded-xl shadow-xl z-10 px-4 py-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">{hoverContent.title}</h3>
              <p className="text-muted-foreground mb-4">{hoverContent.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {hoverContent.benefits.map((benefit, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="red-button">
                <a href={link}>Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBlock;
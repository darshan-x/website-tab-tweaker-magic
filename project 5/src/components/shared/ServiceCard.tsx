import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Service } from '@/components/pages/HomePage';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, icon: Icon, description, features, color } = service;
  
  // Map service titles to their routes
  const getServiceRoute = (title: string) => {
    const routes: Record<string, string> = {
      'AI Implementation': '/services/ai-implementation',
      'Development Services': '/services/full-stack-development',
      'Revenue Services': '/services/sales-ai'
    };
    return routes[title] || '/';
  };

  return (
    <div className="card-flip h-[460px]">
      <div className="card-flip-inner">
        {/* Front */}
        <div className="card-flip-front h-full bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all group">
          <div className={cn(
            "h-full flex flex-col bg-gradient-to-b", 
            color
          )}>
            <div className="p-8 flex-1">
              <div className="bg-background/30 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-foreground" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-sora font-semibold mb-4">
                {title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
              
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 mt-auto border-t border-border/30 bg-background/30 backdrop-blur-sm">
              <div className="text-center">
                <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  Hover to learn more
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className="card-flip-back h-full bg-card border border-border rounded-xl p-8 flex flex-col">
          <h3 className="text-xl md:text-2xl font-sora font-semibold mb-6 text-center">
            {title}
          </h3>
          
          <div className="space-y-6 flex-1">
            <p className="text-muted-foreground">
              {title === 'AI Implementation' && (
                "Custom AI solutions architected, fine-tuned, and embedded into your existing tech stack with zero workflow disruption. From model selection to production deployment, we handle the entire implementation lifecycle."
              )}
              {title === 'Development Services' && (
                "End-to-end product engineering—from UI wireframe to auto-scaling production clusters—delivered by a single, cross-functional pod. We transform ideas into production-ready systems in one quarter."
              )}
              {title === 'Revenue Services' && (
                "Comprehensive AI solutions for modern sales teams - from prospecting to closing and analytics. Our AI-powered stacks help increase win rates, reduce sales cycles, and boost productivity."
              )}
            </p>
            
            <div className="space-y-4">
              <h4 className="font-sora font-medium text-accent">Key Benefits:</h4>
              <ul className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>
                      {title === 'AI Implementation' && i === 0 && "Model accuracy ≥ 95%"}
                      {title === 'AI Implementation' && i === 1 && "Response time < 100ms"}
                      {title === 'AI Implementation' && i === 2 && "Cost reduction > 40%"}
                      
                      {title === 'Development Services' && i === 0 && "MVP in 8-12 weeks"}
                      {title === 'Development Services' && i === 1 && "70%+ process automation"}
                      {title === 'Development Services' && i === 2 && "98/100 security score"}
                      
                      {title === 'Revenue Services' && i === 0 && "Win rate +24%"}
                      {title === 'Revenue Services' && i === 1 && "Sales cycle -31%"}
                      {title === 'Revenue Services' && i === 2 && "Productivity +40%"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              className="pill-button bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              asChild
            >
              <Link to={getServiceRoute(title)}>
                <span>Learn More</span>
                <ArrowRight className="button-icon h-4 w-4 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
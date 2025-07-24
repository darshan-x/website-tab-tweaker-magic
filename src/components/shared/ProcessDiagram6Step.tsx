import React, { useEffect, useRef, useState } from 'react';
import { Target, FileText, Rocket, PieChart, ClipboardList, Settings } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  kpi: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Define Goals",
    icon: <Target className="h-6 w-6" />,
    kpi: "100% alignment",
    description: "Strategic objectives mapping"
  },
  {
    id: 2,
    title: "Business Plan",
    icon: <FileText className="h-6 w-6" />,
    kpi: "2-4 weeks",
    description: "Comprehensive roadmap creation"
  },
  {
    id: 3,
    title: "Set Action",
    icon: <Rocket className="h-6 w-6" />,
    kpi: "MVP ready",
    description: "Implementation kickoff"
  },
  {
    id: 4,
    title: "Monitor Results",
    icon: <PieChart className="h-6 w-6" />,
    kpi: "Real-time data",
    description: "Performance tracking"
  },
  {
    id: 5,
    title: "Test Process",
    icon: <ClipboardList className="h-6 w-6" />,
    kpi: "90%+ accuracy",
    description: "Quality assurance"
  },
  {
    id: 6,
    title: "Enjoy Process",
    icon: <Settings className="h-6 w-6" />,
    kpi: "3-5x ROI",
    description: "Optimized operations"
  }
];

const ProcessDiagram6Step: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps in sequence
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, index + 1]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto p-4">
      <div className="relative">
        {/* Zig-zag connecting lines */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <path 
              id="zigzag-path" 
              d="M200,100 L400,200 L600,100 L800,200 L1000,100 L1200,200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="8,4"
              opacity="0.3"
            />
          </defs>
          <use 
            href="#zigzag-path" 
            className={`transition-all duration-1000 ${
              visibleSteps.size > 1 ? 'line-path' : ''
            }`}
          />
        </svg>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={step.id}
                className={`
                  relative transform transition-all duration-500 delay-${index * 100}
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                  }
                  ${isEven ? 'lg:mt-16' : 'lg:mt-0'}
                `}
              >
                <div className="bg-card rounded-xl px-4 py-4 shadow-sm border border-stroke/10 card-hover-enhanced">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-sora font-semibold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <div className="text-primary font-medium text-sm mb-2">
                      {step.kpi}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessDiagram6Step;
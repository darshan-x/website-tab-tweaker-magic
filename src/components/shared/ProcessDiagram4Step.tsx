import React, { useEffect, useRef, useState } from 'react';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    icon: <Search className="h-5 w-5" />,
    description: "Understand your business needs"
  },
  {
    id: 2,
    title: "Strategy", 
    icon: <Target className="h-5 w-5" />,
    description: "Design custom AI solution"
  },
  {
    id: 3,
    title: "Implementation",
    icon: <Rocket className="h-5 w-5" />,
    description: "Deploy and integrate AI"
  },
  {
    id: 4,
    title: "Results",
    icon: <TrendingUp className="h-5 w-5" />,
    description: "Monitor and optimize performance"
  }
];

const ProcessDiagram4Step: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [showLines, setShowLines] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate circles with stagger
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, index + 1]));
            }, index * 150); // 0.15s stagger
          });
          
          // Show lines after circles are visible
          setTimeout(() => {
            setShowLines(true);
          }, processSteps.length * 150 + 200);
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
    <div ref={containerRef} className="w-full max-w-md mx-auto">
      <div className="relative">
        {/* SVG Process Map */}
        <svg 
          width="360" 
          height="560" 
          viewBox="0 0 360 560" 
          className="w-full h-auto"
          aria-label="GigaRev implementation process: Discovery, Strategy, Implementation, Results"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="3"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="hsl(var(--brand))" />
            </marker>
          </defs>
          
          {/* Connecting Lines */}
          {showLines && (
            <>
              <path
                d="M180,84 L180,136"
                stroke="hsl(var(--brand))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0s' }}
              />
              <path
                d="M180,224 L180,276"
                stroke="hsl(var(--brand))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0.1s' }}
              />
              <path
                d="M180,364 L180,416"
                stroke="hsl(var(--brand))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0.2s' }}
              />
            </>
          )}

          {/* Process Step Circles */}
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            const y = 60 + (index * 140);
            const isLarger = index === 1; // Strategy step larger
            const radius = isLarger ? 24 : 12;
            
            return (
              <g key={step.id}>
                <circle
                  cx="180"
                  cy={y}
                  r={radius}
                  fill={isLarger ? "hsl(var(--brand) / 0.15)" : "hsl(var(--canvas))"}
                  stroke="hsl(var(--brand))"
                  strokeWidth="2"
                  className={isVisible ? 'circle-pop' : 'opacity-0'}
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
                
                {/* Step Number */}
                <text
                  x="180"
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={`fill-current text-brand font-semibold text-sm ${isVisible ? 'circle-pop' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
                >
                  {step.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Step Labels */}
        <div className="absolute inset-0 pointer-events-none">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            const top = 84 + (index * 140);
            
            return (
              <div
                key={step.id}
                className={`absolute left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ 
                  top: `${top}px`,
                  animationDelay: `${index * 0.15 + 0.2}s`
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="text-brand mb-1">
                    {step.icon}
                  </div>
                  <h4 className="font-sora font-semibold text-sm text-foreground whitespace-nowrap">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 max-w-24 leading-tight">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessDiagram4Step;
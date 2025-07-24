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
    <div ref={containerRef} className="w-full max-w-sm mx-auto">
      <div className="relative">
        {/* SVG Process Map - Square Layout */}
        <svg 
          width="320" 
          height="320" 
          viewBox="0 0 320 320" 
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
              <path d="M0,0 L0,6 L9,3 z" fill="hsl(var(--ink))" />
            </marker>
          </defs>
          
          {/* Connecting Lines */}
          {showLines && (
            <>
              {/* Discovery to Strategy (top horizontal) */}
              <path
                d="M85,80 L235,80"
                stroke="hsl(var(--ink))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0s' }}
              />
              {/* Strategy to Implementation (right vertical) */}
              <path
                d="M240,85 L240,235"
                stroke="hsl(var(--ink))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0.1s' }}
              />
              {/* Implementation to Results (bottom horizontal) */}
              <path
                d="M235,240 L85,240"
                stroke="hsl(var(--ink))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0.2s' }}
              />
              {/* Results to Discovery (left vertical) */}
              <path
                d="M80,235 L80,85"
                stroke="hsl(var(--ink))"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="line-path"
                style={{ animationDelay: '0.3s' }}
              />
            </>
          )}

          {/* Process Step Circles */}
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            // Square positions: TL, TR, BR, BL
            const positions = [
              { x: 80, y: 80 },   // Discovery - Top Left
              { x: 240, y: 80 },  // Strategy - Top Right  
              { x: 240, y: 240 }, // Implementation - Bottom Right
              { x: 80, y: 240 }   // Results - Bottom Left
            ];
            const { x, y } = positions[index];
            
            return (
              <g key={step.id}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="hsl(var(--ink))"
                  stroke="hsl(var(--ink))"
                  strokeWidth="2"
                  className={isVisible ? 'circle-pop' : 'opacity-0'}
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Step Labels and Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            // Positions for square layout
            const positions = [
              { x: 80, y: 80, labelX: 'left-2', labelY: 'top-14' },     // Discovery - TL
              { x: 240, y: 80, labelX: 'right-2', labelY: 'top-14' },   // Strategy - TR
              { x: 240, y: 240, labelX: 'right-2', labelY: 'bottom-14' }, // Implementation - BR
              { x: 80, y: 240, labelX: 'left-2', labelY: 'bottom-14' }   // Results - BL
            ];
            const position = positions[index];
            
            return (
              <div key={step.id}>
                {/* Icon inside circle */}
                <div
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    animationDelay: `${index * 0.15 + 0.1}s`
                  }}
                >
                  <div className="w-2.5 h-2.5 flex items-center justify-center">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "h-2.5 w-2.5" })}
                  </div>
                </div>
                
                {/* Label outside circle */}
                <div
                  className={`absolute ${position.labelX} ${position.labelY} transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                >
                  <div className={`flex flex-col ${index === 1 || index === 2 ? 'items-end' : 'items-start'}`}>
                    <h3 className="font-sora font-bold text-base text-foreground whitespace-nowrap">
                      {step.title}
                    </h3>
                    <h4 className="text-sm text-muted-foreground mt-1 max-w-20 leading-tight font-medium">
                      {step.description}
                    </h4>
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

export default ProcessDiagram4Step;
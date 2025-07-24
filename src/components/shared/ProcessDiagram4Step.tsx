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
    description: ""
  },
  {
    id: 2,
    title: "Strategy", 
    icon: <Target className="h-5 w-5" />,
    description: ""
  },
  {
    id: 3,
    title: "Implementation",
    icon: <Rocket className="h-5 w-5" />,
    description: ""
  },
  {
    id: 4,
    title: "Results",
    icon: <TrendingUp className="h-5 w-5" />,
    description: ""
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
    <div ref={containerRef} className="w-full max-w-[280px] mx-auto">
      <div className="relative">
        {/* SVG Process Map - Square Layout */}
        <svg 
          width="280" 
          height="280" 
          viewBox="0 0 280 280" 
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
                d="M70,70 L210,70"
                stroke="#000000"
                strokeWidth="1.5"
                className="line-flow"
                style={{ animationDelay: '0s' }}
              />
              {/* Strategy to Implementation (right vertical) */}
              <path
                d="M210,70 L210,210"
                stroke="#000000"
                strokeWidth="1.5"
                className="line-flow"
                style={{ animationDelay: '0.5s' }}
              />
              {/* Implementation to Results (bottom horizontal) */}
              <path
                d="M210,210 L70,210"
                stroke="#000000"
                strokeWidth="1.5"
                className="line-flow"
                style={{ animationDelay: '1s' }}
              />
              {/* Results to Discovery (left vertical) */}
              <path
                d="M70,210 L70,70"
                stroke="#000000"
                strokeWidth="1.5"
                className="line-flow"
                style={{ animationDelay: '1.5s' }}
              />
            </>
          )}

          {/* Process Step Circles */}
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            // Square positions: TL, TR, BR, BL
            const positions = [
              { x: 70, y: 70 },   // Discovery - Top Left
              { x: 210, y: 70 },  // Strategy - Top Right  
              { x: 210, y: 210 }, // Implementation - Bottom Right
              { x: 70, y: 210 }   // Results - Bottom Left
            ];
            const { x, y } = positions[index];
            
            return (
              <g key={step.id}>
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#000000"
                  className={isVisible ? 'circle-pop' : 'opacity-0'}
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Step Labels */}
        <div className="absolute inset-0 pointer-events-none">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            // Positions for square layout
            const positions = [
              { x: 70, y: 70, labelX: 'left-2', labelY: 'top-12' },     // Discovery - TL
              { x: 210, y: 70, labelX: 'right-2', labelY: 'top-12' },   // Strategy - TR
              { x: 210, y: 210, labelX: 'right-2', labelY: 'bottom-12' }, // Implementation - BR
              { x: 70, y: 210, labelX: 'left-2', labelY: 'bottom-12' }   // Results - BL
            ];
            const position = positions[index];
            
            return (
              <div key={step.id}>
                {/* Label outside circle */}
                <div
                  className={`absolute ${position.labelX} ${position.labelY} transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                >
                  <div className={`flex flex-col ${index === 1 || index === 2 ? 'items-end' : 'items-start'}`}>
                    <h3 className="font-sora font-semibold text-sm text-foreground whitespace-nowrap">
                      {step.title}
                    </h3>
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
import React, { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  id: number;
  title: string;
  fullTitle: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    fullTitle: "Discovery & Analysis"
  },
  {
    id: 2,
    title: "Strategy", 
    fullTitle: "Strategy & Planning"
  },
  {
    id: 3,
    title: "Implementation",
    fullTitle: "Implementation & Optimization"
  },
  {
    id: 4,
    title: "Results",
    fullTitle: "Results & Scaling"
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
            }, index * 500); // 0.5s delay between circles
          });
          
          // Show lines after circles are visible
          setTimeout(() => {
            setShowLines(true);
          }, processSteps.length * 500 + 200);
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
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center items-center relative">
      {/* Process Flow Container */}
      <div className="relative">
        {/* SVG Vertical Process Flow */}
        <svg 
          width="90" 
          height="120" 
          viewBox="0 0 300 400" 
          className="w-auto h-auto mx-auto"
          aria-label="GigaRev implementation process: Discovery, Strategy, Implementation, Results"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="3"
              markerWidth="8"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#030303" />
            </marker>
          </defs>
          
          {/* Connecting Lines */}
          {showLines && (
            <>
              {/* Discovery to Strategy */}
              <line
                x1="40"
                y1="80"
                x2="40"
                y2="140"
                stroke="#030303"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="opacity-100"
                style={{ 
                  strokeDasharray: '2 2',
                  animation: 'draw-line 0.5s ease-in-out forwards',
                  animationDelay: '0s'
                }}
              />
              {/* Strategy to Implementation */}
              <line
                x1="40"
                y1="200"
                x2="40"
                y2="260"
                stroke="#030303"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="opacity-100"
                style={{ 
                  strokeDasharray: '2 2',
                  animation: 'draw-line 0.5s ease-in-out forwards',
                  animationDelay: '0.2s'
                }}
              />
              {/* Implementation to Results */}
              <line
                x1="40"
                y1="320"
                x2="40"
                y2="380"
                stroke="#030303"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                className="opacity-100"
                style={{ 
                  strokeDasharray: '2 2',
                  animation: 'draw-line 0.5s ease-in-out forwards',
                  animationDelay: '0.4s'
                }}
              />
            </>
          )}

          {/* Process Step Circles */}
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            const yPositions = [40, 160, 280, 400]; // Vertical positions with 60px spacing + 80px diameter
            const y = yPositions[index];
            
            return (
              <g key={step.id}>
                <circle
                  cx="40"
                  cy={y}
                  r="40"
                  fill="#030303"
                  className={isVisible ? 'opacity-100' : 'opacity-0'}
                  style={{ 
                    animation: isVisible ? 'pulse-scale 2s infinite ease-in-out' : 'none',
                    animationDelay: `${index * 0.5}s`,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
                {/* Step number inside circle */}
                <text
                  x="40"
                  y={y + 6}
                  textAnchor="middle"
                  className="fill-white font-inter font-semibold text-[16px]"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out 0.2s'
                  }}
                >
                  {step.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Step Labels positioned to the right */}
        <div className="absolute inset-0 pointer-events-none">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(step.id);
            const yPositions = [40, 160, 280, 400];
            const y = yPositions[index];
            
            return (
              <div 
                key={step.id}
                className="absolute"
                style={{ 
                  left: '96px', // 40px (circle center) + 40px (radius) + 16px (gap)
                  top: `${y - 8}px`, // Center with circle
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                  transitionDelay: `${index * 0.5 + 0.3}s`
                }}
              >
                <div className="flex flex-col">
                  <h3 className="font-inter font-medium text-[14px] text-[#030303] whitespace-nowrap">
                    {step.fullTitle}
                  </h3>
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
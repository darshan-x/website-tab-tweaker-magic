import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const valueProps = [
  'Implement AI',
  'Slash Costs',
  'Accelerate Revenue'
];

const nodes = [
  { x: 25, y: 25, size: 60, label: 'Discovery &\nAnalysis', labelPosition: 'top', delay: 0 },
  { x: 75, y: 25, size: 60, label: 'Strategy &\nPlanning', labelPosition: 'top', delay: 0.25 },
  { x: 75, y: 75, size: 60, label: 'Results &\nScaling', labelPosition: 'bottom', delay: 0.5 },
  { x: 25, y: 75, size: 60, label: 'Implementation &\nOptimization', labelPosition: 'bottom', delay: 0.75 },
];

const connections = [
  { start: 0, end: 1 },
  { start: 1, end: 2 },
  { start: 2, end: 3 },
  { start: 3, end: 0 },
];

export default function HeroSection() {
  const [activeValueProp, setActiveValueProp] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveValueProp((prev) => (prev + 1) % valueProps.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center noise-overlay">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-semibold tracking-tight">
              <span className="block">AI solutions that</span>
              <div className="h-16 md:h-20 my-2 flex justify-center lg:justify-start">
                <span 
                  className={cn(
                    "text-red-500 transition-all duration-300 block",
                    isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
                  )}
                >
                  {valueProps[activeValueProp]}.
                </span>
              </div>
            </h1>
            
            <p className="text-muted-foreground text-lg mt-6 mb-8 max-w-lg mx-auto lg:mx-0">
              We help businesses implement custom AI, develop intelligent applications, and drive revenue growth with our specialized expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="pill-button bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                asChild
              >
                <Link to="/contact">
                  <span>Talk to an AI Advisor</span>
                  <ArrowRight className="button-icon h-4 w-4 transition-transform duration-200" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="pill-button border-accent/30 hover:border-accent/60"
                size="lg"
                asChild
              >
                <Link to="/ai-use-cases">
                  <Brain className="h-4 w-4 mr-2" />
                  <span>Explore AI Use Cases</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {connections.map((connection, index) => {
                    const start = nodes[connection.start];
                    const end = nodes[connection.end];
                    return (
                      <g key={`connection-${index}`}>
                        <motion.line
                          x1={start.x}
                          y1={start.y}
                          x2={end.x}
                          y2={end.y}
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-accent/30"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            delay: start.delay,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                          }}
                        />
                        <motion.circle
                          r="1"
                          className="fill-accent"
                          initial={{ offsetDistance: "0%" }}
                          animate={{ offsetDistance: "100%" }}
                          transition={{
                            duration: 3,
                            delay: start.delay,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            offsetPath: `path("M ${start.x} ${start.y} L ${end.x} ${end.y}")`,
                          }}
                        />
                      </g>
                    );
                  })}
                  
                  {nodes.map((node, index) => (
                    <g key={`node-${index}`}>
                      <motion.text
                        x={node.x}
                        y={node.labelPosition === 'top' ? node.y - 8 : node.y + 8}
                        textAnchor="middle"
                        dominantBaseline={node.labelPosition === 'top' ? 'bottom' : 'top'}
                        className="fill-current text-[3px] font-medium pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: node.delay + 0.3 }}
                      >
                        {node.label.split('\n').map((line, i) => (
                          <tspan key={i} x={node.x} dy={i ? "1.2em" : "0"}>
                            {line}
                          </tspan>
                        ))}
                      </motion.text>
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size / 10}
                        className="fill-accent/20 stroke-accent/40 cursor-pointer"
                        strokeWidth="0.5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          y: [node.y - 1, node.y + 1, node.y - 1]
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          fill: "rgb(var(--accent) / 0.3)",
                          stroke: "rgb(var(--accent) / 0.6)"
                        }}
                        transition={{
                          scale: { duration: 0.5, delay: node.delay },
                          opacity: { duration: 0.5, delay: node.delay },
                          y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }
                        }}
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 lg:mt-28 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: 'Cost Reduction', value: '40%+' },
              { title: 'Implementation Time', value: '2-6 Weeks' },
              { title: 'ROI', value: '3-5x', period: 'First Year' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-card/50 border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all"
              >
                <div className="font-sora text-3xl md:text-4xl font-semibold text-red-500 mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.title} {stat.period && <span className="text-sm">({stat.period})</span>}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
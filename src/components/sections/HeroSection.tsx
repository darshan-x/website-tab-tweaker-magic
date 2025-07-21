
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

const valuePropositions = [
  'Implement AI',
  'Slash Costs', 
  'Accelerate Revenue'
];

const HeroSection = () => {
  const [currentProposition, setCurrentProposition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProposition((prev) => (prev + 1) % valuePropositions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: 'Cost Reduction', value: '40%+', description: 'through AI automation' },
    { number: 'Implementation Time', value: '2-6 Weeks', description: 'from start to finish' },
    { number: 'ROI', value: '3-5x', description: 'in first year' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background noise-overlay">
      {/* Background blur elements - Updated with new red theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-red/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2"
            >
              <TrendingUp className="w-4 h-4 text-primary-red" />
              <span className="text-sm font-medium text-foreground">
                Trusted by 200+ SMBs
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-sora font-bold leading-tight"
              >
                <span className="text-foreground">We Help SMBs </span>
                <motion.span
                  key={currentProposition}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text"
                >
                  {valuePropositions[currentProposition]}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Transform your business with AI implementation, rapid prototyping, and revenue acceleration. 
                From strategy to execution, we deliver results that matter.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="pill-button bg-primary-red text-white hover:bg-red-600 group">
                <Link to="/contact">
                  Talk to an AI Advisor
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="pill-button group border-border hover:bg-accent">
                <Link to="/ai-use-cases">
                  <Play className="w-5 h-5 mr-2" />
                  Explore AI Use Cases
                </Link>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-4 text-sm text-muted-foreground"
            >
              <span>Trusted by teams at:</span>
              <div className="flex items-center space-x-3">
                <span className="font-medium">Chipr</span>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span className="font-medium">Notion</span>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span className="font-medium">+200 others</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Integrated SVG Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto h-96 bg-gradient-to-br from-primary-red/10 to-red-600/10 rounded-2xl p-8 glass">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background glow effect */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                    <stop offset="25%" stopColor="#DC2626" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#991B1B" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Node positions matching Project 5 */}
                {[
                  { id: 'discovery', label: 'Discovery & Analysis', x: 100, y: 100, color: '#EF4444' },
                  { id: 'strategy', label: 'Strategy & Planning', x: 300, y: 100, color: '#DC2626' },
                  { id: 'results', label: 'Results & Scaling', x: 300, y: 300, color: '#B91C1C' },
                  { id: 'implementation', label: 'Implementation', x: 100, y: 300, color: '#991B1B' }
                ].map((node, index) => (
                  <g key={node.id}>
                    {/* Node glow */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="25"
                      fill={node.color}
                      opacity="0.3"
                      filter="url(#glow)"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        scale: { duration: 0.8, delay: index * 0.2 },
                        opacity: {
                          duration: 3,
                          delay: index * 0.3,
                          repeat: Infinity,
                          repeatType: "loop"
                        }
                      }}
                    />
                    
                    {/* Main node circle */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="18"
                      fill={node.color}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="cursor-pointer"
                      filter="url(#glow)"
                    />
                    
                    {/* Node number */}
                    <motion.text
                      x={node.x}
                      y={node.y + 6}
                      textAnchor="middle"
                      className="fill-white font-bold text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {index + 1}
                    </motion.text>
                    
                    {/* Node label */}
                    <motion.text
                      x={node.x}
                      y={node.y < 200 ? node.y + 45 : node.y - 35}
                      textAnchor="middle"
                      className="fill-foreground text-xs font-medium"
                      initial={{ opacity: 0, y: node.y < 200 ? node.y + 35 : node.y - 25 }}
                      animate={{ 
                        opacity: 1, 
                        y: node.y < 200 ? node.y + 45 : node.y - 35 
                      }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <tspan x={node.x} dy="0" className="font-semibold">
                        {node.label.split(' & ')[0]}
                      </tspan>
                      {node.label.includes(' & ') && (
                        <tspan x={node.x} dy="1.2em">
                          {'& ' + node.label.split(' & ')[1]}
                        </tspan>
                      )}
                    </motion.text>
                  </g>
                ))}

                {/* Connection lines with particle flow */}
                {[
                  { from: [100, 100], to: [300, 100] },
                  { from: [300, 100], to: [300, 300] },
                  { from: [300, 300], to: [100, 300] },
                  { from: [100, 300], to: [100, 100] }
                ].map((connection, index) => (
                  <g key={index}>
                    {/* Connection line */}
                    <motion.line
                      x1={connection.from[0]}
                      y1={connection.from[1]}
                      x2={connection.to[0]}
                      y2={connection.to[1]}
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      strokeDasharray="12 6"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{
                        duration: 3,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                      }}
                      filter="url(#glow)"
                    />
                    
                    {/* Flowing particles */}
                    <motion.circle
                      r="4"
                      fill="#EF4444"
                      filter="url(#glow)"
                      initial={{ 
                        cx: connection.from[0], 
                        cy: connection.from[1],
                        opacity: 0 
                      }}
                      animate={{ 
                        cx: connection.to[0], 
                        cy: connection.to[1],
                        opacity: [0, 1, 1, 0] 
                      }}
                      transition={{
                        duration: 2.5,
                        delay: index * 0.7,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center space-y-2 glass p-6 rounded-lg"
            >
              <div className="text-sm font-medium text-muted-foreground">{stat.number}</div>
              <div className="text-3xl lg:text-4xl font-sora font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

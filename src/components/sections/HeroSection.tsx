
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import SVGNodeAnimation from '@/components/animations/SVGNodeAnimation';

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
    { number: '300%', label: 'Average ROI Increase', description: 'for our clients' },
    { number: '45%', label: 'Cost Reduction', description: 'through automation' },
    { number: '60%', label: 'Faster Time-to-Market', description: 'with AI implementation' },
    { number: '24/7', label: 'AI-Powered Support', description: 'available always' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
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
              className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
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
              <Button asChild size="lg" className="pill-button bg-primary hover:bg-red-600 text-white group">
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="pill-button group border-border">
                <Link to="/case-studies">
                  <Play className="w-5 h-5 mr-2" />
                  View Success Stories
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

          {/* Right Content - SVG Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <SVGNodeAnimation />
            </div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-50/50 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl lg:text-4xl font-sora font-bold gradient-text">
                {stat.number}
              </div>
              <div className="font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

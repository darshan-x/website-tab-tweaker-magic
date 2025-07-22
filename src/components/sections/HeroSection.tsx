
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import SVGNodeAnimation from '@/components/animations/SVGNodeAnimation';

const rotatingTexts = [
  'Implement AI.',
  'Slash Costs.',
  'Accelerate Revenue.'
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000); // 4 seconds per rotation

    return () => clearInterval(interval);
  }, []);

  const keyMetrics = [
    { label: 'Cost Reduction', value: '40%+', description: 'through AI automation' },
    { label: 'Implementation Time', value: '2-6 Weeks', description: 'from start to finish' },
    { label: 'ROI', value: '3-5x', description: 'in first year' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-light noise-overlay">
      {/* Background blur elements - Updated with new #4A90E2 theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-blue/25 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-blue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

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
              <TrendingUp className="w-4 h-4 text-primary-blue" />
              <span className="text-sm font-medium text-foreground">
                Trusted by 200+ SMBs
              </span>
            </motion.div>

            {/* Main Headline with Rotating Text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-sora font-bold leading-tight"
              >
                <span className="text-foreground">AI solutions that </span>
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-accent-coral"
                >
                  {rotatingTexts[currentTextIndex]}
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
              <Button asChild size="lg" className="pill-button bg-cta-green hover:bg-cta-green/90 text-white group">
                <Link to="/contact">
                  Talk to an AI Advisor
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="pill-button group border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-white">
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

          {/* Right Content - SVG Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-2xl p-8 glass">
              <SVGNodeAnimation />
            </div>
          </motion.div>
        </div>

        {/* Key Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-sora font-bold text-foreground mb-2">
              Proven Results
            </h2>
            <p className="text-muted-foreground">
              Real metrics from our client implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center space-y-2 glass p-8 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                <div className="text-4xl lg:text-5xl font-sora font-bold text-accent-coral">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

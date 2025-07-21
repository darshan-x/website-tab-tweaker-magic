
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
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
    { number: 'Cost Reduction', value: '40%+', description: 'through AI automation' },
    { number: 'Implementation Time', value: '2-6 Weeks', description: 'from start to finish' },
    { number: 'ROI', value: '3-5x', description: 'in first year' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background noise-overlay">
      {/* Background blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-indigo/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cerulean-glow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-signal-lime/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

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
              <TrendingUp className="w-4 h-4 text-signal-lime" />
              <span className="text-sm font-medium text-neutral-light">
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
                <span className="text-neutral-light">We Help SMBs </span>
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
                className="text-lg lg:text-xl text-neutral-light/70 max-w-2xl leading-relaxed"
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
              <Button asChild size="lg" className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white group">
                <Link to="/contact">
                  Talk to an AI Advisor
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="pill-button group border-border">
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
              className="flex items-center space-x-4 text-sm text-neutral-light/60"
            >
              <span>Trusted by teams at:</span>
              <div className="flex items-center space-x-3">
                <span className="font-medium">Chipr</span>
                <div className="w-1 h-1 bg-neutral-light/60 rounded-full" />
                <span className="font-medium">Notion</span>
                <div className="w-1 h-1 bg-neutral-light/60 rounded-full" />
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
              <div className="text-sm font-medium text-neutral-light/60">{stat.number}</div>
              <div className="text-3xl lg:text-4xl font-sora font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-light/60">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

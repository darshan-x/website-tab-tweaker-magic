
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SVGNodeAnimation from '@/components/animations/SVGNodeAnimation';

const rotatingTexts = [
  'Implement AI.',
  'Slash Costs.',
  'Accelerate Revenue.'
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const updateText = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      setIsVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateText, 4000);
    return () => clearInterval(interval);
  }, [updateText]);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI solutions that{' '}
              <motion.span 
                className="text-coral font-sora"
                animate={{ 
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : -10
                }}
                transition={{ duration: 0.3 }}
              >
                {rotatingTexts[currentTextIndex]}
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with custom AI solutions. From rapid prototyping to full-scale implementation, we deliver results that matter.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white" asChild>
                <Link to="/contact">
                  Talk to an AI Advisor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white" asChild>
                <Link to="/ai-use-cases">
                  Explore AI Use Cases
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <SVGNodeAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

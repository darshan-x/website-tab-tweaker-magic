
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProcessDiagram4Step from '@/components/shared/ProcessDiagram4Step';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    'Implement AI.',
    'Slash Costs.',
    'Accelerate Revenue.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // 3s cycle as per spec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section-padding bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sora font-extrabold text-foreground mb-6 leading-tight">
              AI solutions that{' '}
              <span id="verb-rotator" className="hero-verb" key={currentTextIndex}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed max-w-lg">
              We help businesses implement custom AI, develop intelligent applications, and drive revenue growth with our specialized expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hover text-lg px-8 py-4 h-14 w-full sm:w-auto">
                <Link to="/contact">
                  Talk to an AI Advisor <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="btn-hover text-lg px-8 py-4 h-14 w-full sm:w-auto">
                <Link to="/ai-use-cases">
                  Explore AI Use Cases
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Process SVG */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-sm lg:max-w-md">
              <ProcessDiagram4Step />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

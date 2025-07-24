
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
    <section id="hero" className="section-padding pt-16 lg:pt-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-semibold text-foreground mb-6 leading-tight">
              AI solutions that<br />
              <span id="verb-rotator" className="hero-verb text-brand font-extrabold" key={currentTextIndex}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </h1>

            <p className="text-base lg:text-lg text-foreground/80 mb-8 leading-relaxed max-w-[560px]">
              We help businesses implement custom AI, develop intelligent applications, and drive revenue growth with our specialized expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 space-y-4 sm:space-y-0">
              <Button asChild className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full min-h-[44px] w-full sm:w-auto">
                <Link to="/contact">
                  Talk to an AI Advisor <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full min-h-[44px] w-full sm:w-auto">
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

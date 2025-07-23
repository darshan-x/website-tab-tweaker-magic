
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProcessDiagram6Step from '@/components/shared/ProcessDiagram6Step';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    'Implement AI',
    'Slash Costs', 
    'Accelerate Revenue'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500); // 3.5s loop as per design brief

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-sora font-bold text-foreground mb-6 leading-tight">
              AI solutions that{' '}
              <span className="hero-verb" key={currentTextIndex}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We help businesses implement custom AI, develop intelligent applications, and drive revenue growth with our specialized expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4 h-14">
                <Link to="/contact">
                  Talk to an AI Advisor <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-14">
                <Link to="/ai-use-cases">
                  Explore AI Use Cases
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Process Flow */}
          <div className="lg:pl-8">
            <ProcessDiagram6Step />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

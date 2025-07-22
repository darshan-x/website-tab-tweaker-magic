
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    'Automate processes',
    'Scale operations', 
    'Boost productivity'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-sora font-bold text-foreground mb-6 leading-tight">
            AI that helps you{' '}
            <span className="text-[#FF4444] inline-block">
              <span className="block h-16 overflow-hidden">
                {rotatingTexts.map((text, index) => (
                  <span
                    key={index}
                    className={`block transition-transform duration-500 ${
                      index === currentTextIndex 
                        ? 'transform translate-y-0' 
                        : 'transform translate-y-full'
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered solutions. From automation to customer support, 
            we build custom AI that actually works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="red-button text-lg px-8 py-4">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" className="red-button text-lg px-8 py-4">
              <Link to="/case-studies">
                <Play className="mr-2 w-5 h-5" />
                See Results
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by growing companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-medium">TechCorp</div>
              <div className="text-lg font-medium">GrowthCo</div>
              <div className="text-lg font-medium">ScaleUp</div>
              <div className="text-lg font-medium">Innovation Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

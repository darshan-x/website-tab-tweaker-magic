import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    }, 3500); // 3.5s cycle as per spec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="h-[85vh] md:h-[75vh] lg:h-[85vh] pt-20 px-5 lg:px-10 bg-white hero-section">
      {/* Custom container with 1200px max-width */}
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 h-full">
          {/* Left Column - Content (60%) */}
          <div className="flex flex-col justify-start pt-8">
            {/* Main Headline */}
            <div className="mb-4">
              {/* Static Text */}
              <h1 className="font-inter font-semibold text-[36px] md:text-[48px] lg:text-[64px] text-[#030303] leading-[1.1] tracking-[-0.01em] mb-0 hero-text">
                AI solutions that
              </h1>
              
              {/* Dynamic Rotating Text */}
              <div className="font-inter font-semibold text-[36px] md:text-[48px] lg:text-[64px] text-[#FF4444] leading-[1.1] tracking-[-0.01em] mb-4 hero-text">
                <span 
                  key={currentTextIndex} 
                  className="hero-verb"
                  style={{ 
                    animation: 'heroTextRotation 3.5s infinite ease-in-out',
                    animationDelay: '0s'
                  }}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="font-inter text-[11px] md:text-[13px] lg:text-[14px] text-[#5A5A5A] leading-[1.6] tracking-[-0.005em] max-w-[520px] mb-10 hero-description">
              We help businesses implement custom AI, develop intelligent applications, and drive revenue growth with our specialized expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mb-20 hero-buttons">
              {/* Primary CTA Button */}
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center font-inter font-semibold text-[16px] bg-[#2ECC71] text-white px-8 py-4 rounded-[12px] border-none min-w-[200px] h-[52px] transition-all duration-200 ease-in-out hover:bg-[#27AE60] hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              >
                Talk to an AI Advisor
              </Link>
              
              {/* Secondary CTA Button */}
              <Link 
                to="/ai-use-cases"
                className="inline-flex items-center justify-center font-inter font-semibold text-[16px] bg-transparent text-[#FF4444] px-8 py-[14px] rounded-[12px] border-2 border-[#FF4444] min-w-[200px] h-[52px] transition-all duration-200 ease-in-out hover:bg-[#FF4444] hover:text-white hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              >
                Explore AI Use Cases
              </Link>
            </div>

            {/* Metrics Cards Section */}
            <div className="bg-white border border-[#E5E5E5] rounded-[16px] p-8 w-full metrics-cards">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Metric 1 */}
                <div className="text-center flex-1">
                  <div className="font-inter font-bold text-[36px] text-[#FF4444] leading-none mb-2">40%+</div>
                  <div className="font-inter font-medium text-[14px] text-[#5A5A5A] leading-[1.4]">Cost Reduction</div>
                </div>
                
                {/* Divider 1 */}
                <div className="hidden md:block w-[1px] h-16 bg-[#E5E5E5] mx-8"></div>
                
                {/* Metric 2 */}
                <div className="text-center flex-1 mt-8 md:mt-0">
                  <div className="font-inter font-bold text-[36px] text-[#FF4444] leading-none mb-2">2-6 Weeks</div>
                  <div className="font-inter font-medium text-[14px] text-[#5A5A5A] leading-[1.4]">Implementation Time</div>
                </div>
                
                {/* Divider 2 */}
                <div className="hidden md:block w-[1px] h-16 bg-[#E5E5E5] mx-8"></div>
                
                {/* Metric 3 */}
                <div className="text-center flex-1 mt-8 md:mt-0">
                  <div className="font-inter font-bold text-[36px] text-[#FF4444] leading-none mb-2">3-5x</div>
                  <div className="font-inter font-medium text-[14px] text-[#5A5A5A] leading-[1.4]">ROI (First Year)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Process Flow Diagram (40%) */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[400px] h-[400px]">
              <ProcessDiagram4Step />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
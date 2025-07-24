import React, { useState } from 'react';

interface ServiceBlockProps {
  title: string;
  description: string;
  bullets: string[];
  expandedDescription: string;
  benefits: string[];
  link: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  description,
  bullets,
  expandedDescription,
  benefits,
  link
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="service-card bg-white rounded-xl p-8 lg:p-7 sm:p-6 border border-[#E5E5E5] shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer min-h-[280px] lg:min-h-auto relative overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleToggle}
      style={{ willChange: 'transform' }}
    >
      {/* Default Content */}
      <div className="service-card-content absolute inset-0 p-8 lg:p-7 sm:p-6">
        <h3 className="font-sora font-semibold text-[22px] lg:text-xl sm:text-lg text-[#030303] leading-[1.3] mb-3">
          {title}
        </h3>
        <p className="font-sora text-base lg:text-[15px] sm:text-sm text-[#5A5A5A] leading-[1.5] mb-5">
          {description}
        </p>
        <ul className="list-none p-0 mb-5">
          {bullets.map((bullet, index) => (
            <li key={index} className="font-sora text-sm lg:text-[13px] sm:text-xs text-[#030303] leading-[1.6] mb-1.5 relative pl-4">
              <span className="absolute left-0 top-0 text-[#FF4444] font-bold">•</span>
              {bullet}
            </li>
          ))}
        </ul>
        <p className="font-sora font-medium text-xs text-[#FF4444] absolute bottom-6 left-6 opacity-70">
          Hover to learn more
        </p>
      </div>

      {/* Expanded Content */}
      <div className="service-card-expanded absolute inset-0 p-8 lg:p-7 sm:p-6">
        <h3 className="font-sora font-semibold text-[22px] lg:text-xl sm:text-lg text-[#030303] leading-[1.3] mb-3">
          {title}
        </h3>
        <p className="font-sora text-base lg:text-[15px] sm:text-sm text-[#030303] leading-[1.6] mb-5">
          {expandedDescription}
        </p>
        <h4 className="font-sora font-semibold text-base lg:text-[15px] sm:text-sm text-[#030303] mb-3">
          Key Benefits:
        </h4>
        <ul className="list-none p-0">
          {benefits.map((benefit, index) => (
            <li key={index} className="font-sora font-medium text-sm lg:text-[13px] sm:text-xs text-[#FF4444] leading-[1.5] mb-1.5 relative pl-4">
              <span className="absolute left-0 top-0 text-[#FF4444] font-bold">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceBlock;
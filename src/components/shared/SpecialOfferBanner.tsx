import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const SpecialOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact, [id*="contact"]') || 
                          document.querySelector('a[href*="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-brand text-white py-0.5">
      <div className="container">
        <div className="flex items-center justify-center gap-2">
          <p 
            className="text-sm font-medium cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
            onClick={scrollToContact}
          >
            <span className="font-semibold">Special offer:</span> Get one AI workflow automated for free when you schedule a consultation!
            <ArrowRight className="w-4 h-4" />
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-white/80 transition-colors ml-4"
          >
            <X className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
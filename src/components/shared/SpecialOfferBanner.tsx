import React, { useState } from 'react';
import { X } from 'lucide-react';

const SpecialOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FF4444] border-b border-[#FF4444] px-4 py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-white tracking-tighter">
            <span className="font-semibold">Special offer:</span> Get one AI workflow automated for free when you schedule a consultation!
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-white/80 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
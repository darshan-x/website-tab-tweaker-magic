import React, { useState } from 'react';
import { X } from 'lucide-react';

const SpecialOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-yellow-800">
            <span className="font-semibold">Special offer:</span> Get one AI workflow automated for free when you schedule a consultation!
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-yellow-600 hover:text-yellow-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
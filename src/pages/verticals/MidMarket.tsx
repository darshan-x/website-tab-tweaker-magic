
import React from 'react';
import IndustryTemplate from '@/components/templates/IndustryTemplate';
import industriesData from '@/data/industries.json';

const MidMarket = () => {
  const industryData = industriesData['mid-market'];
  if (!industryData) return <div>Industry not found</div>;
  
  return <IndustryTemplate data={industryData} />;
};

export default MidMarket;

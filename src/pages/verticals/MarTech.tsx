
import React from 'react';
import IndustryTemplate from '@/components/templates/IndustryTemplate';
import industriesData from '@/data/industries.json';

const MarTech = () => {
  const industryData = industriesData['martech'];
  if (!industryData) return <div>Industry not found</div>;
  
  return <IndustryTemplate data={industryData} />;
};

export default MarTech;


import React from 'react';
import IndustryTemplate from '@/components/templates/IndustryTemplate';
import industriesData from '@/data/industries.json';

const AdTech = () => {
  const industryData = industriesData['adtech'];
  if (!industryData) return <div>Industry not found</div>;
  
  return <IndustryTemplate data={industryData} />;
};

export default AdTech;

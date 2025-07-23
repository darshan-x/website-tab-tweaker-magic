
import React from 'react';
import IndustryTemplate from '@/components/templates/IndustryTemplate';
import industriesData from '@/data/industries.json';

const TechSMB = () => {
  const industryData = industriesData['tech-smb'];
  if (!industryData) return <div>Industry not found</div>;
  
  return <IndustryTemplate data={industryData} />;
};

export default TechSMB;

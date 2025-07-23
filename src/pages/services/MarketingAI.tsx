
import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const MarketingAI = () => {
  const serviceData = servicesData['marketing-ai'];
  if (!serviceData) return <div>Service not found</div>;
  
  return <ServiceTemplate data={serviceData} />;
};

export default MarketingAI;

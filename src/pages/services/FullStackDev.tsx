
import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const FullStackDev = () => {
  const serviceData = servicesData['full-stack-dev'];
  if (!serviceData) return <div>Service not found</div>;
  
  return <ServiceTemplate data={serviceData} />;
};

export default FullStackDev;


import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const RapidPrototyping = () => {
  const serviceData = servicesData['rapid-prototyping'];
  if (!serviceData) return <div>Service not found</div>;
  
  return <ServiceTemplate data={serviceData} />;
};

export default RapidPrototyping;

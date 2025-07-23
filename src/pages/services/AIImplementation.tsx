
import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const AIImplementation = () => {
  return <ServiceTemplate data={servicesData['ai-implementation']} />;
};

export default AIImplementation;

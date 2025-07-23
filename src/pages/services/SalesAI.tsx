
import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const SalesAI = () => {
  return <ServiceTemplate data={servicesData['sales-ai']} />;
};

export default SalesAI;

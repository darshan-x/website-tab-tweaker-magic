
import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import servicesData from '@/data/services.json';

const CustomerSupportAI = () => {
  const serviceData = servicesData['customer-support-ai'];
  if (!serviceData) return <div>Service not found</div>;
  
  return <ServiceTemplate data={serviceData} />;
};

export default CustomerSupportAI;

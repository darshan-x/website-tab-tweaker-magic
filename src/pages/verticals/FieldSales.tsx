
import React from 'react';
import IndustryTemplate from '@/components/templates/IndustryTemplate';
import industriesData from '@/data/industries.json';

const FieldSales = () => {
  return <IndustryTemplate data={industriesData['field-sales']} />;
};

export default FieldSales;

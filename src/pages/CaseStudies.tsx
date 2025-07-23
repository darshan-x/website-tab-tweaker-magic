
import React from 'react';
import ResourceListTemplate from '@/components/templates/ResourceListTemplate';
import resourcesData from '@/data/resources.json';

const CaseStudies = () => {
  return <ResourceListTemplate data={resourcesData['case-studies']} type="case-studies" />;
};

export default CaseStudies;

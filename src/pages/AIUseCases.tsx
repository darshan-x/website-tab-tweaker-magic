
import React from 'react';
import ResourceListTemplate from '@/components/templates/ResourceListTemplate';
import resourcesData from '@/data/resources.json';

const AIUseCases = () => {
  return <ResourceListTemplate data={resourcesData['ai-use-cases']} type="ai-use-cases" />;
};

export default AIUseCases;

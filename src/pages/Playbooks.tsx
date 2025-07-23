
import React from 'react';
import ResourceListTemplate from '@/components/templates/ResourceListTemplate';
import resourcesData from '@/data/resources.json';

const Playbooks = () => {
  return <ResourceListTemplate data={resourcesData['playbooks']} type="playbooks" />;
};

export default Playbooks;

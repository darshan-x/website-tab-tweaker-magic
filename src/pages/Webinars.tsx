
import React from 'react';
import EventListTemplate from '@/components/templates/EventListTemplate';
import webinarsData from '@/data/webinars.json';

const Webinars = () => {
  // Transform webinar data to match EventListTemplate interface
  const transformedData = {
    title: "AI Implementation Webinars",
    subtitle: "Join our expert-led AI implementation sessions and learn from industry leaders",
    events: [
      ...webinarsData.upcoming.map(webinar => ({
        id: webinar.id,
        title: webinar.title,
        date: webinar.date,
        time: webinar.time,
        duration: webinar.duration,
        presenter: webinar.speaker.name,
        description: webinar.description,
        topics: webinar.tags,
        registrationLink: webinar.registrationLink,
        status: 'upcoming' as const
      })),
      ...webinarsData.past.map(webinar => ({
        id: webinar.id,
        title: webinar.title,
        date: webinar.date,
        time: webinar.time,
        duration: webinar.duration,
        presenter: webinar.speaker.name,
        description: webinar.description,
        topics: webinar.tags,
        registrationLink: webinar.recordingLink || '#',
        status: 'past' as const
      }))
    ]
  };

  return <EventListTemplate data={transformedData} />;
};

export default Webinars;

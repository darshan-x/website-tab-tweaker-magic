
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebinarsSection = () => {
  const webinars = [
    {
      title: 'AI Implementation Strategy',
      date: 'March 15, 2024',
      description: 'Learn how to successfully implement AI in your organization with our step-by-step framework.'
    },
    {
      title: 'Sales AI Best Practices',
      date: 'March 22, 2024',
      description: 'Discover how leading companies are using AI to boost their sales performance by 40%+'
    },
    {
      title: 'Customer Support Automation',
      date: 'March 29, 2024',
      description: 'Transform your customer support with AI-powered automation and 24/7 intelligent assistance.'
    }
  ];

  return (
    <section id="resources" className="section-padding bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-bold text-foreground mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our expert-led sessions on AI implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-6">
              <h3 className="text-xl font-sora font-semibold text-foreground mb-2">
                {webinar.title}
              </h3>
              
              <div className="text-sm text-muted-foreground mb-4">
                {webinar.date}
              </div>

              <p className="text-muted-foreground mb-6">
                {webinar.description}
              </p>

              <Button asChild className="w-full red-button">
                <Link to="/webinars">Register Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

const WebinarsSection = () => {
  const webinars = [
    {
      presenter: 'Ravish Kamath',
      title: 'Best Practices for n8n Workflow Automation',
      date: 'June 1st, 2025',
      time: '11:00 AM PST'
    },
    {
      presenter: 'Ravish Kamath',
      title: 'AI in Sales Enablement: From Coaching to Content Creation',
      date: 'June 15th, 2025',
      time: '10:00 AM PST'
    },
    {
      presenter: 'Darshan Karthik',
      title: 'AI Use Cases in Marketing and Creative Services',
      date: 'June 30th, 2025',
      time: '11:00 AM PST'
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-extrabold text-foreground mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our expert-led sessions on AI implementation and business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {webinars.map((webinar, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <User className="w-4 h-4 mr-2" />
                  {webinar.presenter}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {webinar.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {webinar.date}
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {webinar.time}
                </div>
                
                <Button className="w-full red-button">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a href="/webinars">View All Webinars</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;

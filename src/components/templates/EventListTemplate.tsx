import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  presenter: string;
  description: string;
  topics: string[];
  registrationLink: string;
  status: 'upcoming' | 'live' | 'past';
}

interface EventListTemplateProps {
  data: {
    title: string;
    subtitle: string;
    events: Event[];
  };
}

const EventListTemplate: React.FC<EventListTemplateProps> = ({ data }) => {
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'past'>('all');

  const toggleEvent = (eventId: string) => {
    setExpandedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const filteredEvents = data.events.filter(event => 
    filterStatus === 'all' || event.status === filterStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'live': return 'bg-red-100 text-red-800';
      case 'past': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-sora font-extrabold mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('all')}
            >
              All Events
            </Button>
            <Button
              variant={filterStatus === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('upcoming')}
            >
              Upcoming
            </Button>
            <Button
              variant={filterStatus === 'past' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('past')}
            >
              Past Events
            </Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <CardContent className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={getStatusColor(event.status)}>
                                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                              </Badge>
                              <h3 className="text-xl font-sora font-semibold">
                                {event.title}
                              </h3>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.time} ({event.duration})</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{event.presenter}</span>
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground line-clamp-2">
                              {event.description}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            {expandedEvents.includes(event.id) ? 
                              <ChevronUp className="w-5 h-5" /> : 
                              <ChevronDown className="w-5 h-5" />
                            }
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="px-6 pb-6 border-t bg-gray-50">
                        <div className="pt-6">
                          <h4 className="font-semibold mb-3">Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.topics.map((topic, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-4">
                            <Button asChild>
                              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                                {event.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No events found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventListTemplate;
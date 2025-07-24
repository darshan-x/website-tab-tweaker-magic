import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, AlertTriangle, Target, Users, Clock, TrendingUp } from 'lucide-react';

interface IndustryTemplateProps {
  data: {
    title: string;
    subtitle: string;
    kpis: Array<{
      value: string;
      label: string;
      description: string;
    }>;
    painPoints: Array<{
      title: string;
      description: string;
      impact: string;
    }>;
    aiSuite: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    whyNative: {
      title: string;
      features: string[];
    };
    pilot: {
      title: string;
      phases: Array<{
        title: string;
        activities: string[];
      }>;
    };
    outcomes: string[];
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const IndustryTemplate: React.FC<IndustryTemplateProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-sora font-extrabold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {data.subtitle}
            </p>
            
            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {data.kpis.map((kpi, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-sora font-extrabold text-primary mb-2">{kpi.value}</div>
                    <div className="font-semibold text-foreground mb-1">{kpi.label}</div>
                    <div className="text-sm text-muted-foreground">{kpi.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="red-button">
                <a href="/contact">Schedule Demo</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#pilot">View Pilot Program</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Grid */}
      <section className="section-padding bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-extrabold mb-4">
              Why {data.title.split(' ')[0]} Still Leaks Revenue
            </h2>
            <p className="text-xl text-muted-foreground">Common challenges we solve</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.painPoints.map((pain, index) => (
              <Card key={index} className="border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    {pain.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{pain.description}</p>
                  <Badge variant="destructive" className="w-full justify-center">
                    Impact: {pain.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Enablement Suite */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-extrabold mb-4">AI Enablement Suite</h2>
            <p className="text-xl text-muted-foreground">Six powerful modules designed for your industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.aiSuite.map((module, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {module.title}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Native */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sora font-extrabold mb-4">{data.whyNative.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {data.whyNative.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 45-Day Pilot Timeline */}
      <section id="pilot" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-extrabold mb-4">{data.pilot.title}</h2>
            <p className="text-xl text-muted-foreground">Fast-track implementation with proven results</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {data.pilot.phases.map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-extrabold mb-4">What You Get</h2>
            <p className="text-xl text-muted-foreground">Measurable outcomes and tangible results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.outcomes.map((outcome, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-extrabold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-sora font-extrabold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the companies already succeeding with our AI solutions
          </p>
          <Button asChild size="lg" className="red-button">
            <a href="/contact">Start Your Pilot Program</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryTemplate;
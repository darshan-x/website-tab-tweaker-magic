import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';

interface ServiceTemplateProps {
  data: {
    title: string;
    subtitle: string;
    kpis: Array<{
      value: string;
      label: string;
      description: string;
    }>;
    heroCTAs: Array<{
      text: string;
      type: string;
      link: string;
    }>;
    stacks: Array<{
      title: string;
      icon: string;
      features: string[];
      outcomes: string[];
    }>;
    bundles: Array<{
      title: string;
      price: string;
      duration: string;
      features: string[];
      ideal: string;
    }>;
    processSteps: Array<{
      title: string;
      duration: string;
      description: string;
      deliverables: string[];
    }>;
  };
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ data }) => {
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
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
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
                    <div className="text-2xl font-bold text-primary mb-2">{kpi.value}</div>
                    <div className="font-semibold text-foreground mb-1">{kpi.label}</div>
                    <div className="text-sm text-muted-foreground">{kpi.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {data.heroCTAs.map((cta, index) => (
                <Button
                  key={index}
                  asChild
                  variant={cta.type === 'primary' ? 'default' : 'outline'}
                  size="lg"
                  className={cta.type === 'primary' ? 'red-button' : ''}
                >
                  <a href={cta.link}>{cta.text}</a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Stacks */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-bold mb-4">Service Stacks</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions designed for your success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data.stacks.map((stack, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {stack.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {stack.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Outcomes:</h4>
                      <ul className="space-y-1">
                        {stack.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-primary font-medium">
                            • {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Bundles */}
      <section className="section-padding bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-bold mb-4">Implementation Bundles</h2>
            <p className="text-xl text-muted-foreground">Choose the right package for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data.bundles.map((bundle, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{bundle.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {bundle.price}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {bundle.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Badge variant="secondary" className="w-full justify-center">
                      Ideal for: {bundle.ideal}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sora font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">Our proven methodology for success</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {data.processSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-sora font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discuss your specific needs
          </p>
          <Button asChild size="lg" className="red-button">
            <a href="/contact">Schedule Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTemplate;
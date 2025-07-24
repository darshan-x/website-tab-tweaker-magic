import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetricsTable from '@/components/shared/MetricsTable';

interface Service {
  title: string;
  description: string;
  features: string[];
  link: string;
}

interface Metric {
  label: string;
  value: string;
}

interface ServiceHubTabsProps {
  techServices: Service[];
  revenueServices: Service[];
  techMetrics: Metric[];
  salesMetrics: Metric[];
}

const ServiceHubTabs: React.FC<ServiceHubTabsProps> = ({
  techServices,
  revenueServices,
  techMetrics,
  salesMetrics
}) => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-sora font-extrabold text-foreground mb-4">
            Our Service Hubs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to AI transformation with our specialized service offerings
          </p>
        </div>

        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger 
              value="tech" 
              className="data-[state=active]:tab-active transition-all duration-200"
            >
              Tech Services
            </TabsTrigger>
            <TabsTrigger 
              value="revenue"
              className="data-[state=active]:tab-active transition-all duration-200"
            >
              Revenue Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tech" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Tech Services */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-sora font-semibold text-foreground mb-4">
                    Tech Services Hub
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Cutting-edge technical solutions to power your AI transformation.
                  </p>
                </div>

                <div className="space-y-6">
                  {techServices.map((service, index) => (
                    <Card key={index} className="border-stroke/10 card-hover-enhanced">
                      <CardContent className="p-6">
                        <h4 className="font-sora font-semibold text-lg text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link to={service.link}>
                          <Button variant="outline" className="group focus-ring-brand">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tech Metrics */}
              <div className="lg:sticky lg:top-8">
                <MetricsTable 
                  title="Tech Stack Performance"
                  metrics={techMetrics}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Revenue Services */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-sora font-semibold text-foreground mb-4">
                    Revenue Services Hub
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    AI-powered solutions to optimize every stage of your customer journey.
                  </p>
                </div>

                <div className="space-y-6">
                  {revenueServices.map((service, index) => (
                    <Card key={index} className="border-stroke/10 card-hover-enhanced">
                      <CardContent className="p-6">
                        <h4 className="font-sora font-semibold text-lg text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link to={service.link}>
                          <Button variant="outline" className="group focus-ring-brand">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sales Metrics */}
              <div className="lg:sticky lg:top-8">
                <MetricsTable 
                  title="Sales KPI Impact"
                  metrics={salesMetrics}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceHubTabs;
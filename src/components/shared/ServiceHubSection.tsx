import React from 'react';
import { Button } from '@/components/ui/button';
import MetricsTable from './MetricsTable';

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

interface ServiceHubSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
  metricsTitle: string;
  metrics: Metric[];
  className?: string;
}

const ServiceHubSection: React.FC<ServiceHubSectionProps> = ({
  title,
  subtitle,
  services,
  metricsTitle,
  metrics,
  className = ''
}) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sora font-extrabold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border-l-4 border-primary/20 pl-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="red-button">
                  <a href={service.link}>Learn More</a>
                </Button>
              </div>
            ))}
          </div>

          {/* Metrics Table */}
          <div className="lg:pl-8">
            <MetricsTable title={metricsTitle} metrics={metrics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubSection;
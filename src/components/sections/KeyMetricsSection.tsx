
import React from 'react';
import { motion } from 'framer-motion';

const KeyMetricsSection = () => {
  const metrics = [
    {
      value: '40%+',
      label: 'Cost Reduction',
      description: 'Average operational cost savings through AI automation',
      color: 'text-accent-coral'
    },
    {
      value: '2-6 Weeks',
      label: 'Implementation Time',
      description: 'From initial consultation to fully deployed solution',
      color: 'text-accent-coral'
    },
    {
      value: '3-5x',
      label: 'ROI (First Year)',
      description: 'Return on investment within the first 12 months',
      color: 'text-accent-coral'
    }
  ];

  return (
    <section id="home-kpis" className="py-12 lg:py-16 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-sora font-extrabold mb-6 text-foreground">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real metrics from our enterprise implementations across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              role="group"
              aria-label={`${metric.label} Metric`}
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl px-4 py-4 sm:px-3 sm:py-3"
            >
              <div className="text-3xl md:text-4xl font-sora font-extrabold text-brand leading-tight tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-ink/90 leading-snug tracking-tight mt-0.5">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;


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
    <section className="section-padding bg-background-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-sora font-extrabold mb-6 text-foreground">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real metrics from our enterprise implementations across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className={`text-5xl lg:text-6xl font-sora font-extrabold mb-4 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-xl font-sora font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;

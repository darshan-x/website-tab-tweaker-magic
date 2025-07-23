import React from 'react';

interface Metric {
  label: string;
  value: string;
}

interface MetricsTableProps {
  title: string;
  metrics: Metric[];
}

const MetricsTable: React.FC<MetricsTableProps> = ({ title, metrics }) => {
  return (
    <div className="bg-secondary/50 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-foreground mb-4">{title}</h4>
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-muted-foreground">{metric.label}</span>
            <span className="font-semibold text-primary">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsTable;
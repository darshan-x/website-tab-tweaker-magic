import React from 'react';
import { Search, Target, Cog, TrendingUp, ArrowRight } from 'lucide-react';

const ProcessFlowDiagram = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery &\nAnalysis',
      description: 'Understanding your business needs'
    },
    {
      icon: Target,
      title: 'Strategy &\nPlanning',
      description: 'Creating your AI roadmap'
    },
    {
      icon: Cog,
      title: 'Implementation &\nOptimization',
      description: 'Building and refining solutions'
    },
    {
      icon: TrendingUp,
      title: 'Results &\nScaling',
      description: 'Measuring success and expanding'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1 whitespace-pre-line">
              {step.title}
            </h4>
            <p className="text-xs text-muted-foreground max-w-[120px]">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="w-5 h-5 text-muted-foreground mx-4 hidden lg:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProcessFlowDiagram;
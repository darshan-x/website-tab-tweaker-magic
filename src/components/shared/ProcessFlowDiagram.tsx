import React from 'react';

const ProcessFlowDiagram = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="aspect-square bg-muted/20 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-sm text-muted-foreground font-medium">
            Process Flow Diagram
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Image coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowDiagram;
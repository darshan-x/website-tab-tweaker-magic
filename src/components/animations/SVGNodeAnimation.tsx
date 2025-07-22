
import React from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;  
  y: number;
  color: string;
}

const nodes: Node[] = [
  {
    id: 'discovery',
    label: 'Discovery & Analysis',
    x: 25,
    y: 25,
    color: 'hsl(var(--primary))'
  },
  {
    id: 'strategy', 
    label: 'Strategy & Planning',
    x: 75,
    y: 25,
    color: 'hsl(var(--primary))'
  },
  {
    id: 'results',
    label: 'Results & Scaling',
    x: 75,
    y: 75,
    color: 'hsl(var(--primary))'
  },
  {
    id: 'implementation',
    label: 'Implementation & Optimization', 
    x: 25,
    y: 75,
    color: 'hsl(var(--primary))'
  }
];

const connections = [
  { from: 'discovery', to: 'strategy' },
  { from: 'strategy', to: 'results' },
  { from: 'results', to: 'implementation' },
  { from: 'implementation', to: 'discovery' }
];

export default function SVGNodeAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-96">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Animated connection lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          const x1 = fromNode.x;
          const y1 = fromNode.y;
          const x2 = toNode.x;
          const y2 = toNode.y;
          
          return (
            <g key={`${connection.from}-${connection.to}`}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#connectionGradient)"
                strokeWidth="0.8"
                strokeDasharray="3 1.5"
                initial={{ 
                  pathLength: 0,
                  opacity: 0
                }}
                animate={{ 
                  pathLength: 1,
                  opacity: 1
                }}
                transition={{
                  pathLength: {
                    duration: 1.5,
                    delay: index * 0.2 + 0.5,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: 0.3,
                    delay: index * 0.2 + 0.5
                  }
                }}
                filter="url(#glow)"
              />
              
              <motion.circle
                r="0.8"
                fill="hsl(var(--primary))"
                filter="url(#glow)"
                initial={{ 
                  cx: x1, 
                  cy: y1,
                  opacity: 0 
                }}
                animate={{ 
                  cx: x2, 
                  cy: y2,
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3 + 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}

        {/* Node circles with embedded labels */}
        {nodes.map((node, index) => {
          const x = node.x;
          const y = node.y;
          
          return (
            <g key={node.id}>
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="hsl(var(--primary))"
                opacity="0.3"
                filter="url(#glow)"
                initial={{ 
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                  y: [0, -0.5, 0]
                }}
                transition={{
                  scale: { 
                    duration: 0.4, 
                    delay: index * 0.1 
                  },
                  opacity: {
                    duration: 2,
                    delay: index * 0.15,
                    repeat: Infinity,
                    repeatType: "loop"
                  },
                  y: {
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
              />
              
              <motion.circle
                cx={x}
                cy={y}
                r="4.5"
                fill="hsl(var(--primary))"
                initial={{ 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -0.5, 0]
                }}
                transition={{
                  scale: {
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  },
                  opacity: {
                    duration: 0.2,
                    delay: index * 0.1
                  },
                  y: {
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="cursor-pointer"
                filter="url(#glow)"
              />
              
              <motion.text
                x={x}
                y={y + 1.5}
                textAnchor="middle"
                className="fill-white font-bold"
                fontSize="4"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -0.5, 0]
                }}
                transition={{ 
                  opacity: {
                    delay: index * 0.1 + 0.2 
                  },
                  y: {
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
              >
                {index + 1}
              </motion.text>
              
              <motion.text
                x={x}
                y={node.y < 50 ? y + 12 : y - 8}
                textAnchor="middle"
                className="fill-foreground"
                fontSize="3.5"
                fontWeight="500"
                initial={{ 
                  opacity: 0, 
                  y: node.y < 50 ? y + 10 : y - 6 
                }}
                animate={{ 
                  opacity: 1, 
                  y: [
                    node.y < 50 ? y + 12 : y - 8,
                    node.y < 50 ? y + 11.5 : y - 8.5,
                    node.y < 50 ? y + 12 : y - 8
                  ]
                }}
                transition={{ 
                  opacity: {
                    delay: index * 0.1 + 0.3 
                  },
                  y: {
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
              >
                <tspan x={x} dy="0" className="font-semibold">
                  {node.label.split(' & ')[0]}
                </tspan>
                {node.label.includes(' & ') && (
                  <tspan x={x} dy="4">
                    {'& ' + node.label.split(' & ')[1]}
                  </tspan>
                )}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

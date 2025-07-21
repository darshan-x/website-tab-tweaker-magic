
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
    color: '#5046FF'
  },
  {
    id: 'strategy', 
    label: 'Strategy & Planning',
    x: 75,
    y: 25,
    color: '#12C2FF'
  },
  {
    id: 'results',
    label: 'Results & Scaling',
    x: 75,
    y: 75,
    color: '#A5FF43'
  },
  {
    id: 'implementation',
    label: 'Implementation & Optimization', 
    x: 25,
    y: 75,
    color: '#EF9834'
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
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5046FF" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#12C2FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#A5FF43" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EF9834" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Animated connection lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          const x1 = (fromNode.x / 100) * 400;
          const y1 = (fromNode.y / 100) * 400;
          const x2 = (toNode.x / 100) * 400;
          const y2 = (toNode.y / 100) * 400;
          
          return (
            <g key={`${connection.from}-${connection.to}`}>
              {/* Connection line */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                strokeDasharray="12 6"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 3,
                  delay: index * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                filter="url(#glow)"
              />
              
              {/* Flowing particles */}
              <motion.circle
                r="4"
                fill={fromNode.color}
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
                  duration: 2.5,
                  delay: index * 0.7,
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
          const x = (node.x / 100) * 400;
          const y = (node.y / 100) * 400;
          
          return (
            <g key={node.id}>
              {/* Node glow */}
              <motion.circle
                cx={x}
                cy={y}
                r="25"
                fill={node.color}
                opacity="0.3"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  scale: { duration: 0.8, delay: index * 0.2 },
                  opacity: {
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              />
              
              {/* Main node circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="18"
                fill={node.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                className="cursor-pointer"
                filter="url(#glow)"
              />
              
              {/* Node number */}
              <motion.text
                x={x}
                y={y + 6}
                textAnchor="middle"
                className="fill-white font-bold text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {index + 1}
              </motion.text>
              
              {/* Node label */}
              <motion.text
                x={x}
                y={node.y < 50 ? y + 45 : y - 35}
                textAnchor="middle"
                className="fill-neutral-light text-xs font-medium"
                initial={{ opacity: 0, y: node.y < 50 ? y + 35 : y - 25 }}
                animate={{ 
                  opacity: 1, 
                  y: node.y < 50 ? y + 45 : y - 35 
                }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <tspan x={x} dy="0" className="font-semibold">
                  {node.label.split(' & ')[0]}
                </tspan>
                {node.label.includes(' & ') && (
                  <tspan x={x} dy="1.2em">
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

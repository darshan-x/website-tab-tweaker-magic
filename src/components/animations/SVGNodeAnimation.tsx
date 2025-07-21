
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
    x: 100,
    y: 50,
    color: '#6633EE'
  },
  {
    id: 'strategy',
    label: 'Strategy & Planning',
    x: 200,
    y: 100,
    color: '#3B82F6'
  },
  {
    id: 'implementation',
    label: 'Implementation',
    x: 150,
    y: 180,
    color: '#84CC16'
  },
  {
    id: 'optimization',
    label: 'Optimization',
    x: 50,
    y: 130,
    color: '#EF4444'
  }
];

const connections = [
  { from: 'discovery', to: 'strategy' },
  { from: 'strategy', to: 'implementation' },
  { from: 'implementation', to: 'optimization' },
  { from: 'optimization', to: 'discovery' }
];

export default function SVGNodeAnimation() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 250 230"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated connection lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          );
        })}

        {/* Animated dots along connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.circle
              key={`dot-${connection.from}-${connection.to}`}
              r="3"
              fill="#6633EE"
              initial={{ 
                cx: fromNode.x, 
                cy: fromNode.y,
                opacity: 0 
              }}
              animate={{ 
                cx: toNode.x, 
                cy: toNode.y,
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: 2,
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6633EE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#84CC16" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Floating nodes with labels */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(node.x / 250) * 100}%`,
            top: `${(node.y / 230) * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -8, 0]
          }}
          transition={{
            scale: { duration: 0.5, delay: index * 0.2 },
            opacity: { duration: 0.5, delay: index * 0.2 },
            y: {
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          {/* Node circle */}
          <motion.div
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              style={{ backgroundColor: node.color }}
            >
              {index + 1}
            </div>
            
            {/* Glow effect */}
            <div
              className="absolute inset-0 w-12 h-12 rounded-full opacity-30 animate-pulse"
              style={{ 
                backgroundColor: node.color,
                filter: 'blur(8px)',
                zIndex: -1
              }}
            />
          </motion.div>

          {/* Node label */}
          <motion.div
            className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <span className="text-xs font-medium text-foreground bg-white/90 px-2 py-1 rounded-md shadow-sm whitespace-nowrap">
              {node.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}


import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

const SalesAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              <span className="gradient-text">Sales AI</span> Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Accelerate your sales processes with intelligent automation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalesAI;

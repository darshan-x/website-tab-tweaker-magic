
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Rocket, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const RapidPrototyping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-electric-indigo/10 border border-electric-indigo/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-electric-indigo" />
              <span className="text-sm font-medium text-electric-indigo">
                48-Hour Turnaround
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              <span className="gradient-text">Rapid Prototyping</span> Services
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Transform your ideas into working prototypes in 48 hours. Validate concepts, 
              gather feedback, and iterate quickly with our rapid development approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                <Link to="/contact">
                  Start Your Prototype
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="pill-button">
                <Link to="/case-studies">View Examples</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-neutral-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-sora font-bold mb-6">
              Why Choose Our <span className="gradient-text">Rapid Prototyping</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: '48-Hour Delivery',
                description: 'Get working prototypes in just 48 hours, not weeks'
              },
              {
                icon: Users,
                title: 'User-Centered Design',
                description: 'Built with user feedback and testing in mind'
              },
              {
                icon: CheckCircle,
                title: 'Production Ready',
                description: 'Scalable architecture that grows with your business'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full glass">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-indigo to-cerulean-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-sora">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-sora font-bold mb-6">
              Ready to Build Your <span className="gradient-text">Prototype</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's turn your idea into a working prototype in just 48 hours
            </p>
            <Button asChild size="lg" className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RapidPrototyping;

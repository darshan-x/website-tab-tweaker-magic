
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WebinarsSection from '@/components/sections/WebinarsSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Key Metrics Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#FF4444] mb-2">40%</div>
                <div className="text-lg font-medium text-foreground mb-2">Sales Increase</div>
                <div className="text-sm text-muted-foreground">Average improvement in sales performance</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#FF4444] mb-2">60%</div>
                <div className="text-lg font-medium text-foreground mb-2">Time Saved</div>
                <div className="text-sm text-muted-foreground">Reduction in manual processes</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#FF4444] mb-2">24/7</div>
                <div className="text-lg font-medium text-foreground mb-2">Support</div>
                <div className="text-sm text-muted-foreground">Always-on AI assistance</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />
      <IndustriesSection />
      <WebinarsSection />
    </div>
  );
}

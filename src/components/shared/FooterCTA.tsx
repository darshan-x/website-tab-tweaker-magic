import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-sora font-extrabold text-foreground mb-6">
            Ready to revolutionize your business with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free 30-minute strategy call to discover how GigaRev can help you implement AI, slash costs, and accelerate revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="red-button text-lg px-8 py-4">
              <a href="/contact">
                Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4">
              <a href="#demo">
                <Play className="mr-2 w-5 h-5" />
                Watch 90-sec Overview
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
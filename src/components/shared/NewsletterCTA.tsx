import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
}

const NewsletterCTA: React.FC<NewsletterCTAProps> = ({
  title = "Stay Ahead with AI Insights",
  description = "Get the latest AI implementation strategies, industry trends, and success stories delivered to your inbox.",
  ctaText = "Subscribe Now"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with Supabase integration when connected
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-surface-muted/50">
      <div className="container">
        <Card className="max-w-4xl mx-auto border-stroke/10 shadow-sm">
           <CardContent className="p-6 lg:p-8">
             <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Newsletter
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-sora font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 focus-ring-brand"
                      disabled={isSubmitting}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !email}
                      className="h-12 px-6 bg-primary hover:bg-primary/90 focus-ring-brand group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                          Subscribing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          {ctaText}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
                
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Join 2,500+ AI leaders. Unsubscribe anytime. No spam, guaranteed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterCTA;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { ArrowRight, Gift, CheckCircle2, Clock, Calendar, Bot, Shield, Zap, Building2, Users, MessageSquare, Brain, FileCheck, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSales() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        to_email: data.email,
        from_name: "Gigarev AI",
        to_name: data.name,
        message: `
Name: ${data.name}
Company: ${data.company}
Phone: ${data.phone}
Email: ${data.email}

Message:
${data.message}
        `,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEOHead
        title="Contact Sales | GigaRev - AI Implementation Experts"
        description="Get expert guidance on implementing AI in your business. Schedule a consultation with our AI advisors to discuss your digital transformation needs."
        keywords="AI consulting, contact sales, AI implementation consultation, enterprise AI solutions"
        ogUrl="/contact"
      />
      
      <PageHeader 
        title="Talk to an AI Advisor" 
        description="Get expert guidance on implementing AI in your business"
      />
      
      <div className="pt-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">Limited Time Offer</span>
                </div>
                <h2 className="text-2xl font-sora font-semibold mb-2">Connect with an AI Advisor</h2>
                <p className="text-muted-foreground mb-2">
                  Fill out the form below and one of our AI implementation experts will get back to you within 24 hours.
                </p>
                <p className="text-accent font-medium">
                  🎁 Special offer: Get one AI workflow automated for free when you schedule a consultation! (Terms apply)
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        {...register('name')}
                        placeholder="Your name"
                        className="pl-10"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        {...register('company')}
                        placeholder="Company name"
                        className="pl-10"
                      />
                    </div>
                    {errors.company && (
                      <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="Email address"
                        className="pl-10"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        {...register('phone')}
                        placeholder="Phone number"
                        className="pl-10"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        {...register('message')}
                        placeholder="Tell us about your AI implementation goals"
                        className="pl-10 min-h-[120px]"
                      />
                    </div>
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full pill-button bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Get Expert Guidance'}</span>
                  <ArrowRight className="button-icon h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  jobTitle: z.string().min(2, 'Job title must be at least 2 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function WebinarRegistration() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const webinarTitle = searchParams.get('title') || 'Upcoming Webinar';
  const webinarDate = searchParams.get('date') || '';
  const webinarTime = searchParams.get('time') || '';

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
        to_name: data.name,
        webinar_title: webinarTitle,
        webinar_date: webinarDate,
        webinar_time: webinarTime,
        company: data.company,
        job_title: data.jobTitle,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Registration Successful!",
        description: "You'll receive an email with webinar details shortly.",
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container max-w-xl">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Webinars
        </Button>

        <div className="bg-card border border-border rounded-xl p-8">
          <h1 className="text-2xl font-sora font-semibold mb-2">
            Register for Webinar
          </h1>
          <p className="text-muted-foreground mb-6">
            {webinarTitle}
            <br />
            {webinarDate} at {webinarTime}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register('name')}
                placeholder="Your name"
                className="mb-2"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register('email')}
                type="email"
                placeholder="Work email"
                className="mb-2"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register('company')}
                placeholder="Company name"
                className="mb-2"
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register('jobTitle')}
                placeholder="Job title"
                className="mb-2"
              />
              {errors.jobTitle && (
                <p className="text-sm text-destructive">{errors.jobTitle.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register Now'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
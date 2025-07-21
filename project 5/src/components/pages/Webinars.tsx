import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, Bot, Brain, Target, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const upcomingWebinars = [
  {
    title: 'Best Practices for n8n Workflow Automation',
    description: 'Learn how to leverage n8n to automate your business workflows effectively. From basic automation to complex multi-step processes, discover how to streamline your operations.',
    presenter: {
      name: 'Ravish Kamath',
      role: 'CTO',
      image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_20_PM_kf0ywz.png'
    },
    date: 'June 1st, 2025',
    time: '11:00 AM PST',
    duration: '60 minutes',
    topics: [
      'Introduction to n8n platform',
      'Building effective workflows',
      'Best practices and common pitfalls',
      'Real-world automation examples',
      'Q&A session'
    ],
    icon: Bot,
    color: 'from-primary/50 to-primary/10'
  },
  {
    title: 'AI in Sales Enablement: From Coaching to Content Creation',
    description: 'Discover how AI is transforming sales enablement through automated coaching, content generation, and performance optimization.',
    presenter: {
      name: 'Ravish Kamath',
      role: 'CTO',
      image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_20_PM_kf0ywz.png'
    },
    date: 'June 15th, 2025',
    time: '10:00 AM PST',
    duration: '45 minutes',
    topics: [
      'AI-powered sales coaching',
      'Automated content generation',
      'Performance analytics',
      'Implementation strategies',
      'Live demo'
    ],
    icon: Brain,
    color: 'from-secondary/50 to-secondary/10'
  },
  {
    title: 'AI Use Cases in Marketing and Creative Services',
    description: 'Explore practical applications of AI in marketing operations and creative services, with real-world examples and implementation strategies.',
    presenter: {
      name: 'Darshan Karthik',
      role: 'CMO',
      image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png'
    },
    date: 'June 30th, 2025',
    time: '11:00 AM PST',
    duration: '60 minutes',
    topics: [
      'Content generation and optimization',
      'Campaign automation',
      'Creative asset production',
      'Performance measurement',
      'ROI tracking'
    ],
    icon: Target,
    color: 'from-accent/50 to-accent/10'
  }
];

export default function Webinars() {
  return (
    <div>
      <PageHeader 
        title="Webinars" 
        description="Join our expert-led sessions on AI implementation and business transformation"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-sora font-semibold mb-6">
                  Upcoming Webinars
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our expert-led webinars to learn about the latest in AI implementation, 
                  automation, and digital transformation. Register now to secure your spot.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Webinars List */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-8">
              {upcomingWebinars.map((webinar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b ${webinar.color} border border-border rounded-xl p-8`}
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <webinar.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-sora font-semibold">{webinar.title}</h2>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {webinar.description}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{webinar.time} • {webinar.duration}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-3">What You'll Learn:</h3>
                        <ul className="space-y-2">
                          {webinar.topics.map((topic, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="bg-card border border-border rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={webinar.presenter.image}
                            alt={webinar.presenter.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-sora font-medium">{webinar.presenter.name}</h3>
                            <p className="text-sm text-primary">{webinar.presenter.role}</p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        className="w-full pill-button bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <Link 
                          to={`/webinar-registration?title=${encodeURIComponent(webinar.title)}&date=${encodeURIComponent(webinar.date)}&time=${encodeURIComponent(webinar.time)}`}
                        >
                          <span>Register Now</span>
                          <ArrowRight className="button-icon h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-semibold mb-6">
                Can't Make It?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Register anyway and we'll send you the recording and slides after the webinar.
              </p>
              <Button size="lg" className="pill-button bg-primary hover:bg-primary/90">
                <span>Contact Us</span>
                <ArrowRight className="button-icon h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
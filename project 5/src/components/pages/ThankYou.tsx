import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const recentArticles = [
  {
    title: '"AI Is Coming for Your Job" - and That\'s the Most Productive Wake-Up Call You\'ll Ever Get',
    description: 'A candid look at how AI is reshaping careers and why this disruption could be the best thing for your professional growth.',
    link: '/blog/ai-jobs-article'
  },
  {
    title: 'AI for SMBs: Unlocking Growth Through Cost Optimization',
    description: 'A practical guide to implementing AI in small and mid-sized businesses to reduce costs and fuel growth initiatives.',
    link: '/blog/smb-ai-guide'
  },
  {
    title: 'Field Sales AI: The 2025 Implementation Playbook',
    description: 'A practical guide to implementing AI in field sales operations, from route optimization to agent-based automation.',
    link: '/blog/field-sales-ai'
  }
];

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-sora font-semibold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-sora font-semibold mb-8 text-center">
            While You Wait, Check Out Our Latest Articles
          </h2>

          <div className="grid gap-8 mb-16">
            {recentArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all"
              >
                <Link to={article.link} className="block">
                  <h3 className="text-xl font-sora font-medium mb-2 hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/blog">
                <span>View All Articles</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
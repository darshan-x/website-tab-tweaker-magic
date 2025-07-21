import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Calendar, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const categories = [
  'All',
  'AI Implementation',
  'Development',
  'Sales AI',
  'Marketing AI',
  'Customer Support'
];

const blogPosts = [
  {
    slug: 'agentic-ai-challenges',
    title: 'Why Building Agentic AI Products Is Harder Than It Looks — and How to Get It Right',
    excerpt: 'A deep dive into the challenges and solutions of building production-grade AI agents, from architecture to implementation.',
    category: 'AI Implementation',
    author: 'Ravish Kamath',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_20_PM_kf0ywz.png',
    authorRole: 'CTO',
    date: 'May 19, 2025',
    readTime: '15 min read',
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1747637309/ChatGPT_Image_May_19_2025_12_18_06_PM_yfan91.png',
    tags: ['AI Agents', 'Architecture', 'Implementation']
  },
  {
    slug: 'vibe-marketing',
    title: 'Vibe Marketing: How AI-Powered Emotion Is Winning Hearts (and Budgets) in 2025',
    excerpt: 'Discover how vibe marketing pairs authentic storytelling with AI-driven speed and personalization to create winning campaigns.',
    category: 'Marketing AI',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 26, 2025',
    readTime: '10 min read',
    image: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1747381422/d868b452-5350-4d2c-9daf-b65390640397_xghctp.png',
    tags: ['Marketing', 'AI', 'Brand Strategy']
  },
  {
    slug: 'stakeholder-content-automation',
    title: 'Winning Over Every Stakeholder: Why Sales Leaders Need Personalized Content Automation',
    excerpt: 'Learn why personalized sales content automation is crucial for engaging modern B2B buying committees and how to implement it effectively.',
    category: 'Sales AI',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 25, 2025',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['Sales Content', 'Automation', 'B2B']
  },
  {
    slug: 'ai-jobs-article',
    title: '"AI Is Coming for Your Job" - and That\'s the Most Productive Wake-Up Call You\'ll Ever Get',
    excerpt: 'A candid look at how AI is reshaping careers and why this disruption could be the best thing for your professional growth.',
    category: 'AI Implementation',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 22, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg',
    tags: ['AI', 'Career Development', 'Future of Work']
  },
  {
    slug: 'smb-ai-guide',
    title: 'AI for SMBs: Unlocking Growth Through Cost Optimization',
    excerpt: 'A practical guide to implementing AI in small and mid-sized businesses to reduce costs and fuel growth initiatives.',
    category: 'AI Implementation',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 20, 2025',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['SMB', 'AI', 'Cost Optimization']
  },
  {
    slug: 'field-sales-ai',
    title: 'Field Sales AI: The 2025 Implementation Playbook',
    excerpt: 'A practical guide to implementing AI in field sales operations, from route optimization to agent-based automation.',
    category: 'Sales AI',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 18, 2025',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    tags: ['Field Sales', 'AI', 'Implementation']
  },
  {
    slug: 'ai-implementation-guide-2025',
    title: 'The Complete AI Implementation Guide for 2025',
    excerpt: 'A comprehensive guide to implementing AI in your organization, from strategy to deployment.',
    category: 'AI Implementation',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 15, 2025',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    tags: ['AI', 'Enterprise', 'Implementation']
  },
  {
    slug: 'future-of-sales-ai',
    title: 'The Future of Sales: AI-Powered Revenue Optimization',
    excerpt: 'How AI agents are shrinking sales cycles, super-charging forecasts, and boosting win-rates—backed by new Gartner, McKinsey and Salesforce data.',
    category: 'Sales AI',
    author: 'Darshan Karthik',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_17_PM_ko3tzw.png',
    authorRole: 'CMO & Head of AI Operations',
    date: 'March 12, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg',
    tags: ['Sales', 'AI', 'Revenue']
  },
  {
    slug: 'rapid-prototyping-best-practices',
    title: 'Rapid Prototyping: From Concept to MVP in Weeks',
    excerpt: 'Ship MVPs in 21 days using prompt-first design, low-code scaffolds and AI coding copilots—complete with guard-rails and cost sentinels.',
    category: 'Development',
    author: 'Ravish Kamath',
    authorImage: 'https://res.cloudinary.com/dpxfwxxzi/image/upload/v1746718454/ChatGPT_Image_May_8_2025_09_03_20_PM_kf0ywz.png',
    authorRole: 'CTO',
    date: 'March 10, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['Prototyping', 'MVP', 'Development']
  }
];

export function Blog() {
  return (
    <div>
      <SEOHead
        title="Blog | GigaRev - AI Implementation Insights"
        description="Expert insights on AI implementation, digital transformation, and revenue optimization. Stay updated with the latest in enterprise AI and technology trends."
        keywords="AI implementation blog, enterprise AI insights, digital transformation blog, AI consulting blog"
        ogUrl="/blog"
      />
      
      <PageHeader 
        title="Blog" 
        description="Insights and guides on AI implementation, development, and revenue optimization"
      />
      
      <div className="pt-20">
        {/* Featured Post */}
        <section className="py-20 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center gap-2 text-sm">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-primary">{blogPosts[0].category}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-sora font-semibold">
                    {blogPosts[0].title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src={blogPosts[0].authorImage}
                      alt={blogPosts[0].author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium">{blogPosts[0].author}</div>
                      <div className="text-xs text-muted-foreground">{blogPosts[0].authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <Button 
                  className="pill-button bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <span>Read Article</span>
                    <ArrowRight className="button-icon h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-background border-y border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-sm">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-primary">{post.category}</span>
                      </div>
                      
                      <h2 className="text-xl font-sora font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-3">
                          <img 
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium">{post.author}</div>
                            <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
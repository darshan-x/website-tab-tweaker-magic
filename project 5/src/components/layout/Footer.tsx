import { Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sora text-lg font-semibold tracking-tight">
                Giga<span className="text-red-500">Rev</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Implement AI. Slash Costs. Accelerate Revenue.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/gigarev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:team@gigarev.com" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services links */}
          <div className="space-y-4">
            <h3 className="font-sora text-sm font-medium tracking-wide uppercase text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ai-implementation" className="text-sm hover:text-accent transition-colors">
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/full-stack-development" className="text-sm hover:text-accent transition-colors">
                  Development Services
                </Link>
              </li>
              <li>
                <Link to="/services/sales-ai" className="text-sm hover:text-accent transition-colors">
                  Sales AI
                </Link>
              </li>
              <li>
                <Link to="/services/marketing-ai" className="text-sm hover:text-accent transition-colors">
                  Marketing AI
                </Link>
              </li>
              <li>
                <Link to="/services/customer-support-ai" className="text-sm hover:text-accent transition-colors">
                  Customer Support AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="space-y-4">
            <h3 className="font-sora text-sm font-medium tracking-wide uppercase text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/case-studies" className="text-sm hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/playbooks" className="text-sm hover:text-accent transition-colors">
                  Implementation Playbooks
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent transition-colors">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-sora text-sm font-medium tracking-wide uppercase text-muted-foreground">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for AI insights and industry trends.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/30 border-border rounded-full"
              />
              <Button size="sm" className="pill-button">Subscribe</Button>
            </div>
            <div className="pt-4">
              <a href="tel:+1-341-228-4528" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>(341) 228-4528</span>
              </a>
              <a href="mailto:team@gigarev.com" className="flex items-center gap-2 text-sm mt-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>team@gigarev.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GigaRev. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
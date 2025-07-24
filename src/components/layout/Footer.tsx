import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterSignup from '@/components/shared/NewsletterSignup';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-sora font-extrabold text-foreground mb-2">
              GigaRev
            </h3>
            <p className="text-muted-foreground text-sm">
              Implement AI. Slash Costs. Accelerate Revenue.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-implementation" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/full-stack-dev" className="text-muted-foreground hover:text-foreground transition-colors">
                  Development Services
                </Link>
              </li>
              <li>
                <Link to="/services/sales-ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sales AI
                </Link>
              </li>
              <li>
                <Link to="/services/marketing-ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  Marketing AI
                </Link>
              </li>
              <li>
                <Link to="/services/customer-support-ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  Customer Support AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/playbooks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Implementation Playbooks
                </Link>
              </li>
              <li>
                <Link to="#roi-calculator" className="text-muted-foreground hover:text-foreground transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                (341) 228-4528
              </p>
              <p className="text-sm text-muted-foreground">
                team@gigarev.com
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="text-center md:text-left mt-4">
            <p className="text-sm text-muted-foreground">
              © 2025 GigaRev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
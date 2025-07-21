
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Gift,
  Brain,
  Code,
  TrendingUp,
  Building,
  Globe,
  Smartphone,
  Factory,
  BookOpen,
  FileText,
  Users,
  MessageSquare
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      category: 'Tech Services',
      items: [
        { name: 'Rapid Prototyping', href: '/services/rapid-prototyping', icon: Code, description: 'Fast MVP development' },
        { name: 'AI Implementation', href: '/services/ai-implementation', icon: Brain, description: 'Custom AI solutions' },
        { name: 'Full-Stack Development', href: '/services/full-stack-development', icon: Code, description: 'Complete web apps' }
      ]
    },
    {
      category: 'Revenue Services',
      items: [
        { name: 'Sales AI', href: '/services/sales-ai', icon: TrendingUp, description: 'Automate your sales' },
        { name: 'Marketing AI', href: '/services/marketing-ai', icon: TrendingUp, description: 'Intelligent marketing' },
        { name: 'Customer Support AI', href: '/services/customer-support-ai', icon: MessageSquare, description: '24/7 AI support' }
      ]
    }
  ];

  const industries = [
    { name: 'Field Sales', href: '/verticals/field-sales', icon: Building },
    { name: 'AdTech', href: '/verticals/adtech', icon: Globe },
    { name: 'MarTech', href: '/verticals/martech', icon: TrendingUp },
    { name: 'Telecom/Fibre', href: '/verticals/telecom', icon: Smartphone },
    { name: 'Tech SMB', href: '/verticals/tech-smb', icon: Code },
    { name: 'Mid-Market', href: '/verticals/mid-market', icon: Factory }
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Webinars', href: '/webinars', icon: Users },
    { name: 'Implementation Playbooks', href: '/playbooks', icon: BookOpen },
    { name: 'AI Use Cases', href: '/ai-use-cases', icon: Brain }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-destructive text-destructive-foreground py-2 px-4 text-center text-sm">
        <div className="container flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          <span>
            <strong>Special Offer:</strong> Book a strategy session this month and get 20% off implementation -{' '}
            <Link to="/special-offer" className="underline font-medium hover:no-underline">
              Claim Now
            </Link>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background/95 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-sora font-bold">
                Giga<span className="text-destructive">Rev</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-electric-indigo transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[600px] glass rounded-lg p-6 shadow-xl"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {services.map((category) => (
                          <div key={category.category}>
                            <h3 className="font-sora font-semibold text-electric-indigo mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-2">
                              {category.items.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                                >
                                  <service.icon className="w-5 h-5 text-cerulean-glow mt-0.5" />
                                  <div>
                                    <div className="font-medium text-foreground group-hover:text-electric-indigo transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-electric-indigo transition-colors">
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-lg p-4 shadow-xl"
                    >
                      <div className="space-y-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            to={industry.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <industry.icon className="w-4 h-4 text-signal-lime" />
                            <span className="text-foreground group-hover:text-electric-indigo transition-colors">
                              {industry.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-electric-indigo transition-colors">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-lg p-4 shadow-xl"
                    >
                      <div className="space-y-1">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <resource.icon className="w-4 h-4 text-cerulean-glow" />
                            <span className="text-foreground group-hover:text-electric-indigo transition-colors">
                              {resource.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/blog" className="text-foreground hover:text-electric-indigo transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-foreground hover:text-electric-indigo transition-colors">
                About
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container py-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-sora font-semibold text-electric-indigo">Services</h3>
                  {services.map((category) => (
                    <div key={category.category} className="ml-4 space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">{category.category}</div>
                      {category.items.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block py-1 text-foreground hover:text-electric-indigo transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sora font-semibold text-electric-indigo">Industries</h3>
                  <div className="ml-4 space-y-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.href}
                        className="block py-1 text-foreground hover:text-electric-indigo transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sora font-semibold text-electric-indigo">Resources</h3>
                  <div className="ml-4 space-y-1">
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.href}
                        className="block py-1 text-foreground hover:text-electric-indigo transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 border-t border-border pt-4">
                  <Link
                    to="/blog"
                    className="block py-2 text-foreground hover:text-electric-indigo transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    className="block py-2 text-foreground hover:text-electric-indigo transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>

                <Button asChild className="w-full pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

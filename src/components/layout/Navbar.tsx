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
  MessageSquare,
  Settings,
  Brackets,
  Zap,
  Target,
  Headphones,
  Play
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      category: 'Tech Services',
      items: [
        { name: 'AI Implementation', href: '/services/ai-implementation', icon: Settings, description: 'Custom AI solutions with seamless integration' },
        { name: 'Full-Stack Development', href: '/services/full-stack-development', icon: Brackets, description: 'End-to-end product engineering' },
        { name: 'Rapid Prototyping', href: '/services/rapid-prototyping', icon: Zap, description: 'From concept to MVP in weeks' }
      ]
    },
    {
      category: 'Revenue Services',
      items: [
        { name: 'Sales AI', href: '/services/sales-ai', icon: TrendingUp, description: 'AI-powered sales enablement' },
        { name: 'Marketing AI', href: '/services/marketing-ai', icon: Target, description: 'Intelligent marketing automation' },
        { name: 'Customer Support AI', href: '/services/customer-support-ai', icon: Headphones, description: '24/7 intelligent support' }
      ]
    }
  ];

  const industries = [
    { name: 'Field Sales', href: '/verticals/field-sales', icon: Building, bgColor: 'bg-teal-500' },
    { name: 'AdTech', href: '/verticals/adtech', icon: Globe, bgColor: 'bg-pink-500' },
    { name: 'MarTech', href: '/verticals/martech', icon: TrendingUp, bgColor: 'bg-purple-500' },
    { name: 'Telecom/Fibre', href: '/verticals/telecom', icon: Smartphone, bgColor: 'bg-orange-500' },
    { name: 'Tech SMB', href: '/verticals/tech-smb', icon: Code, bgColor: 'bg-teal-500' },
    { name: 'Mid-Market', href: '/verticals/mid-market', icon: Factory, bgColor: 'bg-red-500' }
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Real results from our implementations', bgColor: 'bg-pink-500' },
    { name: 'Implementation Playbooks', href: '/playbooks', icon: BookOpen, description: 'Step-by-step guides for success', bgColor: 'bg-purple-500' },
    { name: 'Webinars', href: '/webinars', icon: Play, description: 'Expert-led sessions on AI implementation', bgColor: 'bg-orange-500' }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-accent-coral text-white py-2 px-4 text-center text-sm">
        <div className="container flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          <span>
            <strong>Special offer:</strong> Get one AI workflow automated for free when you schedule a consultation! -{' '}
            <Link to="/special-offer" className="underline font-medium hover:no-underline">
              Schedule Now
            </Link>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background-light/95 backdrop-blur-lg border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-sora font-bold">
                <span className="text-primary-blue">Giga</span><span className="text-accent-coral">Rev</span>
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
                <button className="flex items-center space-x-1 text-foreground hover:text-primary-blue transition-colors">
                  <span>Services</span>
                  <span className="nav-tag nav-tag-services">Services</span>
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
                            <h3 className="font-sora font-semibold text-primary-blue mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-2">
                              {category.items.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                                >
                                  <service.icon className="w-5 h-5 text-primary-blue mt-0.5" />
                                  <div>
                                    <div className="font-medium text-foreground group-hover:text-primary-blue transition-colors">
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
                <button className="flex items-center space-x-1 text-foreground hover:text-primary-blue transition-colors">
                  <span>Industries</span>
                  <span className="nav-tag nav-tag-industries">Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 glass rounded-lg p-4 shadow-xl"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            to={industry.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <div className={`w-8 h-8 ${industry.bgColor} rounded-lg flex items-center justify-center`}>
                              <industry.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-foreground group-hover:text-primary-blue transition-colors text-sm font-medium">
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
                <button className="flex items-center space-x-1 text-foreground hover:text-primary-blue transition-colors">
                  <span>Resources</span>
                  <span className="nav-tag nav-tag-resources">Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 glass rounded-lg p-4 shadow-xl"
                    >
                      <div className="space-y-1">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <div className={`w-8 h-8 ${resource.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <resource.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground group-hover:text-primary-blue transition-colors">
                                {resource.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {resource.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/blog" className="flex items-center space-x-1 text-foreground hover:text-primary-blue transition-colors">
                <span>Blog</span>
                <span className="nav-tag nav-tag-blog">Blog</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-1 text-foreground hover:text-primary-blue transition-colors">
                <span>About</span>
                <span className="nav-tag nav-tag-about">About</span>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="pill-button bg-accent-coral hover:bg-accent-coral/90 text-white">
                <Link to="/contact">Talk to an AI Advisor</Link>
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
                  <h3 className="font-sora font-semibold text-primary-blue">Services</h3>
                  {services.map((category) => (
                    <div key={category.category} className="ml-4 space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">{category.category}</div>
                      {category.items.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block py-1 text-foreground hover:text-primary-blue transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sora font-semibold text-primary-blue">Industries</h3>
                  <div className="ml-4 space-y-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.href}
                        className="block py-1 text-foreground hover:text-primary-blue transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sora font-semibold text-primary-blue">Resources</h3>
                  <div className="ml-4 space-y-1">
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.href}
                        className="block py-1 text-foreground hover:text-primary-blue transition-colors"
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
                    className="block py-2 text-foreground hover:text-primary-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    className="block py-2 text-foreground hover:text-primary-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>

                <Button asChild className="w-full pill-button bg-accent-coral hover:bg-accent-coral/90 text-white">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Talk to an AI Advisor
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


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Zap, Code, Rocket, TrendingUp, Users, Brain, Building, Factory, Smartphone, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesDropdown = {
    techServices: [
      { icon: Rocket, title: 'Rapid Prototyping', description: 'Fast MVP development', href: '/services/rapid-prototyping' },
      { icon: Brain, title: 'AI Implementation', description: 'Custom AI solutions', href: '/services/ai-implementation' },
      { icon: Code, title: 'Full-Stack Development', description: 'End-to-end development', href: '/services/full-stack-development' }
    ],
    revenueServices: [
      { icon: TrendingUp, title: 'Sales AI', description: 'Accelerate sales processes', href: '/services/sales-ai' },
      { icon: Zap, title: 'Marketing AI', description: 'Automated marketing', href: '/services/marketing-ai' },
      { icon: Users, title: 'Customer Support AI', description: '24/7 intelligent support', href: '/services/customer-support-ai' }
    ]
  };

  const industriesDropdown = [
    { icon: Building, title: 'Field Sales', href: '/verticals/field-sales' },
    { icon: Globe, title: 'AdTech', href: '/verticals/adtech' },
    { icon: TrendingUp, title: 'MarTech', href: '/verticals/martech' },
    { icon: Smartphone, title: 'Telecom', href: '/verticals/telecom' },
    { icon: Code, title: 'Tech SMB', href: '/verticals/tech-smb' },
    { icon: Factory, title: 'Mid-Market', href: '/verticals/mid-market' }
  ];

  const resourcesDropdown = [
    { title: 'Blog', href: '/blog' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Implementation Playbooks', href: '/playbooks' },
    { title: 'Webinars', href: '/webinars' },
    { title: 'AI Use Cases', href: '/ai-use-cases' }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white py-2 text-center text-sm">
        <Link to="/special-offer" className="hover:underline">
          🚀 Limited Time: Free AI Assessment for SMBs - Book Your Strategy Call
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-indigo to-cerulean-glow rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-sora font-bold text-xl text-foreground">GigaRev</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-border p-6"
                    >
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <h3 className="font-semibold text-sm text-muted-foreground mb-3">Tech Services Hub</h3>
                          <div className="space-y-2">
                            {servicesDropdown.techServices.map((service) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                              >
                                <service.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-foreground">{service.title}</div>
                                  <div className="text-sm text-muted-foreground">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-sm text-muted-foreground mb-3">Revenue Services Hub</h3>
                          <div className="space-y-2">
                            {servicesDropdown.revenueServices.map((service) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                              >
                                <service.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-foreground">{service.title}</div>
                                  <div className="text-sm text-muted-foreground">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
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
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border p-4"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {industriesDropdown.map((industry) => (
                          <Link
                            key={industry.href}
                            to={industry.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <industry.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{industry.title}</span>
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
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border p-2"
                    >
                      {resourcesDropdown.map((resource) => (
                        <Link
                          key={resource.href}
                          to={resource.href}
                          className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                        >
                          {resource.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
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
              className="lg:hidden bg-white border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link to="/services" className="block py-2 text-foreground hover:text-primary">
                  Services
                </Link>
                <Link to="/industries" className="block py-2 text-foreground hover:text-primary">
                  Industries
                </Link>
                <Link to="/blog" className="block py-2 text-foreground hover:text-primary">
                  Blog
                </Link>
                <Link to="/about" className="block py-2 text-foreground hover:text-primary">
                  About
                </Link>
                <Button asChild className="w-full pill-button bg-gradient-to-r from-electric-indigo to-cerulean-glow text-white">
                  <Link to="/contact">Get Started</Link>
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

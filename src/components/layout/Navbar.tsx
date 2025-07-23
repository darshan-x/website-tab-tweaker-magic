
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Code, Zap, Rocket, Users, Target, TrendingUp, Phone, FileText, BookOpen, Video } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const servicesData = {
    tech: [
      { name: 'AI Implementation', description: 'Custom AI solutions with seamless integration', href: '/services/ai-implementation', icon: Code },
      { name: 'Full-Stack Development', description: 'End-to-end product engineering', href: '/services/full-stack-development', icon: Zap },
      { name: 'Rapid Prototyping', description: 'From concept to MVP in weeks', href: '/services/rapid-prototyping', icon: Rocket }
    ],
    revenue: [
      { name: 'Sales AI', description: 'AI-powered sales enablement', href: '/services/sales-ai', icon: Target },
      { name: 'Marketing AI', description: 'Intelligent marketing automation', href: '/services/marketing-ai', icon: TrendingUp },
      { name: 'Customer Support AI', description: '24/7 intelligent support', href: '/services/customer-support-ai', icon: Phone }
    ]
  };

  const industriesData = [
    { name: 'Field Sales', href: '/verticals/field-sales', icon: Users },
    { name: 'AdTech', href: '/verticals/adtech', icon: Target },
    { name: 'MarTech', href: '/verticals/martech', icon: TrendingUp },
    { name: 'Telecom', href: '/verticals/telecom', icon: Phone },
    { name: 'Tech SMB', href: '/verticals/tech-smb', icon: Code },
    { name: 'Mid-Market', href: '/verticals/mid-market', icon: Users }
  ];

  const resourcesData = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Implementation Playbooks', href: '/playbooks', icon: BookOpen },
    { name: 'Webinars', href: '/webinars', icon: Video }
  ];

  const navItems = [
    { name: 'Blog', href: '/blog', badge: 'Y4' },
    { name: 'About', href: '/about', badge: 'Y5' }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-background-light border-b border-border sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-sora">
                <span className="text-text-black font-normal">Giga</span>
                <span className="text-[#FF4444] font-bold">Rev</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link group">
                      Services
                      <span className="nav-badge nav-badge-y1">Y1</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-white shadow-lg rounded-lg border">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Tech Services */}
                          <div>
                            <h3 className="font-sora font-semibold text-sm mb-4 text-foreground tracking-tighter">Tech Services</h3>
                            <div className="space-y-3">
                              {servicesData.tech.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <service.icon className="w-5 h-5 text-primary mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground tracking-tighter">{service.name}</div>
                                    <div className="text-xs text-muted-foreground mt-1 tracking-tighter">{service.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Revenue Services */}
                          <div>
                            <h3 className="font-sora font-semibold text-sm mb-4 text-foreground tracking-tighter">Revenue Services</h3>
                            <div className="space-y-3">
                              {servicesData.revenue.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <service.icon className="w-5 h-5 text-primary mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground tracking-tighter">{service.name}</div>
                                    <div className="text-xs text-muted-foreground mt-1 tracking-tighter">{service.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link group">
                      Industries
                      <span className="nav-badge nav-badge-y2">Y2</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-6 bg-white shadow-lg rounded-lg border">
                        <div className="space-y-2">
                          {industriesData.map((industry) => (
                            <Link
                              key={industry.name}
                              to={industry.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <industry.icon className="w-5 h-5 text-primary" />
                              <div className="font-medium text-sm text-foreground tracking-tighter">{industry.name}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link group">
                      Resources
                      <span className="nav-badge nav-badge-y3">Y3</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-6 bg-white shadow-lg rounded-lg border">
                        <div className="space-y-2">
                          {resourcesData.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <resource.icon className="w-5 h-5 text-primary" />
                              <div className="font-medium text-sm text-foreground tracking-tighter">{resource.name}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Regular nav items */}
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                      >
                        {item.name}
                        <span className={`nav-badge nav-badge-${item.badge.toLowerCase()}`}>
                          {item.badge}
                        </span>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button asChild className="h-14">
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
              {/* Mobile Services */}
              <div className="py-2">
                <div className="font-medium text-foreground mb-2 tracking-tighter">Services</div>
                <div className="ml-4 space-y-1">
                  {[...servicesData.tech, ...servicesData.revenue].map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tighter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Industries */}
              <div className="py-2">
                <div className="font-medium text-foreground mb-2 tracking-tighter">Industries</div>
                <div className="ml-4 space-y-1">
                  {industriesData.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tighter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div className="py-2">
                <div className="font-medium text-foreground mb-2 tracking-tighter">Resources</div>
                <div className="ml-4 space-y-1">
                  {resourcesData.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tighter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile regular nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Button asChild className="w-full h-14 mt-4">
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

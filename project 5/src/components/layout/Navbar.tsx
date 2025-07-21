import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  ChevronRight, 
  Menu,
  X,
  Bot,
  Code,
  LineChart,
  Users,
  Building,
  Radio,
  Smartphone,
  Zap,
  BookOpen,
  Calculator,
  Video,
  Gift,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ComponentType;
  description?: string;
}

interface ServiceSection {
  title: string;
  items: DropdownItem[];
}

type ServicesDropdown = ServiceSection[];

const servicesDropdown: ServicesDropdown = [
  {
    title: 'Tech Services',
    items: [
      { 
        name: 'AI Implementation', 
        href: '/services/ai-implementation', 
        icon: Bot,
        description: 'Custom AI solutions with seamless integration'
      },
      { 
        name: 'Full-Stack Development', 
        href: '/services/full-stack-development', 
        icon: Code,
        description: 'End-to-end product engineering'
      },
      { 
        name: 'Rapid Prototyping', 
        href: '/services/rapid-prototyping', 
        icon: Zap,
        description: 'From concept to MVP in weeks'
      }
    ]
  },
  {
    title: 'Revenue Services',
    items: [
      { 
        name: 'Sales AI', 
        href: '/services/sales-ai', 
        icon: LineChart,
        description: 'AI-powered sales enablement'
      },
      { 
        name: 'Marketing AI', 
        href: '/services/marketing-ai', 
        icon: Users,
        description: 'Intelligent marketing automation'
      },
      { 
        name: 'Customer Support AI', 
        href: '/services/customer-support-ai', 
        icon: Users,
        description: '24/7 intelligent support'
      }
    ]
  }
];

const industriesDropdown: DropdownItem[] = [
  { name: 'Field Sales', href: '/verticals/field-sales', icon: Users },
  { name: 'AdTech', href: '/verticals/adtech', icon: LineChart },
  { name: 'MarTech', href: '/verticals/martech', icon: Zap },
  { name: 'Telecom/Fibre', href: '/verticals/telecom', icon: Radio },
  { name: 'Tech SMB', href: '/verticals/tech-smb', icon: Smartphone },
  { name: 'Mid-Market', href: '/verticals/mid-market', icon: Building }
];

const resourcesDropdown: DropdownItem[] = [
  { 
    name: 'Case Studies', 
    href: '/case-studies', 
    icon: BookOpen,
    description: 'Real results from our implementations'
  },
  { 
    name: 'Implementation Playbooks', 
    href: '/playbooks', 
    icon: Calculator,
    description: 'Step-by-step guides for success'
  },
  { 
    name: 'Webinars', 
    href: '/webinars', 
    icon: Video,
    description: 'Expert-led sessions on AI implementation'
  }
];

interface NavLink {
  name: string;
  href: string;
  hasChildren?: boolean;
  dropdown?: DropdownItem[] | ServicesDropdown;
}

const navLinks: NavLink[] = [
  { name: 'Services', href: '#services', hasChildren: true, dropdown: servicesDropdown },
  { name: 'Industries', href: '#industries', hasChildren: true, dropdown: industriesDropdown },
  { name: 'Resources', href: '#resources', hasChildren: true, dropdown: resourcesDropdown },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' }
];

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isServicesDropdown = (dropdown: NavLink['dropdown']): dropdown is ServicesDropdown => {
    return Array.isArray(dropdown) && dropdown.length > 0 && 'title' in dropdown[0];
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-red-500 text-white py-2 text-center fixed top-0 left-0 right-0 z-50">
        <div className="container">
          <Link to="/special-offer" className="flex items-center justify-center gap-2 hover:text-white/90 transition-colors">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">
              Special offer: Get one AI workflow automated for free when you schedule a consultation!
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <header 
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          scrolled ? 'glass bg-background/95 backdrop-blur-md shadow-md top-0' : 'top-10',
          'h-[72px]'
        )}
      >
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="font-sora font-semibold tracking-tight">
                Giga<span className="text-red-500">Rev</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasChildren && handleDropdownEnter(link.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href}
                    className="text-sm flex items-center hover:text-accent transition-colors"
                  >
                    {link.name}
                    {link.hasChildren && (
                      <ChevronDown className="ml-1 h-4 w-4 opacity-60 group-hover:opacity-100" />
                    )}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-sm flex items-center hover:text-accent transition-colors"
                  >
                    {link.name}
                    {link.hasChildren && (
                      <ChevronDown className="ml-1 h-4 w-4 opacity-60 group-hover:opacity-100" />
                    )}
                  </a>
                )}
                <div className="angled-divider w-0 group-hover:w-full transition-all duration-300 h-0.5 mt-0.5"></div>

                {/* Dropdown Menu */}
                {link.hasChildren && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden min-w-[320px]">
                      {isServicesDropdown(link.dropdown) ? (
                        <div className="grid grid-cols-2 gap-4 p-4">
                          {link.dropdown.map((section) => (
                            <div key={section.title} className="space-y-2">
                              <h3 className="text-sm font-medium px-2">{section.title}</h3>
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-start gap-2 px-2 py-2 text-sm hover:bg-accent/10 rounded-md transition-colors"
                                >
                                  <item.icon className="h-4 w-4 mt-0.5" />
                                  <div>
                                    <div>{item.name}</div>
                                    {item.description && (
                                      <div className="text-xs text-muted-foreground">{item.description}</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-2">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-start gap-2 px-4 py-2 text-sm hover:bg-accent/10 rounded-md transition-colors"
                            >
                              <item.icon className="h-4 w-4 mt-0.5" />
                              <div>
                                <div>{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center">
            <Button 
              className="pill-button bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">
                <span>Talk to an AI Advisor</span>
                <ChevronRight className="button-icon h-4 w-4 transition-transform duration-200" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-30 overflow-y-auto">
          <nav className="container py-6">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-4">
                {link.hasChildren ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium py-2">
                      <span>{link.name}</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      {isServicesDropdown(link.dropdown) ? (
                        link.dropdown.map((section) => (
                          <div key={section.title} className="space-y-2">
                            <h3 className="text-sm font-medium text-muted-foreground">{section.title}</h3>
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-center gap-2 py-2 text-sm hover:text-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <item.icon className="h-4 w-4" />
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        ))
                      ) : (
                        link.dropdown?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center gap-2 py-2 text-sm hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.name}</span>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="block text-sm py-2 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="block text-sm py-2 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            ))}
            <Button 
              className="w-full pill-button bg-primary hover:bg-primary/90 mt-4"
              asChild
            >
              <Link to="/contact">
                <span>Talk to an AI Advisor</span>
                <ChevronRight className="button-icon h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
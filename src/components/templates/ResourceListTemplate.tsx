import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Download, ExternalLink } from 'lucide-react';

interface ResourceListTemplateProps {
  data: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      summary: string;
      tags: string[];
      [key: string]: any;
    }>;
    filters?: Array<{
      id: string;
      label: string;
    }> | {
      [key: string]: Array<{
        id: string;
        label: string;
      }>;
    };
    categories?: Array<{
      id: string;
      label: string;
    }>;
  };
  type: 'case-studies' | 'playbooks' | 'ai-use-cases';
}

const ResourceListTemplate: React.FC<ResourceListTemplateProps> = ({ data, type }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = data.items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    let matchesCategory = true;
    
    if (Array.isArray(data.filters)) {
      matchesFilter = selectedFilter === 'all' || item.category.toLowerCase() === selectedFilter.toLowerCase();
    }
    
    if (data.categories) {
      matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    }
    
    return matchesSearch && matchesFilter && matchesCategory;
  });

  const renderCaseStudyCard = (item: any) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{item.category}</Badge>
          <Badge variant="outline">{item.industry}</Badge>
        </div>
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="line-clamp-3">{item.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {item.metrics.slice(0, 4).map((metric: any, idx: number) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {item.tags.slice(0, 3).map((tag: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <Button asChild className="w-full">
          <a href={`/case-studies/${item.id}`}>Read Case Study</a>
        </Button>
      </CardContent>
    </Card>
  );

  const renderPlaybookCard = (item: any) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{item.category}</Badge>
          <Badge variant={item.difficulty === 'Beginner' ? 'default' : 
                         item.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
            {item.difficulty}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="line-clamp-3">{item.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">{item.duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Sections:</span>
            <span className="font-medium">{item.sections.length}</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm">Key Outcomes:</h4>
          <ul className="space-y-1">
            {item.outcomes.slice(0, 2).map((outcome: string, idx: number) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <a href={`/playbooks/${item.id}`}>View Guide</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={`/playbooks/${item.id}/download`}>
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderUseCaseCard = (item: any) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{item.industry}</Badge>
          <div className="flex gap-1">
            <Badge variant={item.complexity === 'Low' ? 'default' : 
                           item.complexity === 'Medium' ? 'secondary' : 'destructive'}>
              {item.complexity}
            </Badge>
            <Badge variant={item.impact === 'Low' ? 'outline' : 
                           item.impact === 'Medium' ? 'secondary' : 'default'}>
              {item.impact} Impact
            </Badge>
          </div>
        </div>
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="line-clamp-3">{item.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Timeline:</span>
            <span className="font-medium">{item.implementation.timeline}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Payback:</span>
            <span className="font-medium">{item.roi.paybackPeriod}</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm">Key Benefits:</h4>
          <ul className="space-y-1">
            {item.benefits.slice(0, 2).map((benefit: string, idx: number) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Button asChild className="w-full" size="sm">
          <a href={`/ai-use-cases/${item.id}`}>Explore Use Case</a>
        </Button>
      </CardContent>
    </Card>
  );

  const renderCard = (item: any) => {
    switch (type) {
      case 'case-studies':
        return renderCaseStudyCard(item);
      case 'playbooks':
        return renderPlaybookCard(item);
      case 'ai-use-cases':
        return renderUseCaseCard(item);
      default:
        return renderCaseStudyCard(item);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            {Array.isArray(data.filters) && (
              <div className="flex gap-2 flex-wrap">
                {data.filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            )}
            
            {!Array.isArray(data.filters) && data.filters?.industries && (
              <div className="flex gap-2 flex-wrap">
                {data.filters.industries.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            )}
            
            {data.categories && (
              <div className="flex gap-2 flex-wrap">
                {data.categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Resource Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id}>
                {renderCard(item)}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}

          {/* Download All CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="red-button">
                <a href="/contact">Get Custom Recommendations</a>
              </Button>
              {type === 'playbooks' && (
                <Button asChild variant="outline" size="lg">
                  <a href="/playbooks/download-all">
                    <Download className="w-4 h-4 mr-2" />
                    Download All Guides
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceListTemplate;
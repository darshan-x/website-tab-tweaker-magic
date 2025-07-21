import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/components/pages/HomePage';
import { Blog } from '@/components/pages/Blog';
import AboutUs from '@/components/pages/AboutUs';
import AIImplementationGuide from '@/components/pages/blog/AIImplementationGuide';
import FieldSalesAI from '@/components/pages/blog/FieldSalesAI';
import SMBAIGuide from '@/components/pages/blog/SMBAIGuide';
import AIJobsArticle from '@/components/pages/blog/AIJobsArticle';
import BeyondExponential from '@/components/pages/blog/BeyondExponential';
import StakeholderContent from '@/components/pages/blog/StakeholderContent';
import VibeMarketing from '@/components/pages/blog/VibeMarketing';
import AgenticAI from '@/components/pages/blog/AgenticAI';
import CaseStudies from '@/components/pages/CaseStudies';
import ChiprCaseStudy from '@/components/pages/case-studies/ChiprCaseStudy';
import NotionCaseStudy from '@/components/pages/case-studies/NotionCaseStudy';
import RapidPrototyping from '@/components/pages/services/RapidPrototyping';
import AIImplementation from '@/components/pages/services/AIImplementation';
import FullStackDev from '@/components/pages/services/FullStackDev';
import SalesAI from '@/components/pages/services/SalesAI';
import MarketingAI from '@/components/pages/services/MarketingAI';
import CustomerSupportAI from '@/components/pages/services/CustomerSupportAI';
import ImplementationPlaybooks from '@/components/pages/ImplementationPlaybooks';
import Webinars from '@/components/pages/Webinars';
import WebinarRegistration from '@/components/pages/WebinarRegistration';
import AIChatbot from '@/components/shared/AIChatbot';
import AIUseCases from '@/components/pages/AIUseCases';
import ContactSales from '@/components/pages/ContactSales';
import ThankYou from '@/components/pages/ThankYou';
import SpecialOffer from '@/components/pages/SpecialOffer';

// Import vertical pages
import FieldSalesVertical from '@/components/pages/verticals/FieldSales';
import AdTechVertical from '@/components/pages/verticals/AdTech';
import MarTechVertical from '@/components/pages/verticals/MarTech';
import TelecomVertical from '@/components/pages/verticals/Telecom';
import TechSMBVertical from '@/components/pages/verticals/TechSMB';
import MidMarketVertical from '@/components/pages/verticals/MidMarket';

import './App.css';

// Page Tracker component to handle virtual page views
function PageTracker() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only track page views on POP, PUSH, and REPLACE navigation events
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title
      });
    }
  }, [location.pathname, navigationType]);

  return null;
}

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <Router>
          <ScrollToTop />
          <PageTracker />
          <div className="min-h-screen bg-neutral-dark text-neutral-light">
            <Navbar scrolled={scrolled} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog/ai-implementation-guide-2025" element={<AIImplementationGuide />} />
                <Route path="/blog/field-sales-ai" element={<FieldSalesAI />} />
                <Route path="/blog/smb-ai-guide" element={<SMBAIGuide />} />
                <Route path="/blog/ai-jobs-article" element={<AIJobsArticle />} />
                <Route path="/blog/beyond-exponential" element={<BeyondExponential />} />
                <Route path="/blog/stakeholder-content-automation" element={<StakeholderContent />} />
                <Route path="/blog/vibe-marketing" element={<VibeMarketing />} />
                <Route path="/blog/agentic-ai-challenges" element={<AgenticAI />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/chipr" element={<ChiprCaseStudy />} />
                <Route path="/case-studies/notion" element={<NotionCaseStudy />} />
                <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />
                <Route path="/services/ai-implementation" element={<AIImplementation />} />
                <Route path="/services/full-stack-development" element={<FullStackDev />} />
                <Route path="/services/sales-ai" element={<SalesAI />} />
                <Route path="/services/marketing-ai" element={<MarketingAI />} />
                <Route path="/services/customer-support-ai" element={<CustomerSupportAI />} />
                <Route path="/playbooks" element={<ImplementationPlaybooks />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/webinar-registration" element={<WebinarRegistration />} />
                <Route path="/ai-use-cases" element={<AIUseCases />} />
                <Route path="/contact" element={<ContactSales />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/special-offer" element={<SpecialOffer />} />
                
                {/* Vertical Routes */}
                <Route path="/verticals/field-sales" element={<FieldSalesVertical />} />
                <Route path="/verticals/adtech" element={<AdTechVertical />} />
                <Route path="/verticals/martech" element={<MarTechVertical />} />
                <Route path="/verticals/telecom" element={<TelecomVertical />} />
                <Route path="/verticals/tech-smb" element={<TechSMBVertical />} />
                <Route path="/verticals/mid-market" element={<MidMarketVertical />} />
              </Routes>
            </main>
            <Footer />
            <AIChatbot />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
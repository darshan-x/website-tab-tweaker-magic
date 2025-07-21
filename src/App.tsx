
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service pages
const RapidPrototyping = lazy(() => import("./pages/services/RapidPrototyping"));
const AIImplementation = lazy(() => import("./pages/services/AIImplementation"));
const FullStackDev = lazy(() => import("./pages/services/FullStackDev"));
const SalesAI = lazy(() => import("./pages/services/SalesAI"));
const MarketingAI = lazy(() => import("./pages/services/MarketingAI"));
const CustomerSupportAI = lazy(() => import("./pages/services/CustomerSupportAI"));

// Industry verticals
const FieldSales = lazy(() => import("./pages/verticals/FieldSales"));
const AdTech = lazy(() => import("./pages/verticals/AdTech"));
const MarTech = lazy(() => import("./pages/verticals/MarTech"));
const Telecom = lazy(() => import("./pages/verticals/Telecom"));
const TechSMB = lazy(() => import("./pages/verticals/TechSMB"));
const MidMarket = lazy(() => import("./pages/verticals/MidMarket"));

// Content pages
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Webinars = lazy(() => import("./pages/Webinars"));
const Playbooks = lazy(() => import("./pages/Playbooks"));
const AIUseCases = lazy(() => import("./pages/AIUseCases"));
const SpecialOffer = lazy(() => import("./pages/SpecialOffer"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading component with animation
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-electric-indigo border-t-transparent rounded-full"
    />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />
            
            {/* Service Pages */}
            <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />
            <Route path="/services/ai-implementation" element={<AIImplementation />} />
            <Route path="/services/full-stack-development" element={<FullStackDev />} />
            <Route path="/services/sales-ai" element={<SalesAI />} />
            <Route path="/services/marketing-ai" element={<MarketingAI />} />
            <Route path="/services/customer-support-ai" element={<CustomerSupportAI />} />
            
            {/* Industry Verticals */}
            <Route path="/verticals/field-sales" element={<FieldSales />} />
            <Route path="/verticals/adtech" element={<AdTech />} />
            <Route path="/verticals/martech" element={<MarTech />} />
            <Route path="/verticals/telecom" element={<Telecom />} />
            <Route path="/verticals/tech-smb" element={<TechSMB />} />
            <Route path="/verticals/mid-market" element={<MidMarket />} />
            
            {/* Content Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/playbooks" element={<Playbooks />} />
            <Route path="/ai-use-cases" element={<AIUseCases />} />
            <Route path="/special-offer" element={<SpecialOffer />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/shared/SEOHead';
import PageHeader from '@/components/shared/PageHeader';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-is-vibe', title: 'What Is Vibe Marketing?' },
  { id: 'core-principles', title: 'Core Principles' },
  { id: 'traditional-vs-vibe', title: 'Why It Beats Traditional Campaigns' },
  { id: 'use-cases', title: 'Use-Case Playbook' },
  { id: 'implementation', title: 'Implementation Guide' },
  { id: 'pitfalls', title: 'Pitfalls & Fixes' },
  { id: 'takeaways', title: 'Key Takeaways' }
];

export default function VibeMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Vibe Marketing: How AI-Powered Emotion Is Winning Hearts in 2025 | GigaRev"
        description="Discover how vibe marketing pairs authentic storytelling with AI-driven speed and personalization to create winning campaigns in 2025."
        keywords="vibe marketing, AI marketing, emotional marketing, brand storytelling, marketing automation"
        ogUrl="/blog/vibe-marketing"
      />
      
      <PageHeader 
        title="Vibe Marketing: How AI-Powered Emotion Is Winning Hearts (and Budgets) in 2025" 
        description="Why the next wave of growth belongs to brands that master the 'vibe'"
      />
      
      <div className="pt-20">
        <article className="container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[120px] space-y-8">
                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Table of Contents</h4>
                  <nav className="space-y-3">
                    {tableOfContents.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Share Article</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="hover:text-blue-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:text-blue-600">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:text-blue-500">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="max-w-4xl">
                {/* Mobile Table of Contents - Visible only on mobile */}
                <div className="lg:hidden mb-8 p-6 bg-card border border-border rounded-xl space-y-4">
                  <h4 className="font-sora font-medium">Table of Contents</h4>
                  <nav className="space-y-3">
                    {tableOfContents.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
                
                {/* Article Meta */}
                <div className="mb-12 p-6 bg-card border border-border rounded-xl">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>Darshan Karthik, CMO</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>March 26, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Marketing', 'AI', 'Brand Strategy'].map((tag) => (
                      <div
                        key={tag}
                        className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12">
                  <img 
                    src="https://res.cloudinary.com/dpxfwxxzi/image/upload/v1747381422/d868b452-5350-4d2c-9daf-b65390640397_xghctp.png"
                    alt="Vibe Marketing"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div id="introduction" className="scroll-mt-32">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                      The marketing landscape of 2025 is evolving rapidly, with brands discovering that success lies not just in what they say, but in how they make their audience feel. Enter vibe marketing—a strategic fusion of authentic storytelling and AI-powered execution that's revolutionizing how brands connect with their audiences.
                    </p>
                  </div>

                  <div id="what-is-vibe" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      What Is Vibe Marketing?
                    </h2>
                    <p className="mb-6">
                      Vibe marketing is a strategic approach—not a platform—that pairs authentic storytelling with AI-driven speed and personalization. A marketer sets the creative mood (the vibe); automation handles the heavy lifting, letting even lean teams launch multi-channel campaigns in hours instead of weeks.
                    </p>
                  </div>

                  <div id="core-principles" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Core Principles at a Glance
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Principle</th>
                            <th className="border border-border p-4 text-left">What It Means</th>
                            <th className="border border-border p-4 text-left">Why It Matters</th>
                            <th className="border border-border p-4 text-left">AI's Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Emotional & cultural resonance</td>
                            <td className="border border-border p-4">Make audiences feel something aligned with current culture</td>
                            <td className="border border-border p-4">Feelings drive recall and loyalty</td>
                            <td className="border border-border p-4">Surfaces trend data, suggests timely angles</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Authentic storytelling</td>
                            <td className="border border-border p-4">Drop the corporate mask; sound human</td>
                            <td className="border border-border p-4">Builds trust in an AI-fatigued world</td>
                            <td className="border border-border p-4">Drafts copy/visuals; human refines tone</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Speed & agility</td>
                            <td className="border border-border p-4">Launch when the conversation is hot</td>
                            <td className="border border-border p-4">Captures fleeting attention</td>
                            <td className="border border-border p-4">Generates full asset suites in minutes</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Personalization</td>
                            <td className="border border-border p-4">Hyper-relevant messages at scale</td>
                            <td className="border border-border p-4">Boosts CTR, conversion, LTV</td>
                            <td className="border border-border p-4">Dynamically swaps copy, imagery, offers</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Human-AI synergy</td>
                            <td className="border border-border p-4">Humans curate vibe; AI executes</td>
                            <td className="border border-border p-4">Combines quality with efficiency</td>
                            <td className="border border-border p-4">Automates execution so humans steer strategy</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="traditional-vs-vibe" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Why It Beats Traditional Campaigns
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Dimension</th>
                            <th className="border border-border p-4 text-left">Traditional Marketing<br/>(1 = low, 5 = high)</th>
                            <th className="border border-border p-4 text-left">Vibe Marketing<br/>(1 = low, 5 = high)</th>
                            <th className="border border-border p-4 text-left">Key Advantage of Vibe</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Speed to Market</td>
                            <td className="border border-border p-4">2</td>
                            <td className="border border-border p-4">5</td>
                            <td className="border border-border p-4">Real-time launch of campaigns</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Emotional Resonance</td>
                            <td className="border border-border p-4">3</td>
                            <td className="border border-border p-4">5</td>
                            <td className="border border-border p-4">Storytelling focused on feelings</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Personalization</td>
                            <td className="border border-border p-4">2</td>
                            <td className="border border-border p-4">5</td>
                            <td className="border border-border p-4">AI-driven micro-targeting at scale</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Cost Efficiency</td>
                            <td className="border border-border p-4">2</td>
                            <td className="border border-border p-4">4</td>
                            <td className="border border-border p-4">Automation reduces production costs</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Team Size Needed</td>
                            <td className="border border-border p-4">4</td>
                            <td className="border border-border p-4">1</td>
                            <td className="border border-border p-4">One marketer + AI can match large teams</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="use-cases" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Use-Case Playbook
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Industry</th>
                            <th className="border border-border p-4 text-left">Example Campaign</th>
                            <th className="border border-border p-4 text-left">Vibe Angle</th>
                            <th className="border border-border p-4 text-left">Business Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Retail & CPG</td>
                            <td className="border border-border p-4">Nike "You Can't Stop Us" montage</td>
                            <td className="border border-border p-4">Inspirational unity</td>
                            <td className="border border-border p-4">Spike in brand affinity and product demand</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Hospitality</td>
                            <td className="border border-border p-4">Boutique hotel's one-prompt summer sale</td>
                            <td className="border border-border p-4">Warm, carefree family vibe</td>
                            <td className="border border-border p-4">35% lift in direct bookings within one week</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Entertainment</td>
                            <td className="border border-border p-4">Barbie (2023) release</td>
                            <td className="border border-border p-4">Nostalgia + playful pink world</td>
                            <td className="border border-border p-4">Record global opening weekend</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Digital Ads / DTC</td>
                            <td className="border border-border p-4">Solo marketer A/B-tests six AI-generated ads overnight</td>
                            <td className="border border-border p-4">Humor vs. sentiment variants</td>
                            <td className="border border-border p-4">2× ROAS in 48 hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Vibe Marketing Infographic */}
                    <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12">
                      <img 
                        src="https://res.cloudinary.com/dpxfwxxzi/image/upload/v1747383263/infographic_vibe_vs_traditional_bbw4lu.png"
                        alt="Vibe Marketing vs Traditional Marketing Infographic"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div id="implementation" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Implementing Vibe Marketing in Your Org
                    </h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Define the vibe</h3>
                        <p>Clarify emotion, cultural hook, brand voice.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Wire up an AI tool-chain</h3>
                        <p>Copy/visual generation, dynamic ad creative, automated distribution.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Launch micro-campaigns fast</h3>
                        <p>Let AI spin up variations; go live in hours.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Monitor and tune</h3>
                        <p>Track engagement & conversion; double down on the winning vibe.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-sora font-medium mb-4">Keep it human-led</h3>
                        <p>Final review for tone, ethics, and inclusivity.</p>
                      </div>
                    </div>
                  </div>

                  <div id="pitfalls" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Pitfalls & Fixes
                    </h2>
                    
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-card/50">
                            <th className="border border-border p-4 text-left">Common Pitfall</th>
                            <th className="border border-border p-4 text-left">How to Avoid It</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-4">Chasing every trend → tone-deaf content</td>
                            <td className="border border-border p-4">Filter cultural moments through clear brand values</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">"Algorithmic mush" – all style, no substance</td>
                            <td className="border border-border p-4">Anchor every campaign to a tangible product benefit</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-4">Over-automation erodes authenticity</td>
                            <td className="border border-border p-4">Maintain a human review loop for nuance and compliance</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="takeaways" className="scroll-mt-32">
                    <h2 className="text-3xl font-sora font-semibold mb-6">
                      Key Takeaways
                    </h2>
                    
                    <div className="space-y-6 mb-12">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Emotion &gt; features.</p>
                        <p className="text-muted-foreground">A memorable vibe cuts through content overload.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">AI amplifies creativity, it doesn't replace it.</p>
                        <p className="text-muted-foreground">Humans provide heart; machines provide scale.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Speed wins attention.</p>
                        <p className="text-muted-foreground">Real-time relevance separates viral from invisible.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-lg mb-2">Small teams can punch far above their weight.</p>
                        <p className="text-muted-foreground">With the right AI stack, one marketer can do the work of ten.</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg font-medium text-primary">
                        Ready to start vibing? Define your brand's emotional north star, plug in AI for execution, and watch resonance—and revenue—rise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
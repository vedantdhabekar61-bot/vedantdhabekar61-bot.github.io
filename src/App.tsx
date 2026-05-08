import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  Code2,
  Palette,
  Layers,
  Cpu,
  Sparkles,
  Loader2
} from "lucide-react";
import { useState, useRef } from "react";
import { generateAuraDescription } from "./services/gemini";

const PROJECTS = [
  {
    title: "EcoSphere",
    category: "Sustainable E-commerce",
    description: "A high-performance marketplace focusing on regenerative products.",
    image: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Three.js", "Node.js"]
  },
  {
    title: "Nova Dashboard",
    category: "Fintech Platform",
    description: "Real-time analytics for crypto assets with neural forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["TypeScript", "D3.js", "GraphQL"]
  },
  {
    title: "Lens Architecture",
    category: "Brand Identity",
    description: "Visual identity system for an avant-garde architectural firm.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    tags: ["Design", "Branding"]
  }
];

const SKILLS = [
  { icon: Code2, label: "Frontend", tech: "React, Next.js, Vue" },
  { icon: Palette, label: "Design", tech: "Figma, Webflow, Adobe CC" },
  { icon: Cpu, label: "Systems", tech: "Rust, Node.js, Go" },
  { icon: Layers, label: "DevOps", tech: "Docker, AWS, Vercel" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleGenerate = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    const result = await generateAuraDescription(aiInput);
    setAiResult(result);
    setIsAiLoading(false);
  };

  return (
    <div className="relative min-h-screen font-sans flex flex-col md:flex-row bg-brand-dark" ref={containerRef}>
      {/* Decorative Vertical Rail (Desktop) */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] items-center gap-8 z-40">
        <div className="h-24 w-[1px] bg-white/10"></div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/10 font-bold whitespace-nowrap rotate-180">Selected Portfolio Volume IV</span>
        <div className="h-24 w-[1px] bg-white/10"></div>
      </div>

      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[380px] flex-col p-16 border-r border-white/5 bg-brand-aside z-50">
        <div className="mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-extrawide uppercase text-white/90"
          >
            Aura Design
          </motion.h2>
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 mt-3 font-mono">San Francisco &mdash; Creative Lab</p>
        </div>

        <nav className="flex flex-col gap-10 text-lg font-serif italic mb-auto">
          {[
            { id: "work", num: "01", label: "Selected Works" },
            { id: "about", num: "02", label: "Studio Philosophy" },
            { id: "ailab", num: "03", label: "Aura AI Lab" },
            { id: "contact", num: "04", label: "Contact" }
          ].map((item, i) => (
            <motion.a
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.id}`}
              className="group flex items-center gap-6 text-white/30 transition-colors duration-300 hover:text-white"
            >
              <span className="not-italic text-[9px] font-sans font-bold tracking-widest text-white/10 group-hover:text-white/40">
                {item.num}
              </span>
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="text-[8px] uppercase tracking-[0.4em] text-white/20 mb-5 font-bold">Current Status</div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
            <p className="text-[11px] font-light tracking-wide text-white/50 italic font-serif">Accepting new commissions</p>
          </div>
        </div>
      </aside>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-6 py-8 flex justify-between items-center border-b border-white/5">
        <div className="text-sm font-bold tracking-extrawide uppercase">Aura</div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        className="fixed inset-0 bg-brand-aside z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
      >
         {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif italic hover:text-brand-gold"
            >
              {item}
            </a>
          ))}
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-[380px]">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center px-10 md:px-20 border-b border-white/5 bg-brand-dark overflow-hidden">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Abstract"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[12vw] md:text-[80px] leading-[0.95] font-serif text-white/95"
            >
              Refined <br/> 
              <span className="italic text-white/30">Structures</span> <br/>
              of Thought.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 max-w-sm text-sm text-white/40 leading-relaxed font-light"
            >
              Providing visual clarity for high-concept brands. Bridging the tension between heritage craftsmanship and digital evolution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <a href="#work" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-white transition-colors">
                Explore Work <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="grid grid-cols-1 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-10 md:p-14 border-b border-white/5 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-white/[0.02] ${i % 2 === 0 ? 'lg:border-r bg-brand-accent-bg' : 'bg-brand-dark'}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-white/10"></div>
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-mono">Vol. 0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic text-white/80 group-hover:text-white transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/30 text-[11px] uppercase tracking-widest mb-6 font-mono">{project.category}</p>
                </div>
                <div className="aspect-video overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold">View Phase</span>
                <ArrowUpRight size={18} className="text-white/40" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* Philosophy / About Section */}
        <section id="about" className="py-32 px-10 md:px-20 border-b border-white/5">
          {/* ... existing about content ... */}
        </section>

        {/* AI Lab Section */}
        <section id="ailab" className="py-32 px-10 md:px-20 border-b border-white/5 bg-brand-accent-bg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Sparkles size={400} strokeWidth={0.5} />
          </div>
          
          <div className="max-w-4xl relative z-10">
            <h2 className="text-xs font-bold tracking-extrawide uppercase text-brand-gold mb-12 flex items-center gap-3">
               <Sparkles size={14} /> Aura AI Lab
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="text-4xl font-serif italic mb-8 leading-tight">
                  Refine your <br /> project narrative.
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light mb-10">
                  Experiment with our proprietary AI model to generate sophisticated project descriptions that match the Aura identity. Useful for case studies and pitch decks.
                </p>
                
                <div className="space-y-4">
                  <textarea 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="Describe your project roughly (e.g. 'A minimal weather app focused on typography and data')."
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-5 text-sm h-32 focus:border-brand-gold outline-none transition-colors resize-none placeholder:text-white/10"
                  />
                  <button 
                    onClick={handleGenerate}
                    disabled={isAiLoading || !aiInput.trim()}
                    className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-gold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isAiLoading ? <Loader2 className="animate-spin" size={16} /> : "Synthesize Narrative"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center min-h-[300px] border border-white/5 rounded-2xl p-10 bg-brand-dark/50 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {aiResult ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <span className="text-[8px] uppercase tracking-widest text-brand-gold font-mono">Synthesized Result</span>
                      <p className="text-xl font-serif italic text-white/80 leading-relaxed">
                        "{aiResult}"
                      </p>
                      <button 
                         onClick={() => { navigator.clipboard.writeText(aiResult); }}
                         className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                      >
                        Copy to Clipboard
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center mx-auto text-white/10">
                        <Sparkles size={20} />
                      </div>
                      <p className="text-[10px] uppercase tracking-extrawide text-white/10">Awaiting input signal</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="py-32 px-10 md:px-20 bg-brand-aside">
          <div className="max-w-4xl text-center md:text-left">
            <h2 className="text-8xl md:text-[140px] font-serif italic text-white/95 leading-none mb-20 tracking-tighter">
              Let's craft <br /> legacy.
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <a href="mailto:contact@aura.design" className="text-2xl md:text-4xl font-light text-white/80 hover:text-brand-gold transition-colors border-b border-white/10 pb-4">
                contact@aura.design
              </a>
              <div className="flex gap-10 text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                <a href="#" className="hover:text-white transition-colors">Twi</a>
                <a href="#" className="hover:text-white transition-colors">Ins</a>
                <a href="#" className="hover:text-white transition-colors">Dri</a>
              </div>
            </div>
          </div>
          
          <footer className="mt-40 flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 text-[8px] uppercase tracking-[0.4em] text-white/10 font-bold gap-6">
            <p>© 2026 Aura Design Lab — All Rights Reserved</p>
            <p>San Francisco, CA — Est. 2020</p>
          </footer>
        </section>
      </main>
    </div>
  );
}

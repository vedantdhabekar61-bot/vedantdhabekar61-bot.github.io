import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Globe,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Loader2,
  Bot
} from "lucide-react";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    title: "aineed.in",
    category: "AI Aggregator & Workflow",
    description: "Finding the perfect AI with integrated automation workflows to scale efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    tags: ["AI", "n8n", "SaaS"],
    link: "https://aineed.in"
  },
  {
    title: "SaaS API Systems",
    category: "Full Stack Development",
    description: "Custom web applications integrated with secure API key management and scalable backends.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["HTML", "APIs", "Web Dev"]
  },
  {
    title: "Automation Engine",
    category: "AI Strategy",
    description: "Leveraging n8n and Google AI Studio to automate complex business processes.",
    image: "https://images.unsplash.com/photo-1518433278988-2956d44532e1?auto=format&fit=crop&q=80&w=1200",
    tags: ["Automation", "Workflow"]
  }
];

const SKILLS = [
  { icon: Code2, label: "Frontend", tech: "HTML, React, Modern Web Dev" },
  { icon: Database, label: "Backend", tech: "API Integration, Node.js" },
  { icon: Bot, label: "AI/Automation", tech: "n8n, Google AI Studio, Gemini" },
  { icon: Layers, label: "Business", tech: "SaaS Building, Market Strategy" }
];

export default function App() {
  const [aiInput, setAiInput] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleGenerate = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    // Mimicking synthesis logic for the UI
    setTimeout(() => {
      setAiResult("A performance-driven SaaS architecture designed for high-scale AI workflows.");
      setIsAiLoading(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen font-sans flex flex-col md:flex-row bg-[#050505] text-white selection:bg-white selection:text-black" ref={containerRef}>
      
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[380px] flex-col p-16 border-r border-white/5 bg-[#080808] z-50">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-white/90"
          >
            Vedant Dhabekar
          </motion.h2>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 mt-3 font-mono">India — SaaS Architect</p>
        </div>

        <nav className="flex flex-col gap-10 text-lg font-serif italic mb-auto">
          {['Work', 'Skills', 'Lab', 'Contact'].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group flex items-center gap-6 text-white/30 hover:text-white transition-all">
              <span className="not-italic text-[9px] font-sans font-bold text-white/10 group-hover:text-white/40">0{i+1}</span>
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-8">
          <div className="flex gap-5">
            <a href="https://github.com/vedantdhabekar61-bot" target="_blank" className="text-white/20 hover:text-white"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/vedant-dhabekar-a47477255" target="_blank" className="text-white/20 hover:text-white"><Linkedin size={20}/></a>
            <a href="mailto:Vedantdhabekar61@gmail.com" className="text-white/20 hover:text-white"><Mail size={20}/></a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <p className="text-[11px] font-light text-white/50 italic">Available for SaaS & AI Dev</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[380px]">
        
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center px-10 md:px-20 border-b border-white/5 overflow-hidden">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
          </motion.div>

          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10vw] md:text-[85px] leading-[0.9] font-serif"
            >
              Building <br/> 
              <span className="italic text-white/30 text-[11vw] md:text-[95px]">Automated</span> <br/>
              Futures.
            </motion.h1>
            
            <p className="mt-10 max-w-md text-sm text-white/40 leading-relaxed font-light">
              I am Vedant Dhabekar, a business-focused developer from India. I specialize in HTML, SaaS architecture, and API-driven automation. 
              Currently scaling <span className="text-white">aineed.in</span> to bridge the gap between human workflow and AI.
            </p>

            <div className="mt-16">
              <a href="#work" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white">
                View Portfolio <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all" />
              </a>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section id="work" className="grid grid-cols-1 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="p-12 md:p-16 border-b border-white/5 flex flex-col justify-between group hover:bg-white/[0.01] transition-colors">
              <div className="space-y-6">
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-mono">Project 0{i + 1}</span>
                <h3 className="text-3xl font-serif italic">{project.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light">{project.description}</p>
                <div className="aspect-video overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <div className="flex gap-3">
                  {project.tags.map(tag => <span key={tag} className="text-[9px] uppercase border border-white/10 px-2 py-1">{tag}</span>)}
                </div>
                <ArrowUpRight size={20} className="text-white/40" />
              </div>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-10 md:px-20 border-b border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILLS.map((skill) => (
              <div key={skill.label} className="space-y-4">
                <skill.icon size={24} className="text-white/20" strokeWidth={1} />
                <h4 className="text-[10px] uppercase tracking-widest font-bold">{skill.label}</h4>
                <p className="text-xs text-white/40 font-light">{skill.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Lab Section */}
        <section id="lab" className="py-32 px-10 md:px-20 border-b border-white/5 bg-white/[0.01]">
          <div className="max-w-4xl grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-8 flex items-center gap-2">
                <Sparkles size={14} /> AI Synthesis Lab
              </h2>
              <h3 className="text-4xl font-serif italic mb-6">Refine the Vision.</h3>
              <p className="text-sm text-white/40 mb-10 leading-relaxed font-light">Input a raw project concept and use AI to synthesize a professional SaaS narrative.</p>
              <textarea 
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Rough project idea..."
                className="w-full bg-black/50 border border-white/10 rounded-lg p-5 text-sm h-32 focus:border-white/30 outline-none transition-all resize-none"
              />
              <button onClick={handleGenerate} className="w-full mt-4 bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-blue-500 hover:text-white transition-all">
                {isAiLoading ? <Loader2 className="animate-spin mx-auto" size={16} /> : "Synthesize Workflow"}
              </button>
            </div>
            <div className="min-h-[250px] border border-white/5 rounded-2xl p-10 bg-black/40 backdrop-blur-sm flex flex-col justify-center italic text-white/60">
              {aiResult || "Awaiting input signal..."}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="py-32 px-10 md:px-20 bg-[#080808]">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-[100px] font-serif italic leading-none mb-20">Let's craft <br/> the next SaaS.</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <a href="mailto:Vedantdhabekar61@gmail.com" className="text-2xl md:text-3xl font-light hover:text-blue-500 transition-colors border-b border-white/10 pb-2">
                Vedantdhabekar61@gmail.com
              </a>
              <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-white/20">
                <a href="https://github.com/vedantdhabekar61-bot" className="hover:text-white transition-all">GitHub</a>
                <a href="https://www.linkedin.com/in/vedant-dhabekar-a47477255" className="hover:text-white transition-all">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <footer className="mt-40 flex flex-col md:flex-row justify-between pt-10 border-t border-white/5 text-[8px] uppercase tracking-[0.4em] text-white/10 font-bold">
            <p>© 2026 Vedant Dhabekar — Nagpur, India</p>
            <p>Built with AI & Intent</p>
          </footer>
        </section>

      </main>
    </div>
  );
}

import { projects } from '../src/data/Project';
import { Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import Github from 'lucide-react';

export default function App() {
  return (
    <div className="bg-midnight min-h-screen text-beige font-sans selection:bg-beige selection:text-midnight">
      
      {/* 1. Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-haze/30">
        <span className="font-display text-2xl font-bold tracking-tighter italic">GS.</span>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] text-muted-purple">
          <a href="#work" className="hover:text-beige transition-colors">Work</a>
          <a href="#skills" className="hover:text-beige transition-colors">Stack</a>
          <a href="#contact" className="hover:text-beige transition-colors">Contact</a>
        </div>
        <button className="flex items-center gap-2 border border-beige/20 px-4 py-2 rounded-full text-xs hover:bg-beige hover:text-midnight transition-all">
          <Download size={14} /> Resume
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* 2. Hero Section */}
        <header className="py-24 md:py-40 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display leading-[1.1]">
            Building <span className="italic font-light">smarter</span> web 
            experiences for the future.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-purple font-light leading-relaxed max-w-2xl">
            I'm Gopika Sri Ramesh, an MCA student focused on the intersection of 
            Full-Stack Development and AI. Currently refining digital systems in India.
          </p>
        </header>

        {/* 3. Project Grid (Bento Style) */}
        <section id="work" className="grid grid-cols-1 md:grid-cols-6 gap-4 pb-20">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group p-8 rounded-3xl bg-haze/20 border border-haze/40 hover:border-beige/30 transition-all duration-500 
                ${project.featured ? 'md:col-span-4' : 'md:col-span-2'}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-muted-purple border border-haze/60 px-2 py-1 rounded">
                  {project.category}
                </span>
                <ExternalLink size={18} className="text-muted-purple group-hover:text-beige transition-colors" />
              </div>
              <h3 className="text-3xl font-display mt-6 mb-4">{project.title}</h3>
              <p className="text-muted-purple text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] text-beige/60 bg-midnight px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
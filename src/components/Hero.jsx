import { useState, useEffect } from 'react';
import { TbArrowUpRight } from "react-icons/tb";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(245, 245, 220, 0.04), transparent 80%)`
        }}
      />

        <h1 className="text-6xl md:text-[8rem] font-display leading-[1] tracking-tighter">
          Engineering <br />
          <span className="italic font-light text-beige/90">Intelligent</span> <br />
          <span className="text-beige/30 hover:text-beige transition-colors duration-700 cursor-default">Interfaces.</span>
        </h1>

        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <p className="text-muted-purple text-lg md:text-xl max-w-md leading-relaxed font-light">
            Crafting high-performance <span className="text-beige italic">Full-Stack</span> applications 
            and <span className="text-beige">Computer Vision</span> solutions.
          </p>
          
          <a 
            href="#work" 
            className="group flex items-center gap-3 text-beige uppercase tracking-widest text-xs border border-beige/20 px-8 py-5 rounded-full hover:bg-beige hover:text-midnight transition-all duration-500"
          >
            Explore Projects <TbArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </a>
        </div>
    </header>
  );
}
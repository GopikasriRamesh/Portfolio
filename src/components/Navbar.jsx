import { useState, useEffect } from 'react';
import { TbDownload, TbMenu, TbX } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Replace with your actual file path in the public folder
    const link = document.createElement('a');
    // link.href = '/Gopika_Resume.pdf'; 
    // link.download = 'Gopika_Sri_Ramesh_Resume.pdf';
    link.click();
    toast.success('Resume downloaded successfully!', {
      style: {
        borderRadius: '10px',
        background: '#1A1221',
        color: '#F5F5DC',
        border: '1px solid #3D2B4D',
      },
    });
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Toaster position="bottom-right" />
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-4xl
        ${scrolled ? 'top-4' : 'top-8'}`}>
        
        <div className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500
          ${scrolled 
            ? 'bg-midnight/30 backdrop-blur-xl border-haze/50 shadow-2xl' 
            : 'bg-transparent border-transparent'}`}>
          
          {/* GS Clickable Logo */}
          <a href="#" className="font-display text-2xl font-bold italic tracking-tighter text-beige hover:scale-110 transition-transform">
            GS.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-muted-purple hover:text-beige transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-beige transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <button 
            onClick={handleDownload}
            className="hidden md:flex items-center gap-2 bg-beige text-midnight px-5 py-2 rounded-full text-xs font-medium hover:bg-beige/80 hover:shadow-[0_0_20px_rgba(245,245,220,0.3)] transition-all"
          >
            <TbDownload size={16} /> Resume
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-beige" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <TbX size={24} /> : <TbMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-midnight/95 backdrop-blur-2xl border border-haze/50 rounded-3xl p-8 flex flex-col gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-beige text-xl font-display italic border-b border-haze/30 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 bg-beige text-midnight py-4 rounded-2xl font-bold"
              >
                <TbDownload size={18} /> Download Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
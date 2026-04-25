import { motion } from 'framer-motion';
import { TbMail, TbBrandLinkedin, TbBrandGithub, TbDownload, TbArrowUpRight } from "react-icons/tb";
import toast from 'react-hot-toast';

export default function Contact() {
  const email = "srigopika011@gmail.com";
  const linkedin = "https://www.linkedin.com/in/gopika-sri-/";
  const github = "https://github.com/GopikasriRamesh/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!', {
      style: {
        borderRadius: '8px',
        background: '#1A1221',
        color: '#F2E8D5',
        fontSize: '12px'
      },
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Gopika_Resume.pdf'; 
    link.download = 'Gopika_Sri_Ramesh_Resume.pdf';
    link.click();
  };

  return (
    <section 
      id="contact" 
      className="relative bg-beige text-midnight py-12 md:py-20 px-6 mt-10 mb-8 -mx-4 md:-mx-10 rounded-[2rem] md:rounded-[3rem] text-center"
    >
      <div className="max-w-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-display leading-tight mb-4"
        >
          Let's <span className="italic">Connect.</span>
        </motion.h2>

        {/* Scaled Down Email Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="group cursor-pointer inline-block mb-10"
          onClick={copyToClipboard}
        >
          <p className="text-lg md:text-xl font-light opacity-80 group-hover:opacity-100 transition-opacity">
            {email}
          </p>
          <div className="h-[1px] bg-midnight/20 w-full mt-1 overflow-hidden">
            <div className="h-full bg-midnight w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Grid of Action Buttons (Icons + Labels) */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* LinkedIn */}
          <a 
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-midnight rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-midnight hover:text-beige transition-all"
          >
            <TbBrandLinkedin size={14} /> LinkedIn
          </a>

          {/* GitHub */}
          <a 
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-midnight rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-midnight hover:text-beige transition-all"
          >
            <TbBrandGithub size={14} /> GitHub
          </a>

          {/* Resume Download */}
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-midnight text-beige rounded-full text-[9px] uppercase tracking-widest font-bold hover:opacity-90 transition-all"
          >
            <TbDownload size={14} /> Resume
          </button>
        </div>

        {/* Minimalist Footer */}
        <footer className="mt-16 pt-8 border-t border-midnight/5">
          <p className="text-[8px] uppercase tracking-[0.3em]">
            © 2026 Gopika Sri Ramesh • Software Engineer
          </p>
        </footer>
      </div>
    </section>
  );
}
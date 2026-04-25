import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative bg-beige text-midnight py-16 md:py-24 px-6 mt-10 -mx-4 md:-mx-10 rounded-[2rem] md:rounded-[3rem]"
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Minimalist Professional Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display leading-tight mb-6"
        >
          Software Engineer <span className="text-midnight/40">&</span> <br />
          <span className="italic">UI/UX Specialist</span>
        </motion.h2>
        
        {/* Tightened Content with Purple Accents */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-light leading-relaxed text-midnight/80"
        >
          Focused on crafting high-fidelity interfaces with <span className="text-midnight font-semibold">React</span> and <span className="text-midnight font-semibold">Next.js</span>, 
          backed by robust <span className="text-midnight font-semibold">Python</span> architectures. I translate complex 
          requirements into seamless digital products—from <span className="text-midnight font-semibold">Figma</span> wireframes to deployment.
        </motion.p>

        {/* Skill Buttons with Purple Outline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3 border-t border-midnight/10 pt-8"
        >
          {['React / Next.js', 'Python Backend', 'UI/UX Architecture', 'Figma Design'].map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 border border-midnight rounded-full text-[9px] uppercase tracking-widest font-bold text-midnight hover:bg-midnight hover:text-beige transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
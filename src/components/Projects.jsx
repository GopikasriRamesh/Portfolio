import { motion } from 'framer-motion';
import { TbArrowUpRight, TbBrandGithub } from "react-icons/tb";
import { projects } from '../data/Project';

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-40">
      {/* --- Header --- */}
      <div className="mb-24">
        <span className="text-[10px] uppercase tracking-[0.6em] text-muted-purple mb-4 block font-bold">Selected Works</span>
        <h2 className="text-6xl md:text-8xl font-display leading-none">
          Proven <br /> <span className="italic text-beige/80">Artifacts.</span>
        </h2>
      </div>

      <div className="space-y-40 md:space-y-64">
        {projects.map((project, index) => {
          // Logic: Priority to Live Link, then Github
          const primaryLink = project.liveUrl || project.githubUrl || "#";
          const hasLive = !!project.liveUrl;
          const hasGit = !!project.githubUrl;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              {/* Project Number Background */}
              <span className="absolute -left-10 -top-10 text-[10rem] font-display text-haze/5 select-none hidden md:block group-hover:text-beige/5 transition-colors duration-700">
                0{index + 1}
              </span>

              {/* Text Content */}
              <div className="md:col-span-5 z-10 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-[1px] w-8 bg-beige/20"></span>
                  <span className="text-[10px] uppercase tracking-widest text-beige/40 font-bold italic">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display mb-6 group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="text-muted-purple text-lg leading-relaxed mb-8 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-midnight border border-haze/40 rounded-md text-[9px] text-beige/50 uppercase tracking-widest font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 items-center pt-4">
                  {/* Primary Link Button */}
                  <a 
                    href={primaryLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-beige text-[10px] uppercase tracking-[0.3em] font-black group/link"
                  >
                    {hasLive ? 'Launch Experience' : 'View Source'} 
                    <div className="p-2.5 border border-beige/20 rounded-full group-hover/link:bg-beige group-hover/link:text-midnight transition-all">
                      <TbArrowUpRight size={16} />
                    </div>
                  </a>

                  {/* Secondary GitHub Icon (Only if both exist) */}
                  {hasLive && hasGit && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-purple hover:text-beige transition-colors"
                      title="View Source on GitHub"
                    >
                      <TbBrandGithub size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Clickable Visual Card */}
              <div className="md:col-span-7 order-1 md:order-2">
                <a href={primaryLink} target="_blank" rel="noreferrer">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="aspect-video relative rounded-[2.5rem] border border-haze/30 bg-midnight p-[1px] overflow-hidden group/card shadow-2xl cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-midnight/40 group-hover/card:bg-transparent transition-colors duration-700 z-10" />
                    
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      />
                    ) : (
                      <div className="w-full h-full bg-haze/10 flex items-center justify-center">
                         <span className="text-[10px] uppercase tracking-[1em] text-muted-purple/30">Preview_Pending</span>
                      </div>
                    )}
                    
                    {/* Floating Tech Label (Visual Flair) */}
                    <div className="absolute bottom-6 right-6 z-20 translate-y-10 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
                      <div className="bg-beige text-midnight px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest">
                        {hasLive ? 'Live Site' : 'GitHub Repo'}
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { 
  TbBrandPython, TbBrandCpp, TbDatabase, TbSql, 
  TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact, TbBrandNextjs,
  TbCloudUpload, TbBrandVercel, TbBrandGithub, TbBrandFigma, TbTerminal2
} from "react-icons/tb";

const skillGroups = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <TbBrandPython /> },
      { name: "Java", icon: <TbTerminal2 /> },
      { name: "MySQL", icon: <TbSql /> },
    ]
  },
  {
    title: "Web Architecture",
    skills: [
      { name: "React / Next.js", icon: <TbBrandReact /> },
      { name: "Tailwind CSS", icon: <TbBrandCss3 /> },
      { name: "JavaScript ES6+", icon: <TbBrandJavascript /> },
      { name: "HTML5 Design", icon: <TbBrandHtml5 /> },
    ]
  },
  {
    title: "Cloud & Design",
    skills: [
      { name: "Figma", icon: <TbBrandFigma /> },
      { name: "Vercel / Render", icon: <TbCloudUpload /> },
      { name: "Git / GitHub", icon: <TbBrandGithub /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-haze/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-muted-purple mb-4 block font-bold">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-display italic text-beige">Technical Expertize.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2rem] bg-haze/10 border border-beige/5 backdrop-blur-md hover:border-beige/20 transition-all duration-500"
            >
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-beige/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-beige/60 mb-8 flex items-center gap-3">
                <span className="h-[1px] w-4 bg-beige/20"></span>
                {group.title}
              </h3>
              
              <div className="space-y-5 relative z-10">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group/item">
                    <div className="text-2xl text-muted-purple group-hover/item:text-beige transition-colors duration-300 transform group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-light text-muted-purple group-hover/item:text-beige transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
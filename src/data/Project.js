import ai from "../assets/ai.png"
import er from "../assets/er.png"
import mts from "../assets/mts.jpeg"
import qeg from "../assets/qeg.png"
import qx from "../assets/qx.png"
import rm from "../assets/rm.png"


export const projects = [
  {
    id: 1,
    title: "MTS Community Portal",
    category: "Non-Profit Ecosystem",
    description: "Built a high-fidelity digital ecosystem featuring Glassmorphism design, real-time Toast notifications, and role-based navigation for seamless user flow.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://maldivestamils.org/",
    image:mts
  },
  {
    id: 2,
    title: "QuanturaX",
    category: "Modern Portfolio Architecture",
    description: "Developed an immersive 'Depth UI' experience featuring a multi-layered Hero section with animated radial glows and high-fidelity glass components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://quanturax.com/",
    image:qx
  },
  {
    id: 3,
    title: "StudyFlow AI",
    category: "Full-Stack SaaS",
    description: "An AI-driven study planner that implements a RESTful architecture to provide real-time optimized schedules based on subject complexity.",
    tech: ["Python", "Flask", "Firebase", "React"],
    liveUrl: "https://ai-study-planner-mocha.vercel.app/",
    githubUrl: "https://github.com/GopikasriRamesh/Ai-study-planner",
    image:ai

  },
  {
    id: 4,
    title: "Thirumurugan Ricemill",
    category: "Business Portfolio",
    description: "Designed a premium responsive landing page for a 25-year-old business to establish a modern digital presence and showcase high-end products.",
    tech: ["React.js", "Tailwind CSS", "UI/UX Design"],
    liveUrl: "https://www.thirumuruganhightechricemill.com/",
    image:rm

  },
  {
    id: 5,
    title: "Auto-Tech Reporter",
    category: "Automation Tool",
    description: "Engineered a Python tool to process student datasets and dispatch tailored HTML reports, significantly accelerating the feedback delivery cycle.",
    tech: ["Python", "Pandas", "Smtplib"],
    liveUrl: "",
    githubUrl: "https://github.com/GopikasriRamesh/Automated_results_sender",
    image:er

  },
  {
    id: 6,
    title: "QuickExpress Gen",
    category: "Documentation Engine",
    description: "A high-end documentation website for an NPM library, focusing on technical readability, rapid search, and clean developer experience.",
    tech: ["React", "Documentation UI", "NPM Ecosystem"],
    liveUrl: "https://quick-express-gen.netlify.app/",
    image:qeg

  }
];
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'; 


export default function App() {
  return (
    <div className="bg-midnight min-h-screen text-beige font-sans selection:bg-beige selection:text-midnight">

      <main className="max-w-7xl mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Contact />
      </main>
    </div>
  );
}
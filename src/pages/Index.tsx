
import Hero from '@/components/resume/Hero';
import Skills from '@/components/resume/Skills';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Portfolio from '@/components/resume/Portfolio';
import Contact from '@/components/resume/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;

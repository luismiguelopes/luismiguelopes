
import { lazy, Suspense } from 'react';
import Hero from '@/components/resume/Hero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SEO from '@/components/ui/SEO';
import Navbar from '@/components/ui/Navbar';

// Lazy loading dos componentes não críticos
const Skills = lazy(() => import('@/components/resume/Skills'));
const Experience = lazy(() => import('@/components/resume/Experience'));
const Education = lazy(() => import('@/components/resume/Education'));
const Portfolio = lazy(() => import('@/components/resume/Portfolio'));
const Contact = lazy(() => import('@/components/resume/Contact'));

// Componente de loading
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <LoadingSpinner size="lg" />
  </div>
);

const Index = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <div id="skills">
          <AnimatedSection delay={0.1}>
            <Suspense fallback={<SectionLoader />}>
              <Skills />
            </Suspense>
          </AnimatedSection>
        </div>

        <div id="experience">
          <AnimatedSection delay={0.2}>
            <Suspense fallback={<SectionLoader />}>
              <Experience />
            </Suspense>
          </AnimatedSection>
        </div>

        <div id="education">
          <AnimatedSection delay={0.3}>
            <Suspense fallback={<SectionLoader />}>
              <Education />
            </Suspense>
          </AnimatedSection>
        </div>

        <div id="projects">
          <AnimatedSection delay={0.4}>
            <Suspense fallback={<SectionLoader />}>
              <Portfolio />
            </Suspense>
          </AnimatedSection>
        </div>

        <div id="contact">
          <AnimatedSection delay={0.5}>
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default Index;

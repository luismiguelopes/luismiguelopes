
import { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/resume/Hero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SEO from '@/components/ui/SEO';
import { useAnalytics } from '@/hooks/use-analytics';
import { useAppStore } from '@/store/useAppStore';

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
  const { trackPageView } = useAnalytics();
  const { incrementPageViews } = useAppStore();

  useEffect(() => {
    // Incrementar contador de visualizações
    incrementPageViews();
    
    // Rastrear visualização da página
    trackPageView('Home - Portfolio', window.location.href);
  }, []); // Executar apenas uma vez no mount

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <Suspense fallback={<SectionLoader />}>
            <Education />
          </Suspense>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Index;

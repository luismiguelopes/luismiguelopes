
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter, ChevronDown, Check } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Portfolio = () => {
  const { portfolioFilter, setPortfolioFilter } = useAppStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const projects = [
    {
      title: "Anko Scripts",
      description: "Anko Scripts is a collection of automation scripts written in Go, designed to streamline and optimize bot behaviors for browser-based strategy games. Built with modularity and performance in mind, these scripts handle resource farming, timed actions, and smart probing logic using custom session controls. The project emphasizes efficient automation with a clean codebase, ideal for scaling bot infrastructure across multiple game universes.",
      technologies: ["Go", "Automation", "Scripting"],
      image: "images/portfolio/ankoscripts-project.png",
      liveUrl: "#",
      githubUrl: "https://github.com/luismiguelopes/AnkoScripts/",
      category: "automation",
      type: "Automation Scripts"
    },
    {
      title: "Ikabot Fork",
      description: "Ikabot Fork is a customized version of the popular Ikariam automation tool, enhanced with a responsive web interface built using Flask. This version introduces an intuitive GUI for controlling automated in-game actions such as building, troop movements, and resource management. Developed in Python, it integrates backend logic with a user-friendly front-end to make strategy game automation accessible and flexible, while supporting advanced features for power users.",
      technologies: ["Python", "Flask", "HTML", "CSS", "GUI"],
      image: "images/portfolio/ikabot-project.png",
      liveUrl: "#",
      githubUrl: "https://github.com/luismiguelopes/ikabot",
      category: "automation",
      type: "GUI Application"
    },
    {
      title: "luismiguelopes Website",
      description: "My personal website built with Next.js, Tailwind CSS,and TypeScript. It serves as a portfolio of my work and a platform for sharing my thoughts and experiences.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite", "PWA"],
      image: "images/portfolio/luismiguelopes-project.png",
      liveUrl: "#",
      githubUrl: "https://github.com/luismiguelopes/luismiguelopes",
      category: "web",
      type: "Web Development"
    }
  ];

  // Extrair categorias e tecnologias únicas
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

  // Filtrar projetos
  const filteredProjects = projects.filter(project => {
    const categoryMatch = portfolioFilter.category === 'all' || project.category === portfolioFilter.category;
    const technologyMatch = portfolioFilter.technology === 'all' || project.technologies.includes(portfolioFilter.technology);
    return categoryMatch && technologyMatch;
  });

  return (
    <section className="py-20 px-4 bg-gray-950" aria-label="Portfolio section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my latest work in automation and web development
          </p>
          
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" role="group" aria-label="Project filters">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <span className="text-gray-400 text-sm">Filter by:</span>
            </div>
            
            {/* Filtro por Categoria */}
            <div className="flex gap-2" role="group" aria-label="Filter by category">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={portfolioFilter.category === category ? "default" : "outline"}
                  className={`${
                    portfolioFilter.category === category
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setPortfolioFilter({ category })}
                >
                  {category === 'all' ? 'All' : category === 'web' ? 'Web Dev' : 'Automation'}
                </Button>
              ))}
            </div>
            
            {/* Filtro por Tecnologia - Dropdown Customizado */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border-gray-600 text-gray-300 hover:bg-gray-700 min-w-[160px] justify-between"
                aria-label="Filter projects by technology"
              >
                <span className="truncate">
                  {portfolioFilter.technology === 'all' ? 'All Technologies' : portfolioFilter.technology}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </Button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-full bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50 overflow-hidden"
                  >
                    <div className="py-1 max-h-60 overflow-y-auto">
                      <button
                        onClick={() => {
                          setPortfolioFilter({ technology: 'all' });
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-700 transition-colors flex items-center justify-between ${
                          portfolioFilter.technology === 'all' ? 'bg-gray-700 text-blue-300' : 'text-gray-300'
                        }`}
                      >
                        <span>All Technologies</span>
                        {portfolioFilter.technology === 'all' && (
                          <Check className="w-4 h-4 text-blue-400" />
                        )}
                      </button>
                      {allTechnologies.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => {
                            setPortfolioFilter({ technology: tech });
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-700 transition-colors flex items-center justify-between ${
                            portfolioFilter.technology === tech ? 'bg-gray-700 text-blue-300' : 'text-gray-300'
                          }`}
                        >
                          <span>{tech}</span>
                          {portfolioFilter.technology === tech && (
                            <Check className="w-4 h-4 text-blue-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Contador de resultados */}
          <div className="mt-4">
            <span className="text-gray-400 text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${portfolioFilter.category}-${portfolioFilter.technology}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-3">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl !== "#" && (
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl !== "#" && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => window.open('https://github.com/luismiguelopes', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

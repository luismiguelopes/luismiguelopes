
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Anko Scripts",
      description: "Anko Scripts is a collection of automation scripts written in Go, designed to streamline and optimize bot behaviors for browser-based strategy games. Built with modularity and performance in mind, these scripts handle resource farming, timed actions, and smart probing logic using custom session controls. The project emphasizes efficient automation with a clean codebase, ideal for scaling bot infrastructure across multiple game universes.",
      technologies: ["Go (Golang)", "Modular Scripting"],
      image: "images/portfolio/ankoscripts-project.png",
      liveUrl: "#",
      githubUrl: "#",
      type: "Automation Scripts / Game Botting"
    },
    {
      title: "Ikabot Fork",
      description: "Ikabot Fork is a customized version of the popular Ikariam automation tool, enhanced with a responsive web interface built using Flask. This version introduces an intuitive GUI for controlling automated in-game actions such as building, troop movements, and resource management. Developed in Python, it integrates backend logic with a user-friendly front-end to make strategy game automation accessible and flexible, while supporting advanced features for power users.",
      technologies: ["Python", "Flask", "HTML/CSS", "Web UI", "JSON"],
      image: "images/portfolio/ikabot-project.png",
      liveUrl: "#",
      githubUrl: "#",
      type: "CLI Automation / Game Botting / GUI Application"
    },
    {
      title: "luismiguelopes Website",
      description: "Docker-based deployment pipeline with automated testing and monitoring. Reduced deployment time by 75% and improved system reliability for multiple client projects.",
      technologies: ["Docker", "Laravel", "GitHub Actions", "VPS", "Nginx"],
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "DevOps"
    },
    {
      title: "GirlsVinci Website",
      description: "Interactive dashboard for monitoring business KPIs in real-time. Built with Laravel backend and modern JavaScript frontend, processing over 1M data points daily.",
      technologies: ["Laravel", "JavaScript", "Chart.js", "WebSockets", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Data Visualization"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work in data analysis and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 overflow-hidden">
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
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

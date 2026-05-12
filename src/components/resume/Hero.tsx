import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const { personal } = portfolioData;

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900/20 w-full"
      aria-label="Hero section with personal introduction"
    >
      <div className="w-full text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
              <img
                src={personal.image}
                alt={personal.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium">
            {personal.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {personal.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <a href="#contact">
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-4" role="list" aria-label="Social media links">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={personal.social.email}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label={`Send email to ${personal.email}`}
          >
            <Mail className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

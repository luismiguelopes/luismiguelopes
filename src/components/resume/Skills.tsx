
import { Code, Database, Github, Docker, Terminal, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "Laravel", level: 95 },
        { name: "PHP", level: 95 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Go (GoLang)", level: 80 }
      ]
    },
    {
      title: "Data Analysis",
      icon: Database,
      skills: [
        { name: "Power BI", level: 99 },
        { name: "Excel/VBA", level: 99 },
        { name: "SQL", level: 95 },
        { name: "Azure Databricks", level: 92 },
        { name: "Python (Pandas)", level: 88 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: [
        { name: "Linux/Bash Scripting", level: 99 },
        { name: "VPS Management", level: 98 },
        { name: "Git/GitHub", level: 98 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

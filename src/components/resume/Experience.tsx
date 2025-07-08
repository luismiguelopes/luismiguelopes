
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Coordinator",
      company: "Teleperformance",
      type: "Full-time",
      period: "2024 - Present",
      description: "Led a team of data analysts to deliver actionable insights aligned with client goals and tight deadlines. Coordinated cross-functional efforts to drive strategic initiatives and improve operational efficiency. Developed automated reporting systems with Power BI and SQL, reducing manual workload by 60% and implemented real-time dashboards to support decision-making. Fostered a collaborative team culture while mentoring junior analysts.",
      technologies: ["Python", "SQL", "Power BI", "Azure DevOps", "Azure Databricks", "Bash Scripting"],
      achievements: [
        "Improved data processing efficiency by 60% through automation",
        "Led a team of 5 junior analysts",
        "Implemented real-time dashboard solutions"
      ]
    },
    {
      title: "Full-Stack Developer (Freelance)",
      company: "Various Clients",
      type: "Freelance",
      period: "2020 - Present",
      description: "Developed and maintained custom web applications and WordPress themes to enhance brand identity and user experience. Delivered Laravel-based solutions with modern DevOps practices, including VPS setup and management using Ubuntu Server and Nginx. Drove online growth through SEO, social media strategy and full-stack development for projects like GirlsVinci.",
      technologies: ["Laravel", "Wordpress", "React", "Node.JS", "Python" ,"Docker", "Linux", "VPS", "MySQL", "SQLLite"],
      achievements: [
        "Completed 10+ successful projects",
        "Maintained 98% client satisfaction rate",
        "Specialized in e-commerce solutions"
      ]
    },
    {
      title: "Data Analyst",
      company: "Teleperformance",
      type: "Full-time",
      period: "2017 - 2024",
      description: "Analyzed and transformed large datasets to deliver actionable insights and improve decision-making. Automated reporting processes significantly reducing manual workload. Created standardized dashboards and reports to support business intelligence and strategic planning, while collaborating closely with stakeholders to align data initiatives with business needs.",
      technologies: ["SQL", "Python", "Excel", "VBA", "Power BI", "PowerPivot", "PowerQuery"],
      achievements: [
        "Processed and analyzed 10M+ records monthly",
        "Created 100+ automated reporting solutions",
        "Reduced report generation time by 45%"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey through data analysis and web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-blue-400">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <Badge variant="outline" className={`${exp.type === 'Freelance' ? 'border-green-500 text-green-400' : 'border-blue-500 text-blue-400'}`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-300">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

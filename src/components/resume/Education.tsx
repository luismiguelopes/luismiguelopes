
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, SquareCode } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Web & Mobile Developer Course",
      institution: "Flag",
      period: "2014 - 2015",
      description: "Completed training focused on web and mobile development, covering HTML5, CSS3, PHP, MySQL, Java and Objective-C. The program was designed to build the skills needed to develop responsive websites and mobile applications for both Android and iOS platforms.",
      icon: SquareCode
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Laravel Certified Developer",
    "Google Analytics Individual Qualification",
    "Docker Certified Associate",
    "Microsoft Power BI Data Analyst"
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <edu.icon className="w-8 h-8 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
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

export default Education;

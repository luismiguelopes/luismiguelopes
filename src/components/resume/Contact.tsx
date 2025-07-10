import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "geral@luismiguelopes.com",
      href: "mailto:geral@luismiguelopes.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Portugal",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss your next project? I'm available for both full-time opportunities and freelance work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and challenging projects. 
                Whether you need data analysis or web development expertise,
                let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <a 
                      href={info.href}
                      className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  8+ years of experience in data analysis and web development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Full-stack expertise with modern technologies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Proven track record with 20+ successful projects
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Available for both short-term and long-term engagements
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-16 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} luismiguelopes. Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

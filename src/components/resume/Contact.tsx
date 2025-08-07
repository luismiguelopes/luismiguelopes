import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { contactForm, setContactForm, resetContactForm, trackEvent } = useAppStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validação do formulário
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!contactForm.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submissão do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuração do EmailJS (substitua pelos seus IDs)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // Parâmetros do template
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        message: contactForm.message,
        to_name: 'Luís Miguel Lopes',
      };
      
      // Enviar email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Rastrear evento de sucesso
      trackEvent('form_submit', 'contact', 'success');
      
      setSubmitStatus('success');
      resetContactForm();
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      // Rastrear evento de erro
      trackEvent('form_submit', 'contact', 'error');
      
      setSubmitStatus('error');
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 px-4 bg-gray-900/50" aria-label="Contact section">
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities and challenging projects. 
                  Whether you need automation or web development expertise,
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
                    8+ years of experience in automation and web development
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

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800/30 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-300">Message sent successfully!</span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-300">Failed to send message. Please try again.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ name: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ email: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ message: e.target.value })}
                        rows={5}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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

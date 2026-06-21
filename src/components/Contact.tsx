import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#8B5CF6', '#06B6D4'],
      });

      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-accent" />, label: 'Email', value: 'brijeshjesh78@gmail.com', href: 'mailto:brijeshjesh78@gmail.com' },
    { icon: <Phone className="w-5 h-5 text-primary" />, label: 'Phone', value: '+91 6381529712', href: 'tel:+916381529712' },
    { icon: <MapPin className="w-5 h-5 text-secondary" />, label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: 'https://maps.google.com/?q=Coimbatore,TamilNadu,India' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[450px] h-[450px] bg-accent/5 top-1/2 right-0" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            07 / Connection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Get In Touch
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6 text-left">
              <h4 className="text-2xl font-bold text-white font-sans tracking-tight">Let's discuss a project</h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-sans">
                Have a job opportunity, automation query, or design project in mind? Reach out and let's construct something impactfully premium together.
              </p>
              
              <div className="space-y-4 pt-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-white/15 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                      {info.icon}
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-mono text-gray-500 uppercase">{info.label}</span>
                      <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors font-sans">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-left space-y-4">
              <h5 className="font-bold text-white text-sm flex items-center gap-2 font-sans">
                <Sparkles className="w-4 h-4 text-accent animate-spin duration-3000" />
                Direct Professional Link
              </h5>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                Let's synchronize professional trajectories. You can connect with me on LinkedIn for direct messaging.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/brijesh-s-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary flex items-center gap-1.5 border border-white/10 flex-1 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn Connect
                </a>
                <a
                  href="https://github.com/Brijeshsr002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1.5 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  GitHub Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col h-full justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left h-full flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-semibold text-gray-400 font-mono uppercase">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border text-sm text-white glass-input transition-all duration-300 font-sans"
                          />
                          {errors.name && <span className="text-xs text-rose-500 font-mono mt-1 block">{errors.name}</span>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-semibold text-gray-400 font-mono uppercase">Your Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border text-sm text-white glass-input transition-all duration-300 font-sans"
                          />
                          {errors.email && <span className="text-xs text-rose-500 font-mono mt-1 block">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-semibold text-gray-400 font-mono uppercase">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleInputChange}
                          placeholder="Project Inquiry"
                          className="w-full px-4 py-3 rounded-xl border text-sm text-white glass-input transition-all duration-300 font-sans"
                        />
                        {errors.subject && <span className="text-xs text-rose-500 font-mono mt-1 block">{errors.subject}</span>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-semibold text-gray-400 font-mono uppercase">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project..."
                          className="w-full px-4 py-3 rounded-xl border text-sm text-white glass-input transition-all duration-300 font-sans resize-none"
                        />
                        {errors.message && <span className="text-xs text-rose-500 font-mono mt-1 block">{errors.message}</span>}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="glow-button w-full py-4 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-primary to-secondary flex items-center justify-center gap-2 border border-white/10 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Transmitting message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center space-y-6 py-16 h-full"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white font-sans">Message Transmitted!</h4>
                      <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto font-sans leading-relaxed">
                        Thank you for reaching out, Brijesh S.R. has received your query. A response will be coordinated shortly.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest pt-4">
                      Resetting form...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

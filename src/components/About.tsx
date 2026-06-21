import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Cpu, Layers } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  const stats = [
    { icon: <Compass className="w-5 h-5 text-accent" />, title: 'UI/UX Design', desc: 'Figma wireframing, high fidelity prototyping' },
    { icon: <Cpu className="w-5 h-5 text-primary" />, title: 'Automation', desc: 'Workflow integration, n8n, AI pipelines' },
    { icon: <Layers className="w-5 h-5 text-secondary" />, title: 'CS & Design', desc: 'Merging software development with core design philosophy' },
    { icon: <Award className="w-5 h-5 text-emerald-400" />, title: 'Growth Mindset', desc: 'Hackathons, building SaaS, rapid prototyping' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-accent/10 top-1/2 left-0" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center lg:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            01 / Identity
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            About Me
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              I am <strong className="text-white">Brijesh S.R.</strong>, a Computer Science and Design student at <strong className="text-white">SNS College of Engineering</strong> with a strong interest in UI/UX Design, Business Automation, Artificial Intelligence, and Digital Product Development.
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed font-sans">
              I enjoy designing user-centric interfaces, building automation systems, and creating innovative solutions that improve efficiency and user experience.
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed font-sans">
              I am continuously learning, experimenting, and developing impactful digital products that combine creativity with technology.
            </p>

            <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-mono text-gray-500 block">CURRENT STATUS</span>
                <span className="text-sm font-semibold text-white">BE Student (CSD), 3rd Year</span>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 block">FOCUS AREAS</span>
                <span className="text-sm font-semibold text-white">AI Automation & UI/UX</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                key={index}
                className="interactive-card p-6 rounded-2xl glass-panel text-left flex flex-col space-y-4 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight group-hover:text-accent transition-colors font-sans">{stat.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

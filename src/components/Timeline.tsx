import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export const Timeline: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const experiences: TimelineItem[] = [
    {
      title: 'Sendiee',
      subtitle: 'Business Automation Intern',
      duration: 'Dec 2025 – Present',
      description: 'Developing automation solutions using AI, WhatsApp Automation, Instagram Automation, workflow integrations, and backend automation platforms such as n8n.',
      metric: 'n8n & AI',
      metricLabel: 'Core Stack'
    },
    {
      title: 'Skylink Fibernet',
      subtitle: 'UI/UX Designer Intern',
      duration: 'Jan 2025 – Feb 2025',
      description: 'Worked on UI design, UX research, wireframing, prototyping, and improving digital user experiences.',
      metric: 'Figma',
      metricLabel: 'Prototyping'
    },
    {
      title: 'Agni Solar Systems',
      subtitle: 'Intern',
      duration: 'July 2024 – Aug 2024',
      description: 'Explored renewable energy technologies, solar systems, sustainable solutions, and practical industry applications.',
      metric: 'Solar Tech',
      metricLabel: 'Field Study'
    },
  ];

  const educations: TimelineItem[] = [
    {
      title: 'SNS College of Engineering',
      subtitle: 'Bachelor of Engineering (Computer Science and Design)',
      duration: '2023 – 2027',
      description: 'Acquiring deep integration of software engineering paradigms alongside digital interaction design philosophies.',
      metric: '7.97 CGPA',
      metricLabel: 'Academic Score'
    },
    {
      title: 'AVB Matric Higher Secondary School',
      subtitle: 'HSC (High School Certificate)',
      duration: '2022 – 2023',
      description: 'Focused on core physics, chemistry, and mathematics with analytical project integrations.',
      metric: '63%',
      metricLabel: 'Total Marks'
    },
    {
      title: 'AVB Matric Higher Secondary School',
      subtitle: 'SSLC (Secondary School Leaving Certificate)',
      duration: '2020 – 2021',
      description: 'Completed foundational secondary education with academic distinction.',
      metric: '100%',
      metricLabel: 'Academic Score'
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-secondary/5 -bottom-20 right-1/4" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            02 / History
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Experience & Education
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-sans">Professional Experience</h4>
            </div>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 space-y-12 text-left">
              {experiences.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 * index }}
                  key={index}
                  className="relative group"
                >
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-primary flex items-center justify-center z-10 group-hover:border-accent transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors duration-300" />
                  </span>

                  <div className="glass-panel p-6 rounded-2xl relative border border-white/5 hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h5 className="font-extrabold text-white text-lg font-sans">{item.title}</h5>
                        <p className="text-xs font-semibold text-accent font-mono uppercase tracking-wide">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.description}</p>

                    {item.metric && (
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">{item.metricLabel}</span>
                        <span className="text-xs font-bold text-white bg-primary/20 border border-primary/30 px-2 py-0.5 rounded font-mono">
                          {item.metric}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-sans">Academic Education</h4>
            </div>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 space-y-12 text-left">
              {educations.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 * index }}
                  key={index}
                  className="relative group"
                >
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-accent flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors duration-300" />
                  </span>

                  <div className="glass-panel p-6 rounded-2xl relative border border-white/5 hover:border-accent/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h5 className="font-extrabold text-white text-lg font-sans">{item.title}</h5>
                        <p className="text-xs font-semibold text-secondary font-mono uppercase tracking-wide">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.description}</p>

                    {item.metric && (
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">{item.metricLabel}</span>
                        <span className="text-xs font-bold text-white bg-accent/20 border border-accent/30 px-2 py-0.5 rounded font-mono flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-accent animate-pulse" />
                          {item.metric}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;

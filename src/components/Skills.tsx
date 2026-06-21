import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SkillItem {
  name: string;
  level: number;
  color: string;
}

export const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const techSkills: SkillItem[] = [
    { name: 'UI/UX Design', level: 95, color: '#06B6D4' },
    { name: 'Figma', level: 92, color: '#6366F1' },
    { name: 'Photoshop', level: 78, color: '#3B82F6' },
    { name: 'HTML & CSS', level: 88, color: '#EC4899' },
    { name: 'Python', level: 82, color: '#F59E0B' },
    { name: 'FlutterFlow', level: 85, color: '#10B981' },
    { name: 'n8n Automation', level: 90, color: '#8B5CF6' },
    { name: 'Prompt Engineering', level: 92, color: '#06B6D4' },
  ];

  const profSkills: SkillItem[] = [
    { name: 'Leadership', level: 90, color: '#6366F1' },
    { name: 'Problem Solving', level: 95, color: '#06B6D4' },
    { name: 'Critical Thinking', level: 92, color: '#8B5CF6' },
    { name: 'Time Management', level: 85, color: '#F59E0B' },
    { name: 'Team Collaboration', level: 95, color: '#10B981' },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-primary/5 top-10 right-0" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            03 / Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Skills & Expertise
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-sans">Technical Skills</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col space-y-4 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white group-hover:text-accent transition-colors font-sans">{skill.name}</span>
                    <span className="text-xs font-mono text-gray-400 font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, #ffffff)`,
                        boxShadow: `0 0 8px ${skill.color}`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-sans">Professional Competencies</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {profSkills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col space-y-4 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white group-hover:text-primary transition-colors font-sans">{skill.name}</span>
                    <span className="text-xs font-mono text-gray-400 font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, #ffffff)`,
                        boxShadow: `0 0 8px ${skill.color}`,
                      }}
                    />
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

export default Skills;

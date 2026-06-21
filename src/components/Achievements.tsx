import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Users } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CountUp: React.FC<{ end: number; duration?: number; decimals?: number; suffix?: string; startTrigger: boolean }> = ({
  end,
  duration = 1500,
  decimals = 0,
  suffix = '',
  startTrigger
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const val = progress * end;
      setCount(val);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, startTrigger]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  const stats = [
    { label: 'Projects Completed', end: 4, suffix: '+', icon: <Trophy className="w-5 h-5 text-accent" /> },
    { label: 'Internships Done', end: 3, suffix: '+', icon: <Award className="w-5 h-5 text-primary" /> },
    { label: 'College CGPA Score', end: 7.97, decimals: 2, suffix: '', icon: <Star className="w-5 h-5 text-secondary" /> },
    { label: 'Technical Skills', end: 10, suffix: '+', icon: <Users className="w-5 h-5 text-emerald-400" /> },
  ];

  const leadershipPoints = [
    'Led project teams and collaborative initiatives in design-focused hackathons.',
    'Coordinated technical projects and digital design activities in college forums.',
    'Strong communication and interpersonal teamwork abilities.',
    'Highly experienced in taking ownership and handling responsibilities independently.',
    'Active participant in innovation, entrepreneurial activities, and startup incubation.'
  ];

  return (
    <section id="achievements" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-secondary/5 bottom-0 left-0" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            05 / Milestones
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Achievements & Leadership
          </motion.h3>
        </div>

        {/* Statistics Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center relative hover:border-white/10 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 text-gray-400 group-hover:text-accent transition-colors">
                {stat.icon}
              </div>
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono block">
                <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} startTrigger={isVisible} />
              </span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-3 font-sans block leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Leadership Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 text-left flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-6 font-sans">
                Leadership & Collaboration
              </h4>
              <ul className="space-y-4">
                {leadershipPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-gray-300 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 rounded-3xl p-8 bg-gradient-to-br from-primary/10 via-[#0B1120] to-accent/10 border border-primary/20 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none opacity-40" />
            <span className="text-5xl mb-4">💡</span>
            <h5 className="font-extrabold text-white text-lg font-sans">Innovation & Ideation</h5>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed max-w-xs font-sans">
              Consistently contributing to entrepreneurial pitches, digital design hackathons, and developing automation workflow solutions to improve operations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;

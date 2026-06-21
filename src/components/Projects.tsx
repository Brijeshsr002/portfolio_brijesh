import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  tags: string[];
  techStack: string;
  icon: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rY = (mouseX / (width / 2)) * 12;
    const rX = -(mouseY / (height / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="interactive-card flex flex-col justify-between p-8 rounded-3xl glass-panel relative border border-white/5 hover:border-accent/30 shadow-2xl overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
            <span className="font-mono font-bold text-sm">{project.icon}</span>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Viewing source code for ${project.title} (simulated link)`);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub Repository"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Launching live preview for ${project.title} (simulated preview)`);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              title="Live Demo"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h4 className="text-2xl font-extrabold text-white tracking-tight mb-3 font-sans group-hover:text-accent transition-colors">
          {project.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
          {project.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>TECH STACK</span>
          <span className="text-white font-semibold">{project.techStack}</span>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects: Project[] = [
    {
      title: 'Smart City',
      description: 'Smart urban management system focused on improving city infrastructure through digital technologies and automation. Built intelligent sensory triggers and centralized metrics.',
      tags: ['Automation', 'IoT', 'Dashboard'],
      techStack: 'Python, Flutter, Node.js',
      icon: '01'
    },
    {
      title: 'Plant Genesis',
      description: 'Developed a secure platform to simplify plant patenting, facilitating botanists to request patenting rights and raising public awareness of agricultural innovation and intellectual property.',
      tags: ['IPR', 'Figma', 'React'],
      techStack: 'Figma, Tailwind, Python',
      icon: '02'
    },
    {
      title: 'Relax Mate',
      description: 'A comprehensive stress-relief wellness ecosystem featuring interactive symmetry drawing canvases, AI-curated prompts, relaxing ambient audios, and positive daily affirmations.',
      tags: ['Wellness', 'AI Integration', 'Canvas'],
      techStack: 'React, Tailwind, Node.js',
      icon: '03'
    },
    {
      title: 'Smart Food Analyser',
      description: 'AI-powered food analysis platform helping health-conscious consumers instantly understand food ingredients, caloric breakdowns, and potential long-term health implications.',
      tags: ['AI/ML', 'Health', 'Analytics'],
      techStack: 'Python, FastAPI, Figma',
      icon: '04'
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-primary/5 top-1/4 left-1/3" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            04 / Works
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Featured Projects
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              key={index}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, ChevronRight, FileText } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, url: 'https://www.linkedin.com/in/brijesh-s-r', label: 'LinkedIn' },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>, url: 'https://github.com/Brijeshsr002', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, url: 'mailto:brijeshjesh78@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12 gradient-bg-flow"
    >
      <ParticleBackground />

      {/* Decorative Glow Blobs (Stripe / Apple Style) */}
      <div className="glow-blob w-[300px] h-[300px] bg-primary/20 top-1/4 left-1/4 animate-pulse duration-10000" />
      <div className="glow-blob w-[400px] h-[400px] bg-secondary/15 bottom-1/4 right-1/4 animate-pulse duration-7000" />
      <div className="glow-blob w-[250px] h-[250px] bg-accent/20 top-1/3 right-1/3 animate-pulse duration-5000" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Hero Left: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Open for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none font-sans"
          >
            <span className="block">BRIJESH</span>
            <span className="gradient-text-premium block mt-1">S.R.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-gray-300 flex flex-col space-y-1.5 animate-fadeIn"
          >
            <span className="text-white font-sans">Computer Science & Design Student</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-mono text-lg font-medium flex items-center flex-wrap">
              UI/UX Designer <span className="mx-2 text-gray-600">|</span> Business Automation Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans"
          >
            Transforming ideas into digital experiences through design, automation, and innovation. 
            Passionate about creating intuitive user experiences, building intelligent automation systems, and solving real-world problems using technology.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-button px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-primary to-secondary text-white border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer"
            >
              Contact Me
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (simulated mockup pdf). Thank you for your interest!");
              }}
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-transparent text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-4 pt-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mr-2 font-mono">Connect:</span>
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Hero Right: 3D-like Interactive Profile Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 scale-95 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-3xl p-1 bg-gradient-to-tr from-primary/30 via-white/10 to-accent/30 shadow-2xl overflow-hidden glass-panel">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]/80">
                <img
                  src="/tech_avatar.png"
                  alt="Brijesh S.R. Abstract Cyber Design Graphic"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-left flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-accent">LOCATION: INDIA</span>
                    <span className="text-xs font-mono text-secondary">ACTIVE NOW</span>
                  </div>
                  <h3 className="font-bold text-sm tracking-tight text-white mt-1">Brijesh S.R. Core Visual</h3>
                  <p className="text-[10px] font-mono text-gray-400">Generative illustration representing code, layout, and automation workflows.</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-accent shadow-lg animate-bounce duration-3000">
              <span className="text-xs font-mono font-bold">&lt;/&gt;</span>
            </div>
            <div className="absolute -bottom-4 -right-4 px-3 py-1 rounded-full glass-panel flex items-center justify-center text-secondary shadow-lg font-mono text-[10px]">
              <span>n8n_activated</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300 z-10">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-2 text-white"
          >
            <ArrowDown className="w-4 h-4 text-accent" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

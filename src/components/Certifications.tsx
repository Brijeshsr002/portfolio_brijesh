import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  id: string;
  color: string;
}

export const Certifications: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const certificates: Certificate[] = [
    {
      title: 'UI/UX Design Certification',
      issuer: 'Interaction Design Foundation',
      date: 'May 2025',
      id: 'UX-IDF-8890123',
      color: '#06B6D4'
    },
    {
      title: 'Python Certification',
      issuer: 'Python Institute / Coursera',
      date: 'November 2024',
      id: 'PY-INST-6652431',
      color: '#6366F1'
    },
    {
      title: 'Google Cloud Certification',
      issuer: 'Google Cloud / Qwiklabs',
      date: 'August 2024',
      id: 'GCP-ASOC-9908122',
      color: '#4285F4'
    },
    {
      title: 'Product Management Certification',
      issuer: 'Product School / Udemy',
      date: 'March 2024',
      id: 'PM-SCH-4456711',
      color: '#8B5CF6'
    },
    {
      title: 'Data Science Certification',
      issuer: 'IBM / Coursera',
      date: 'January 2024',
      id: 'IBM-DS-1109923',
      color: '#EC4899'
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-accent/5 top-1/3 left-1/4" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent font-mono"
          >
            06 / Verification
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 font-sans"
          >
            Certifications & Credentials
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 * index }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              key={index}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </div>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{cert.issuer}</span>
                <h4 className="text-lg font-extrabold text-white leading-snug tracking-tight font-sans group-hover:text-accent transition-colors">
                  {cert.title}
                </h4>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <div>
                  <span className="block text-[9px] text-gray-600">CREDENTIAL ID</span>
                  <span className="text-gray-300 font-semibold">{cert.id}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] text-gray-600">DATE ISSUED</span>
                  <span className="text-gray-300 font-semibold">{cert.date}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => alert(`Credential details: ${cert.title} issued by ${cert.issuer}. ID: ${cert.id}. Status: Verified.`)}
                  className="p-1.5 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

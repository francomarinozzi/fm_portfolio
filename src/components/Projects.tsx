import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-primary text-glow">02.</span> Featured Projects
                    <div className="h-px bg-dark-800 flex-grow ml-4"></div>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-800 hover:border-primary transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-dark-900 rounded-lg text-primary group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                </div>
                                {/* Links could go here if available */}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-dark-50 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono text-primary/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

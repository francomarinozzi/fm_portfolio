import React from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../data/content';

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

export default function Experience() {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-primary text-glow">01.</span> Work Experience
                    <div className="h-px bg-dark-800 flex-grow ml-4"></div>
                </motion.h2>

                <div className="space-y-12">
                    {workExperience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative pl-8 border-l-2 border-dark-800 hover:border-primary transition-colors duration-300"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-2 border-dark-800 group-hover:border-primary transition-colors duration-300"></div>

                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="text-primary font-mono mb-4 text-sm">
                                @ {exp.company} <span className="text-dark-50 mx-2">|</span> {exp.period}
                            </div>

                            <ul className="space-y-3 text-dark-50">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-primary mt-1.5">▹</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

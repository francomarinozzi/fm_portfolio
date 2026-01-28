import React from 'react';
import { motion } from 'framer-motion';
import { skills, futureInterests } from '../data/content';
import SkillItem from './SkillItem';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-primary text-glow">03.</span> Skills & Interests
                    <div className="h-px bg-dark-800 flex-grow ml-4"></div>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={item}>
                        <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
                        <div className="space-y-6">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">
                                        {category.replace(/_/g, ' ')}
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {items.map((skill, i) => (
                                            <SkillItem key={i} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Future Focus */}
                    <motion.div variants={item}>
                        <h3 className="text-xl font-bold text-white mb-6">Future Tech Focus</h3>
                        <p className="text-dark-50 mb-6 text-sm">
                            Technologies and fields I am actively exploring and studying:
                        </p>
                        <div className="space-y-4">
                            {futureInterests.map((interest, i) => (
                                <div key={i} className="flex items-center gap-3 text-dark-50 p-3 border border-dark-800 rounded-lg hover:border-primary/50 transition-colors group bg-dark-900/50">
                                    <span className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_var(--color-primary)] transition-shadow"></span>
                                    <span className="group-hover:text-white transition-colors">{interest}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

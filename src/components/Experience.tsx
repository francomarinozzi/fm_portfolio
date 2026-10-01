import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../data/content';
import { SectionHeading, TerminalWindow, slugify } from './Terminal';
import ExperienceModal, { type Experience as ExperienceEntry } from './ExperienceModal';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const MAX_CARD_TAGS = 6;

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Experience() {
    const [selected, setSelected] = useState<ExperienceEntry | null>(null);

    return (
        <section id="experience" className="py-14 md:py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.div variants={item}>
                    <SectionHeading index="01" title="Work Experience" command="cat experience.log" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {workExperience.map((exp) => (
                        <motion.div
                            key={exp.company}
                            variants={item}
                            onClick={() => setSelected(exp)}
                            className="group cursor-pointer h-full min-w-0"
                        >
                            <TerminalWindow
                                title={`~/experience/${slugify(exp.company)}.log`}
                                className="h-full flex flex-col group-hover:border-primary transition-colors duration-300"
                                bodyClassName="p-5 flex flex-col flex-1"
                            >
                                <div className="text-xs text-term-yellow mb-3">[{exp.period}]</div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                <div className="text-primary text-sm mb-4">@ {exp.company}</div>

                                <p className="text-dark-50 text-sm mb-4">{exp.description}</p>

                                {exp.technologies && (
                                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-term-mint mb-5">
                                        {exp.technologies.slice(0, MAX_CARD_TAGS).map((tech) => (
                                            <span key={tech}>#{slugify(tech)}</span>
                                        ))}
                                        {exp.technologies.length > MAX_CARD_TAGS && (
                                            <span className="text-term-comment">+{exp.technologies.length - MAX_CARD_TAGS}</span>
                                        )}
                                    </div>
                                )}

                                <div className="mt-auto text-xs text-primary/70 group-hover:text-primary transition-colors">
                                    &gt; open details<span className="term-cursor opacity-0 group-hover:opacity-100" />
                                </div>
                            </TerminalWindow>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
        </section>
    );
}

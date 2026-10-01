import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups, futureInterests } from '../data/content';
import SkillItem from './SkillItem';
import { SectionHeading, TerminalWindow } from './Terminal';

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

const interestStatus: Record<string, { marker: string; className: string }> = {
    studying: { marker: '[~]', className: 'text-primary' },
    exploring: { marker: '[ ]', className: 'text-term-comment' },
};

export default function Skills() {
    return (
        <section id="skills" className="py-14 md:py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.div variants={item}>
                    <SectionHeading index="03" title="Skills & Interests" command="cat skills.json" />
                </motion.div>

                <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start">
                    <motion.div variants={item} className="min-w-0">
                        <TerminalWindow title="~/skills.json">
                            <h3 className="text-lg font-bold text-white mb-6">Technical Skills</h3>
                            <div className="space-y-6">
                                {skillGroups.map((group) => (
                                    <div key={group.label}>
                                        <h4 className="text-sm text-term-comment mb-3">
                                            {'// '}{group.label}
                                        </h4>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {group.items.map((skill) => (
                                                <SkillItem key={skill.name} skill={skill} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TerminalWindow>
                    </motion.div>

                    {/* Current learning focus */}
                    <motion.div variants={item} className="min-w-0">
                        <TerminalWindow title="~/learning.todo">
                            <h3 className="text-lg font-bold text-white mb-2">Currently Learning</h3>
                            <p className="text-term-comment mb-6 text-sm">
                                # Where I'm heading next
                            </p>
                            <div className="space-y-3">
                                {futureInterests.map((interest) => {
                                    const status = interestStatus[interest.status];
                                    return (
                                        <div key={interest.name} className="flex items-center justify-between gap-3 text-dark-50 px-3 py-2.5 border border-dark-700 rounded hover:border-primary/60 transition-colors group">
                                            <span className="flex items-center gap-3 min-w-0">
                                                <span className={`shrink-0 ${status.className}`}>{status.marker}</span>
                                                <span className="group-hover:text-white transition-colors">{interest.name}</span>
                                            </span>
                                            <span className={`text-xs shrink-0 ${status.className}`}>{interest.status}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </TerminalWindow>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/content';
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

export default function Certifications() {
    if (certifications.length === 0) return null;

    return (
        <section id="certifications" className="py-14 md:py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.div variants={item}>
                    <SectionHeading index="04" title="Certifications" command="ls -l ./certifications" />
                </motion.div>

                <motion.div variants={item}>
                    <TerminalWindow title="~/certifications" bodyClassName="p-3 md:p-4">
                        <ul className="divide-y divide-dashed divide-dark-700">
                            {certifications.map((cert) => {
                                const earned = cert.status === 'earned';
                                const content = (
                                    <>
                                        <span className={`shrink-0 ${earned ? 'text-primary' : 'text-term-yellow'}`}>
                                            {earned ? '[✔]' : '[~]'}
                                        </span>
                                        <span className="flex-1 min-w-0">
                                            <span className="block text-white group-hover:text-primary transition-colors">{cert.name}</span>
                                            <span className="block text-xs text-term-comment mt-1">
                                                {cert.issuer} · {earned ? cert.date : 'in progress'}
                                                {cert.credentialId && <> · ID: {cert.credentialId}</>}
                                            </span>
                                        </span>
                                        {cert.url && (
                                            <span className="shrink-0 text-xs text-term-comment group-hover:text-primary transition-colors">
                                                verify ↗
                                            </span>
                                        )}
                                    </>
                                );
                                const rowClass = 'flex items-start gap-3 px-3 py-3.5 rounded text-sm md:text-base';

                                return (
                                    <li key={cert.name}>
                                        {cert.url ? (
                                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className={`group ${rowClass} hover:bg-dark-800/70 transition-colors`}>
                                                {content}
                                            </a>
                                        ) : (
                                            <div className={rowClass}>{content}</div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </TerminalWindow>
                </motion.div>
            </motion.div>
        </section>
    );
}

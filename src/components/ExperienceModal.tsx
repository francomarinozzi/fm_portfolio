import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Prompt, slugify } from './Terminal';
import SkillItem from './SkillItem';
import { skillGroups } from '../data/content';

type Skill = { name: string; icon: string | null };

// Buckets technology names into the Skills section categories; unknown names go to "other"
function groupTechnologies(names: string[]) {
    const groups: { label: string; items: Skill[] }[] = skillGroups
        .map((group) => ({ label: group.label, items: group.items.filter((s) => names.includes(s.name)) }))
        .filter((group) => group.items.length > 0);
    const known = new Set(groups.flatMap((g) => g.items.map((s) => s.name)));
    const other = names.filter((n) => !known.has(n)).map((name) => ({ name, icon: null }));
    if (other.length) groups.push({ label: 'other', items: other });
    return groups;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    technologies?: string[];
    responsibilities: { area: string; items: string[] }[];
}

interface ExperienceModalProps {
    experience: Experience | null;
    onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
    const isOpen = !!experience;

    // Lock scroll while open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (typeof document === 'undefined') return null;

    const file = experience ? `${slugify(experience.company)}.log` : '';
    const stackGroups = groupTechnologies(experience?.technologies ?? []);

    return createPortal(
        <AnimatePresence>
            {experience && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 z-[9999]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 md:inset-x-[10%] md:inset-y-12 lg:inset-x-[18%] z-[10000] flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-dark-950 w-full h-full md:rounded-lg border-dark-700 md:border flex flex-col pointer-events-auto relative overflow-hidden">
                            {/* Window title bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/80 border-b border-dark-700 shrink-0">
                                <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-term-red hover:brightness-125 transition" aria-label="Close modal" />
                                <span className="w-3.5 h-3.5 rounded-full bg-term-yellow/80" />
                                <span className="w-3.5 h-3.5 rounded-full bg-term-green/80" />
                                <span className="flex-1 min-w-0 text-center text-xs text-term-comment truncate px-2">
                                    ~/experience/{file}
                                </span>
                                <button
                                    onClick={onClose}
                                    className="text-xs text-term-comment hover:text-primary border border-dark-700 hover:border-primary rounded px-2 py-1 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <span className="sm:hidden">[x]</span><span className="hidden sm:inline">[esc] close</span>
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 md:p-10 relative overflow-y-auto project-modal-scroll flex-1">
                                {/* Header */}
                                <div className="mb-8">
                                    <Prompt command={`less ./experience/${file}`} className="text-xs md:text-sm mb-6 hidden sm:block" />
                                    <div className="text-xs md:text-sm text-term-yellow mb-3">[{experience.period}]</div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                        {experience.role}
                                    </h2>
                                    <p className="text-primary">@ {experience.company}</p>
                                </div>

                                {/* Overview */}
                                <div className="mb-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                        <span className="text-term-comment">## </span>Overview
                                    </h3>
                                    <p className="text-dark-50 leading-relaxed">{experience.description}</p>
                                </div>

                                {/* Responsibilities */}
                                {experience.responsibilities.length > 0 && (
                                    <div className="mb-10">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                                            <span className="text-term-comment">## </span>Responsibilities
                                        </h3>
                                        <div className="space-y-6">
                                            {experience.responsibilities.map((group) => (
                                                <div key={group.area}>
                                                    <h4 className="text-sm text-term-comment mb-3">
                                                        {'// '}{group.area}
                                                    </h4>
                                                    <ul className="space-y-2.5">
                                                        {group.items.map((resp, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-dark-50">
                                                                <span className="text-term-comment shrink-0">
                                                                    {i === group.items.length - 1 ? '└──' : '├──'}
                                                                </span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Stack: same groups and chips as the Skills section */}
                                {stackGroups.length > 0 && (
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                                            <span className="text-term-comment">## </span>Stack
                                        </h3>
                                        <div className="space-y-6">
                                            {stackGroups.map((group) => (
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
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

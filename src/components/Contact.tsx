import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo, certifications } from '../data/content';
import { Prompt, TerminalWindow } from './Terminal';

const channels = [
    { label: 'email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, external: false },
    { label: 'linkedin', value: 'in/franco-marinozzi', href: contactInfo.linkedin, external: true },
    { label: 'github', value: 'github.com/francomarinozzi', href: contactInfo.github, external: true },
    { label: 'whatsapp', value: 'open chat', href: `https://wa.me/${contactInfo.phone.replace('+', '')}`, external: true },
];

export default function Contact() {
    return (
        <section id="contact" className="py-14 md:py-20 mb-10 md:mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 text-center">
                    <span className="text-primary text-glow">{certifications.length ? "05" : "04"}.</span> Get In Touch
                </h2>

                <TerminalWindow title="~/contact.sh" bodyClassName="p-5 md:p-8 text-sm md:text-base">
                    <Prompt command="./contact.sh" />
                    <p className="text-dark-50 mt-4 mb-6 leading-relaxed">
                        <span className="text-term-green">✔</span> I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-1">
                        {channels.map((channel) => (
                            <a
                                key={channel.label}
                                href={channel.href}
                                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group flex flex-col gap-0.5 sm:grid sm:grid-cols-[8rem_2rem_1fr] sm:items-center sm:gap-0 px-3 py-2.5 rounded hover:bg-dark-800/70 transition-colors"
                            >
                                <span className="text-term-mint text-xs sm:text-base">{channel.label}</span>
                                <span className="hidden sm:inline text-term-comment group-hover:text-primary transition-colors">→</span>
                                <span className="text-white break-all sm:truncate group-hover:text-primary transition-colors">{channel.value}</span>
                            </a>
                        ))}
                    </div>

                    <Prompt command="" cursor className="mt-6" />
                </TerminalWindow>
            </motion.div>
        </section>
    );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Prompt, TerminalWindow } from './Terminal';
import GlitchImage from './GlitchImage';

const reveal = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
};

export default function Hero() {
    const [step, setStep] = useState(0);

    return (
        <section id="home" className="md:min-h-screen flex items-center justify-center pt-6 pb-10 md:py-20">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="min-w-0"
                >
                    <TerminalWindow title="fran@portfolio: ~ — ssh" bodyClassName="p-4 sm:p-5 md:p-8 min-h-[360px] md:min-h-[440px] text-[13px] sm:text-sm md:text-base">
                        <p className="text-term-comment mb-4">Welcome, visitor.</p>

                        <Prompt command="whoami" delay={400} onDone={() => setStep(1)} />
                        {step >= 1 && (
                            <motion.div {...reveal} className="mt-3 mb-6">
                                <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight text-glow">
                                    {personalInfo.name}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-primary mt-2">
                                    <span className="text-term-comment"># </span>{personalInfo.role}
                                </p>
                            </motion.div>
                        )}

                        {step >= 1 && <Prompt command="cat bio.txt" delay={300} onDone={() => setStep(2)} />}
                        {step >= 2 && (
                            <motion.p {...reveal} className="mt-3 mb-6 text-dark-50 max-w-xl leading-relaxed">
                                {personalInfo.bio}
                            </motion.p>
                        )}

                        {step >= 2 && <Prompt command="ls ./links" delay={300} onDone={() => setStep(3)} />}
                        {step >= 3 && (
                            <motion.div {...reveal} className="mt-4 mb-6 flex flex-wrap gap-3 md:gap-4">
                                <a href="#contact" className="px-4 md:px-5 py-2.5 bg-primary text-dark-950 font-bold rounded hover:bg-term-mint transition-all">
                                    [ get-in-touch ]
                                </a>
                                <a href="#projects" className="px-4 md:px-5 py-2.5 border border-dark-700 text-white rounded hover:border-primary hover:text-primary transition-all">
                                    [ view-work ]
                                </a>
                            </motion.div>
                        )}

                        {step >= 3 && <Prompt command="" cursor />}
                    </TerminalWindow>
                </motion.div>

                <div className="flex justify-center order-first md:order-none">
                    <GlitchImage
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        className="w-36 sm:w-56 md:w-full md:max-w-sm"
                    />
                </div>
            </div>
        </section>
    );
}

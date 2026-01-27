import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-mono mb-4 block text-lg text-glow">Hello, I'm</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-dark-50 font-medium mb-6">
                        {personalInfo.role}
                    </h2>
                    <p className="text-lg text-dark-50 mb-8 max-w-lg leading-relaxed">
                        {personalInfo.bio}
                    </p>
                    <div className="flex gap-4">
                        <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium shadow-[0_0_20px_rgba(86,22,67,0.3)] hover:shadow-[0_0_30px_rgba(86,22,67,0.6)]">
                            Get in Touch
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-dark-800 text-white rounded-lg hover:bg-dark-800 transition-all font-medium backdrop-blur-sm">
                            View Work
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

                    <motion.img
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        className="relative z-10 w-full max-w-md drop-shadow-2xl"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}

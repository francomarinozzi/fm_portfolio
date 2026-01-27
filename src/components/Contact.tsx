import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/content';

export default function Contact() {
    return (
        <section id="contact" className="py-20 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
                <p className="text-lg text-dark-50 mb-12">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {contactInfo.email}
                    </a>

                    <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-dark-800 border border-dark-800 text-white hover:border-primary/50 hover:bg-dark-900 rounded-lg font-medium transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a
                        href={`https://wa.me/${contactInfo.phone.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-dark-800 border border-dark-800 text-white hover:border-green-500/50 hover:text-green-400 hover:bg-dark-900 rounded-lg font-medium transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

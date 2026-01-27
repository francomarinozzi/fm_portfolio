import React from 'react';
import { motion } from 'framer-motion';
import { hobbies } from '../data/content';

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-20 border-t border-dark-800/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Other Interests</h3>

                <div className="flex flex-wrap justify-center gap-6">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="flex items-center gap-2 px-6 py-3 bg-dark-800/30 rounded-full text-dark-50 hover:text-white hover:bg-dark-800 transition-all duration-300">
                            <span className="text-primary">♫</span>
                            <span>{hobby}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

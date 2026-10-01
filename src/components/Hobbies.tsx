import React from 'react';
import { motion } from 'framer-motion';
import { hobbies } from '../data/content';
import { Prompt } from './Terminal';

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-14 md:py-20 border-t border-dashed border-dark-700">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <Prompt command="cat hobbies.txt" className="text-sm md:text-base mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Other Interests</h3>

                <div className="flex flex-wrap justify-center gap-4">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="flex items-center gap-2 px-5 py-2.5 border border-dark-700 rounded text-dark-50 hover:text-white hover:border-primary transition-all duration-300">
                            <span className="text-primary">♫</span>
                            <span>{hobby}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

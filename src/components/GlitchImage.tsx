import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface GlitchImageProps {
    src: string;
    alt: string;
    className?: string;
}

// Image that "renders" top-to-bottom behind a scan line, then glitches periodically
export default function GlitchImage({ src, alt, className = '' }: GlitchImageProps) {
    const reduceMotion = useReducedMotion();
    const duration = 1.4;

    return (
        <div className={`glitch relative ${className}`}>
            <motion.div
                className="relative"
                initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration, ease: 'linear' }}
            >
                <img src={src} alt={alt} className="block w-full h-auto" />
                <img src={src} alt="" aria-hidden="true" className="glitch-layer glitch-layer-1" />
                <img src={src} alt="" aria-hidden="true" className="glitch-layer glitch-layer-2" />
            </motion.div>

            {!reduceMotion && (
                <motion.span
                    aria-hidden="true"
                    className="absolute left-0 right-0 h-0.5 bg-primary pointer-events-none"
                    initial={{ top: '0%', opacity: 1 }}
                    whileInView={{ top: '100%', opacity: [1, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration, ease: 'linear', opacity: { duration: duration + 0.3, times: [0, 0.8, 1] } }}
                />
            )}
        </div>
    );
}

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    cursor?: boolean;
    onDone?: () => void;
    className?: string;
}

// Types text character by character once it scrolls into view
export function Typewriter({ text, speed = 45, delay = 0, cursor = false, onDone, className = '' }: TypewriterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();
    const [count, setCount] = useState(0);
    const firedRef = useRef(false);
    const done = count >= text.length;

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setCount(text.length);
            return;
        }
        let i = 0;
        let interval: ReturnType<typeof setInterval> | undefined;
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                i++;
                setCount(i);
                if (i >= text.length) clearInterval(interval);
            }, speed);
        }, delay);
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [inView, text, speed, delay, reduceMotion]);

    useEffect(() => {
        if (inView && done && !firedRef.current) {
            firedRef.current = true;
            onDone?.();
        }
    }, [inView, done, onDone]);

    return (
        <span ref={ref} className={className}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">{text.slice(0, count)}</span>
            {(!done || cursor) && <span className="term-cursor" aria-hidden="true" />}
        </span>
    );
}

interface PromptProps {
    command: string;
    path?: string;
    delay?: number;
    cursor?: boolean;
    onDone?: () => void;
    className?: string;
}

// Shell prompt line: fran@portfolio:~$ <command>
export function Prompt({ command, path = '~', delay, cursor, onDone, className = '' }: PromptProps) {
    return (
        <div className={`font-mono break-all ${className}`}>
            <span className="text-term-green">fran@portfolio</span>
            <span className="text-term-comment">:</span>
            <span className="text-term-mint">{path}</span>
            <span className="text-term-comment">$ </span>
            <Typewriter text={command} delay={delay} cursor={cursor} onDone={onDone} className="text-white" />
        </div>
    );
}

interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    bodyClassName?: string;
}

// Window chrome with traffic-light dots and a title bar
export function TerminalWindow({ title, children, className = '', bodyClassName = 'p-5 md:p-6' }: TerminalWindowProps) {
    return (
        <div className={`min-w-0 rounded-lg border border-dark-700 bg-dark-950 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)] ${className}`}>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-800/70 border-b border-dark-700">
                <span className="w-3 h-3 rounded-full bg-term-red/80" />
                <span className="w-3 h-3 rounded-full bg-term-yellow/80" />
                <span className="w-3 h-3 rounded-full bg-term-green/80" />
                <span className="flex-1 min-w-0 text-center text-xs text-term-comment truncate pr-0 sm:pr-12">{title}</span>
            </div>
            <div className={bodyClassName}>{children}</div>
        </div>
    );
}

interface SectionHeadingProps {
    index: string;
    title: string;
    command: string;
}

export function SectionHeading({ index, title, command }: SectionHeadingProps) {
    return (
        <div className="mb-8 md:mb-12">
            <Prompt command={command} className="text-sm md:text-base mb-3" />
            <h2 className="text-[1.4rem] sm:text-2xl md:text-4xl font-bold text-white flex items-center gap-3 md:gap-4">
                <span className="text-primary text-glow">{index}.</span>
                <span>{title}</span>
                <span className="hidden sm:block flex-grow ml-4 border-t border-dashed border-dark-700" />
            </h2>
        </div>
    );
}

export const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

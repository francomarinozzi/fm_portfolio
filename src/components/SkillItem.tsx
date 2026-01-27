import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
    skill: { name: string; icon: string | null };
}

export default function SkillItem({ skill }: SkillProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)} // Toggle for mobile tap
        >
            <div
                className={`
            px-4 py-2 rounded-lg text-sm border transition-all duration-300 flex items-center gap-3 overflow-hidden
            ${isHovered
                        ? 'bg-dark-900 border-primary text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] pr-6'
                        : 'bg-dark-800 border-dark-800 text-dark-50'
                    }
        `}
            >
                {skill.icon && (
                    <div className={`
                flex-shrink-0 transition-all duration-300
                ${isHovered ? 'w-6 h-6 opacity-100' : 'w-0 h-0 opacity-0 overflow-hidden'}
            `}>
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`w-full h-full object-contain ${
                                // Apply filter to specific dark icons to make them white
                                skill.icon.includes('webscraping-logo.gif')
                                    ? 'brightness-0 invert'
                                    : ''
                                }`}
                        />
                    </div>
                )}
                <span className="whitespace-nowrap">
                    {skill.name}
                </span>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ProjectModal from './ProjectModal';
import { SectionHeading, TerminalWindow, slugify } from './Terminal';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section id="projects" className="py-14 md:py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.div variants={item}>
                    <SectionHeading index="02" title="Featured Projects" command="ls -la ./projects" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer h-full min-w-0"
                        >
                            <TerminalWindow
                                title={`~/projects/${slugify(project.title)}`}
                                className="h-full flex flex-col group-hover:border-primary transition-all duration-300"
                                bodyClassName="p-5 flex flex-col flex-1"
                            >
                                <div className="text-xs text-term-comment mb-3">$ cat README.md</div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-dark-50 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-term-mint mb-5">
                                    {project.technologies.map((tech) => (
                                        <span key={tech.name}>#{slugify(tech.name)}</span>
                                    ))}
                                </div>

                                <div className="mt-auto text-xs text-primary/70 group-hover:text-primary transition-colors">
                                    &gt; open details<span className="term-cursor opacity-0 group-hover:opacity-100" />
                                </div>
                            </TerminalWindow>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}

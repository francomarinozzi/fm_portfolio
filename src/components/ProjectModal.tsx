import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Technology {
    name: string;
    icon: string;
}

interface ProjectMedia {
    image?: string;
    video?: string;
    gallery?: string[];
    galleryCaptions?: string[];
}

interface ProjectLinks {
    frontend?: string;
    backend?: string;
    live?: string;
}

interface Project {
    title: string;
    type: string;
    status: string;
    description: string;
    fullDescription?: string;
    technologies: Technology[] | string[];
    features?: string[];
    media?: ProjectMedia;
    links?: ProjectLinks;
}

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [zoomMedia, setZoomMedia] = React.useState<{ type: 'image' | 'video', url: string } | null>(null);

    // Reset index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
        setZoomMedia(null);
    }, [project?.title]);
    // Lock scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Early return if project is null
    if (!project) return null;

    const technologies = project.technologies as Technology[];
    const hasDetailedInfo = project.fullDescription || project.features || project.media;

    if (!hasDetailedInfo) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 md:inset-8 lg:inset-16 z-[10000] overflow-hidden flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-dark-900 w-full h-full md:rounded-2xl border-primary/20 md:border-2 overflow-y-auto project-modal-scroll pointer-events-auto relative">
                            {/* Close Button - High z-index and sticky */}
                            <button
                                onClick={onClose}
                                className="fixed top-4 right-4 z-[10001] p-3 bg-dark-800/90 backdrop-blur-md border border-primary/30 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300 shadow-2xl"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-6 pt-20 md:p-10 lg:p-12 relative">
                                {/* Header */}
                                <div className="mb-8 mt-4">
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-[11px] md:text-sm font-mono uppercase tracking-widest leading-none">
                                            {project.type}
                                        </span>
                                        <span className="px-2.5 py-1 bg-dark-800 border border-dark-900/50 rounded-full text-dark-50 text-[11px] md:text-sm font-mono uppercase tracking-widest leading-none">
                                            {project.status}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-glow leading-tight">
                                        {project.title}
                                    </h2>
                                </div>

                                {/* Repository Links */}
                                {project.links && (project.links.frontend || project.links.backend || project.links.live) && (
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="text-primary">Repository</span>
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {project.links.frontend && (
                                                <a
                                                    href={project.links.frontend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary/30 rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                                                >
                                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    <span className="text-dark-50 group-hover:text-primary transition-colors">Frontend</span>
                                                    <svg className="w-4 h-4 text-primary/60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.links.backend && (
                                                <a
                                                    href={project.links.backend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary/30 rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                                                >
                                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    <span className="text-dark-50 group-hover:text-primary transition-colors">Backend</span>
                                                    <svg className="w-4 h-4 text-primary/60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                {project.fullDescription && (
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="text-primary">About</span>
                                        </h3>
                                        <div className="text-dark-50 leading-relaxed whitespace-pre-line">
                                            {project.fullDescription}
                                        </div>
                                    </div>
                                )}

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="text-primary">Key Challenges</span>
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3 text-dark-50">
                                                    <span className="text-primary mt-1.5">▹</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                {technologies && technologies.length > 0 && (
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">Tech stack</span>
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                            {technologies.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center gap-3 p-4 bg-dark-800/50 rounded-xl border border-dark-800 hover:border-primary/30 transition-all duration-300 group"
                                                >
                                                    <div className="w-16 h-16 flex items-center justify-center">
                                                        <img
                                                            src={tech.icon}
                                                            alt={tech.name}
                                                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-dark-50 text-center group-hover:text-primary transition-colors">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Multimedia Section - Moved to bottom */}
                                {project.media && (
                                    <div className="mb-10 space-y-8 flex flex-col items-center">
                                        {/* Gallery Carrousel */}
                                        {project.media.gallery && project.media.gallery.length > 0 && (
                                            <div className="relative w-full max-w-4xl group">
                                                <div className="relative aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 bg-dark-800 touch-pan-y">
                                                    <AnimatePresence mode="wait">
                                                        <motion.img
                                                            key={currentImageIndex}
                                                            src={project.media.gallery[currentImageIndex]}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.3 }}
                                                            drag="x"
                                                            dragConstraints={{ left: 0, right: 0 }}
                                                            onDragEnd={(_, info) => {
                                                                if (info.offset.x < -50) {
                                                                    setCurrentImageIndex((prev) => (prev + 1) % project.media!.gallery!.length);
                                                                } else if (info.offset.x > 50) {
                                                                    setCurrentImageIndex((prev) => (prev - 1 + project.media!.gallery!.length) % project.media!.gallery!.length);
                                                                }
                                                                // If it was a click (not a drag), open zoom
                                                                if (Math.abs(info.offset.x) < 5 && Math.abs(info.offset.y) < 5) {
                                                                    setZoomMedia({ type: 'image', url: project.media!.gallery![currentImageIndex] });
                                                                }
                                                            }}
                                                            onClick={() => setZoomMedia({ type: 'image', url: project.media!.gallery![currentImageIndex] })}
                                                            className="w-full h-full object-contain cursor-zoom-in active:cursor-grabbing"
                                                            alt={`${project.title} gallery ${currentImageIndex + 1}`}
                                                        />
                                                    </AnimatePresence>

                                                    {/* Navigation Arrows - Visible on mobile for better UX */}
                                                    {project.media.gallery.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setCurrentImageIndex((prev) => (prev - 1 + project.media!.gallery!.length) % project.media!.gallery!.length);
                                                                }}
                                                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-dark-900/60 border border-primary/30 rounded-full text-primary md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white z-10"
                                                                aria-label="Previous image"
                                                            >
                                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setCurrentImageIndex((prev) => (prev + 1) % project.media!.gallery!.length);
                                                                }}
                                                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-dark-900/60 border border-primary/30 rounded-full text-primary md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white z-10"
                                                                aria-label="Next image"
                                                            >
                                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>
                                                        </>
                                                    )}

                                                    {/* Indicators */}
                                                    {project.media.gallery.length > 1 && (
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                            {project.media.gallery.map((_, idx) => (
                                                                <button
                                                                    key={idx}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setCurrentImageIndex(idx);
                                                                    }}
                                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'}`}
                                                                    aria-label={`Go to slide ${idx + 1}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Caption */}
                                                {project.media.galleryCaptions && project.media.galleryCaptions[currentImageIndex] && (
                                                    <motion.p
                                                        key={`caption-${currentImageIndex}`}
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-4 text-sm text-dark-50 text-center italic"
                                                    >
                                                        {project.media.galleryCaptions[currentImageIndex]}
                                                    </motion.p>
                                                )}
                                            </div>
                                        )}

                                        {/* Presentation Image (Legacy/Single) */}
                                        {project.media.image && !project.media.gallery && (
                                            <div
                                                className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 w-full max-w-4xl cursor-zoom-in group/img relative"
                                                onClick={() => setZoomMedia({ type: 'image', url: project.media!.image! })}
                                            >
                                                <img
                                                    src={project.media.image}
                                                    alt={`${project.title} presentation`}
                                                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}

                                        {/* Video - Looping without controls */}
                                        {project.media.video && (
                                            <div
                                                className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 w-full max-w-4xl bg-dark-800 cursor-zoom-in group/vid relative"
                                                onClick={() => setZoomMedia({ type: 'video', url: project.media!.video! })}
                                            >
                                                <video
                                                    src={project.media.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-auto aspect-video object-cover md:object-contain group-hover:scale-[1.01] transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/vid:opacity-100 transition-opacity flex items-center justify-center border-none">
                                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Zoom Lightbox */}
                    <AnimatePresence>
                        {zoomMedia && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-10"
                            >
                                <div
                                    className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                                    onClick={() => setZoomMedia(null)}
                                />

                                <button
                                    onClick={() => setZoomMedia(null)}
                                    className="absolute top-6 right-6 z-50 p-3 bg-dark-800/80 border border-primary/30 rounded-full text-white hover:bg-primary transition-all shadow-2xl"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="relative max-w-full max-h-full flex items-center justify-center shadow-2xl shadow-primary/20 rounded-2xl overflow-hidden"
                                >
                                    {zoomMedia.type === 'image' ? (
                                        <img
                                            src={zoomMedia.url}
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                            alt="Project zoom"
                                        />
                                    ) : (
                                        <video
                                            src={zoomMedia.url}
                                            autoPlay
                                            loop
                                            controls
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(modalContent, document.body);
}

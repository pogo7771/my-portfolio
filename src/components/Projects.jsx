import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    const projects = [
        {
            title: "Sales Performance Dashboard",
            description: "Interactive PowerBI dashboard analyzing monthly sales trends, regional performance, and top-selling products. Enabled 20% faster decision making for stake holders.",
            tags: ["PowerBI", "SQL", "DAX"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
            demo: "https://app.powerbi.com/",
            github: "https://github.com/sachinr"
        },
        {
            title: "Customer Churn Prediction",
            description: "End-to-end ML pipeline predicting customer churn with 85% accuracy. Identified key risk factors and suggested retention strategies.",
            tags: ["Python", "Scikit", "Pandas"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
            demo: "#",
            github: "https://github.com/sachinr"
        },
        {
            title: "Supply Chain Optimization",
            description: "Analyzed logistics data using Python & Seaborn to identify bottlenecks. Proposed route optimizations that could save 15% in fuel costs.",
            tags: ["EDA", "Python", "Seaborn"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
            demo: "#",
            github: "https://github.com/sachinr"
        },
        {
            title: "Twitter Sentiment Analysis",
            description: "Scraped and analyzed 50k+ tweets to gauge brand sentiment during a product launch. Visualized real-time sentiment trends.",
            tags: ["NLP", "Python", "API"],
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
            demo: "#",
            github: "https://github.com/sachinr"
        }
    ];

    return (
        <section id="projects" ref={targetRef} className="bg-black relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_50%)]"></div>

                <div className="relative z-10 w-full">
                    <div className="container mx-auto px-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-end justify-between"
                        >
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">Featured <span className="text-emerald-500">Case Studies</span></h2>
                                <p className="text-gray-400 text-lg">Selected projects that define my analytical journey.</p>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-emerald-500 font-medium">
                                Scroll to explore <ArrowUpRight size={20} className="rotate-45" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-24">
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative h-[450px] w-[350px] md:w-[600px] md:h-[400px] flex-shrink-0 bg-gray-900 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-500">
            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Floating Action Buttons on Image (Mobile) */}
                    <div className="absolute bottom-4 right-4 flex gap-2 md:hidden">
                        {project.demo && project.demo !== '#' && (
                            <a href={project.demo} className="p-2 bg-white rounded-full text-black hover:bg-emerald-400 transition-colors" title="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        )}
                        <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black transition-colors" title="View Code">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black">
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-emerald-400 border border-emerald-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 ${project.demo === '#' ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-emerald-600 hover:bg-emerald-500 text-white'} font-semibold rounded-lg transition-all transform hover:-translate-y-1`}
                        >
                            Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-300 hover:text-white font-semibold rounded-lg transition-all"
                        >
                            <Github size={18} /> Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

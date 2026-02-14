import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ChevronsDown, Github, Linkedin, Mail, Database, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const yRange = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse move effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Particle effect state
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 40;
        const newParticles = Array.from({ length: particleCount }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 10 + 5,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.2
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white group"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] z-0"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            {/* Animated Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Floating Particles (Data Grid) */}
            <div className="absolute inset-0 z-0">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-emerald-500"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            opacity: p.opacity,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [p.opacity, 0.8, p.opacity],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay,
                        }}
                    />
                ))}
                {/* Connecting Lines for "Constellation" effect (Optional visual flair) */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content */}
            <motion.div
                className="z-10 text-center px-4 max-w-4xl"
                style={{ y: yRange, opacity: opacityRange }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="text-sm font-medium text-gray-300">Turning Raw Data into Strategic Insights</span>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Sachin
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-4xl text-gray-400 mb-10 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span className="flex flex-wrap justify-center gap-3">
                        <span className="flex items-center gap-2">Data Analyst <Database size={24} className="text-emerald-500" /></span>
                        <span className="opacity-30">|</span>
                        <span className="flex items-center gap-2">Viz Expert <Brain size={24} className="text-teal-500" /></span>
                    </span>
                </motion.h2>

                <motion.div
                    className="flex justify-center gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {[

                        { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/sachin-tech1", target: "_blank" },

                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative text-gray-400 group-hover:text-emerald-400 transition-colors">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500 group"
                    >
                        <div className="absolute -inset-3 rounded-full bg-emerald-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
                        View Case Studies
                        <ChevronsDown className="ml-2 animate-bounce" size={20} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

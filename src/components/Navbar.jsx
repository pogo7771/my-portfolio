import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled
                    ? 'bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] max-w-5xl mx-auto'
                    : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 group-hover:rotate-12 transition-transform duration-300">
                            <Code2 size={24} className="text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Sachin<span className="text-emerald-500">.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 relative bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveTab(link.name)}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${activeTab === link.name ? 'text-black' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {activeTab === link.name && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-emerald-400 rounded-full -z-10 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-lg text-gray-300 group-hover:text-emerald-400 transition-colors">{link.name}</span>
                                    <motion.span
                                        initial={{ x: -10, opacity: 0 }}
                                        whileHover={{ x: 0, opacity: 1 }}
                                        className="text-emerald-500 opacity-0 group-hover:opacity-100"
                                    >
                                        →
                                    </motion.span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const certifications = [
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            date: "2023",
            credentialId: "G-123456789",
            link: "#",
            logo: "G", // You could replace this with an actual image URL if available
            color: "from-blue-500 to-yellow-500",
            skills: ["Data Cleaning", "R Programming", "Tableau", "Data Visualization"]
        },
        {
            title: "TCS iON Career Edge - Young Professional",
            issuer: "TCS",
            date: "2022",
            credentialId: "TCS-987654321",
            link: "#",
            logo: "T",
            color: "from-purple-500 to-pink-500",
            skills: ["Communication", "Soft Skills", "Business Etiquette"]
        },
        {
            title: "Python for Data Science and AI",
            issuer: "IBM",
            date: "2022",
            credentialId: "IBM-456123789",
            link: "#",
            logo: "I",
            color: "from-blue-600 to-cyan-400",
            skills: ["Python", "Pandas", "NumPy", "AI Basics"]
        },
        {
            title: "SQL for Data Science",
            issuer: "University of California, Davis",
            date: "2023",
            credentialId: "SQL-789456123",
            link: "#",
            logo: "S",
            color: "from-emerald-500 to-green-500",
            skills: ["SQL", "Relational Databases", "Data Analysis"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="certifications" className="py-24 bg-black text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Certifications</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Continuous learning is my mantra. Here are the professional credentials I've earned to validate my skills.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="group relative bg-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/10`}>
                                    {cert.logo}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>

                                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} /> Issued {cert.date}
                                        </div>
                                        {cert.credentialId && (
                                            <div className="flex items-center gap-1">
                                                <Award size={14} /> ID: {cert.credentialId}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={cert.link}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                                    >
                                        Show Credential <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "J.S. University",
            location: "Shikohabad, Uttar Pradesh",
            year: "2022 - 2025",
            grade: "CGPA: 7.8/10",
            description: "Specialized in Data Science and Machine Learning. Capstone project focused on predictive analytics for healthcare systems.",
            courses: ["Data Structures & Algorithms", "Database Management Systems", "Probability & Statistics", "Operating Systems", "Artificial Intelligence"]
        },
        {
            degree: "Higher Secondary Education (Science)",
            institution: "St. Dominic Savio English Medium School",
            location: "Lalitpur, Uttar Pradesh",
            year: "2020 - 2021",
            grade: "Percentage: 75%",
            description: "Core subjects included Physics, Chemistry, Mathematics, and Computer Science. Active member of the coding club.",
            courses: ["Mathematics", "Physics", "Computer Science"]
        }
    ];

    return (
        <section id="education" className="py-24 bg-black text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Background</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The foundational knowledge that powers my analytical skills.
                    </p>
                </motion.div>

                <div ref={ref} className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-px bg-white/10 hidden md:block"></div>

                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className={`flex flex-col md:flex-row gap-8 mb-16 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot (Desktop) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-black z-10 hidden md:block mt-6"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <div className={`relative bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    {/* Gradient Decoration */}
                                    <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-tl-2xl rounded-br-full pointer-events-none`}></div>

                                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} gap-2 mb-4`}>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20">
                                            <GraduationCap size={16} />
                                            {edu.degree}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                        <div className={`flex flex-wrap gap-4 text-gray-400 text-sm ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {edu.year}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-emerald-400 font-semibold mb-4">{edu.grade}</p>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {edu.description}
                                    </p>

                                    <div>
                                        <h4 className={`text-sm font-semibold text-white mb-3 flex items-center gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                            <BookOpen size={16} className="text-emerald-500" /> Key Coursework
                                        </h4>
                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                            {edu.courses.map((course, i) => (
                                                <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for the other side of the timeline */}
                            <div className="w-full md:w-1/2 hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

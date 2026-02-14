import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, Coffee, Cpu } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image / Content Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative group"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20 blur-lg"></div>
                        <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Cpu size={120} />
                            </div>

                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><BookOpen size={24} /></span>
                                My Journey
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                I started heavily analyzing data sets during my university days, fascinated by how raw numbers could tell such compelling stories.
                                What began as simple Excel spreadsheets evolved into complex predictive models using Python and Machine Learning.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Today, I help businesses make sense of their data chaos. Whether it's optimizing supply chains or predicting customer behavior,
                                I thrive on turning "what happened" into "what's next".
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-1">4+</h4>
                                    <p className="text-xs text-emerald-400 uppercase tracking-wider">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                                    <p className="text-xs text-emerald-400 uppercase tracking-wider">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            More Than Just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Numbers</span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            I believe data analysis is an art form. It's not just about SQL queries and Python scripts; it's about asking the right questions.
                            My approach combines technical rigor with business acumen to deliver insights that actually move the needle.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Strategic Thinking", desc: "Connecting data patterns to business goals.", icon: <Award size={20} /> },
                                { title: "Visual Storytelling", desc: "Creating dashboards that speak for themselves.", icon: <BookOpen size={20} /> },
                                { title: "Continuous Learning", desc: "Staying ahead with the latest in AI & ML.", icon: <Coffee size={20} /> }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="p-3 bg-gray-800 rounded-lg text-emerald-400 shadow-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

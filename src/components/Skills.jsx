import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, BarChart2, Lightbulb, PieChart, TrendingUp, Code2, Layers, Cpu } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        {
            category: "Data Processing",
            icon: <Code2 className="w-6 h-6" />,
            items: ["Python", "Pandas", "NumPy", "SQL", "ETL", "Cleaning"],
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            category: "Visualization",
            icon: <PieChart className="w-6 h-6" />,
            items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js", "Looker"],
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            category: "Advanced Analytics",
            icon: <BrainIcon className="w-6 h-6" />,
            items: ["Regression", "Forecasting", "A/B Testing", "Clustering", "NLP"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            category: "Infrastructure",
            icon: <Database className="w-6 h-6" />,
            items: ["PostgreSQL", "Snowflake", "BigQuery", "Git", "Docker", "AWS"],
            gradient: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="skills" className="py-32 bg-black text-white relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Analytical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Leveraging cutting-edge tools to transform raw numbers into meaningful narratives.
                    </p>
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {skills.map((skill, idx) => (
                        <SkillCard key={idx} skill={skill} index={idx} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill, index, isInView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
            <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/5 rounded-lg text-gray-300 group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${skill.gradient} opacity-10 rounded-bl-[100px] pointer-events-none transition-opacity group-hover:opacity-20`}></div>
            </div>
        </motion.div>
    )
}

// Icon Helper
const BrainIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
)

export default Skills;

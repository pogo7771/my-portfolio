import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/sachinrajpoot1253@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: "New Portfolio Inquiry from " + formState.name,
                    _template: "table"
                })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Form submission error:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Form submission network error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-900/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Touch</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out using the form below or through my social channels.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-emerald-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email</h4>
                                    <a href="mailto:sachinrajpoot1253@gmail.com" className="text-gray-400 hover:text-white transition-colors">sachinrajpoot1253@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-teal-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Phone</h4>
                                    <p className="text-gray-400">+91 95696 45709</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-emerald-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Location</h4>
                                    <p className="text-gray-400">Kanpur, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl"
                    >
                        {/* Success Message Overlay */}
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                            >
                                <div className="p-4 bg-emerald-500/20 rounded-full text-emerald-400">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">
                                    Thanks for reaching out! I'll check my inbox and get back to you soon.
                                </p>
                                <p className="text-xs text-gray-500 mt-4">
                                    (Please check your email <b>sachinrajpoot1253@gmail.com</b> to activate the form if this was your first time using FormSubmit).
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
                                >
                                    Send another
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 transition-all resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-400/10 rounded-lg">
                                        <AlertCircle size={16} />
                                        <span>Something went wrong. Please try again or email me directly.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

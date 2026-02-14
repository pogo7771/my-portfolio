import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Sachin R. All rights reserved.</p>

                </div>

                <div className="flex space-x-6">                   

                    <a href="www.linkedin.com/in/sachin-tech1" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

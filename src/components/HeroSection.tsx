import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Using react-icons for social links

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 md:px-8">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
        Siddharth Natamai
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in-up">
        Computer Science Graduate from Carleton University | Previously Core OS Software Development Student @ BlackBerry QNX | Building OctaneBuddy for iOS
      </p>
      <div className="flex space-x-6 animate-fade-in">
        <a
          href="https://www.linkedin.com/in/siddharth-natamai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/sidbmw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 
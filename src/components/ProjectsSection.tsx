import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'; // Use Next.js Link for internal/external links if needed

const projectsData = [
  {
    title: 'OctaneBuddy iOS App',
    description: 'Developed a lightweight iOS app with CarPlay integration for real-time fuel pricing and navigation. Features include station filtering, widget support, location-change threshold optimization using CoreLocation and MapKit, improved fuel price updates via Background App Refresh, and integrated OCR capability using VisionKit and Cloudmersive for user-submitted fuel prices. Currently supporting over 3000 users across USA, Canada, UK, Germany, Australia.',
    tags: ['SwiftUI', 'MapKit', 'CoreLocation', 'VisionKit', 'CarPlay', 'WidgetKit', 'Cloudmersive OCR', 'iOS'],
    appStoreUrl: 'https://apps.apple.com/ca/app/octanebuddy/id6738063165',
    githubUrl: null, // Add GitHub URL if public
    date: '2023 - Present',
  },
  {
    title: 'Neureset Device Simulator',
    description: 'Led development of a C++ and Qt-based simulator for EEG graph visualization, session logging, and user status monitoring for the Neureset medical device. Engineered core functionality, incorporated advanced signal processing, and implemented intuitive navigation.',
    tags: ['C++', 'Qt', 'Signal Processing', 'Medical Simulation', 'UI/UX'],
    appStoreUrl: null,
    githubUrl: 'https://github.com/sidbmw/Neureset_Device_Simulator',
    date: 'Jan 2024 - Apr 2024',
  },
  {
    title: 'Traffic Sign Detection',
    description: 'Developed a traffic sign detection and recognition system using Python, OpenCV, and deep learning techniques. Created a CNN model on the GTSRB dataset and integrated template matching with SIFT for enhanced accuracy. Built a user-friendly GUI for image processing and result visualization.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'CNN', 'SIFT', 'Computer Vision', 'GUI'],
    appStoreUrl: null,
    githubUrl: 'https://github.com/sidbmw/Traffic-Sign-Detection',
    date: 'Mar 2024 - Apr 2024',
  },
  {
    title: 'QNXCarSim',
    description: 'Simulation of a car environment for COMP 4900 course project using QNX 7.1.',
    tags: ['C', 'QNX', 'Simulation'],
    appStoreUrl: null,
    githubUrl: 'https://github.com/sidbmw/QNXCarSim',
    date: 'Course Project',
  },
  {
    title: 'GRADESK',
    description: 'Grade management software for teachers developed using Python 3, PySimpleGUI, and an Oracle Database.',
    tags: ['Python', 'PySimpleGUI', 'Oracle DB', 'GUI', 'Education'],
    appStoreUrl: null,
    githubUrl: 'https://github.com/sidbmw/GRADESK',
    date: 'Side Project',
  },
  // Add other notable projects from GitHub/Resume if desired
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.date}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
                {project.appStoreUrl && (
                  <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                    App Store
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 
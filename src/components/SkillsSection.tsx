import React from 'react';

const skillsData = {
  languages: ['Python', 'C', 'Java', 'Shell Script', 'SQL', 'Swift', 'C++', 'JavaScript', 'HTML', 'CSS'],
  technologies: ['POSIX', 'GCC', 'GDB', 'QEMU', 'Makefile', 'Git', 'SVN', 'Jira', 'Vim', 'Zsh', 'Docker', 'Bash', 'Xcode', 'Qt', 'SwiftUI', 'MapKit', 'CoreLocation', 'CarPlay', 'VisionKit', 'OpenCV', 'PySimpleGUI', 'Next.js', 'React', 'Tailwind CSS', 'Oracle DB'],
  os: ['Linux/Unix', 'QNX OS', 'POSIX OS', 'iOS', 'macOS'],
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Languages" skills={skillsData.languages} />
          <SkillCategory title="Tools & Technologies" skills={skillsData.technologies} />
          <SkillCategory title="Operating Systems" skills={skillsData.os} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 
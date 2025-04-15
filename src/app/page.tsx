import React from 'react';
import HeroSection from '@/components/HeroSection'; // Import the HeroSection component
import ExperienceSection from '@/components/ExperienceSection'; // Import ExperienceSection
import ProjectsSection from '@/components/ProjectsSection'; // Import ProjectsSection
import SkillsSection from '@/components/SkillsSection'; // Import SkillsSection

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection /> {/* Add the HeroSection component */}
      <ExperienceSection /> {/* Add ExperienceSection */}
      <ProjectsSection /> {/* Add ProjectsSection */}
      <SkillsSection /> {/* Add SkillsSection */}

      {/* Other sections will be added below */}
      {/* <SkillsSection /> */}
      {/* <EducationSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
}

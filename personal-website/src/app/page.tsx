import React from 'react';
import HeroSection from '@/components/HeroSection'; // Import the HeroSection component
import ExperienceSection from '@/components/ExperienceSection'; // Import ExperienceSection

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection /> {/* Add the HeroSection component */}
      <ExperienceSection /> {/* Add ExperienceSection */}

      {/* Other sections will be added below */}
      {/* <ProjectsSection /> */}
      {/* <SkillsSection /> */}
      {/* <EducationSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
}

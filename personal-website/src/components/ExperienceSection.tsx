import React from 'react';

const experienceData = [
  {
    title: 'Core OS Software Development Student',
    company: 'BlackBerry QNX',
    location: 'Ottawa, Canada',
    date: 'May 2021 - Aug 2024',
    description: [
      'Modified kernel and filesystem following ISO 26262 ASIL D, IEC 61508 SIL3, MISRA C standards.',
      'Developed unit tests for QNX OS crypto library, achieving 100% line/branch coverage.',
      'Identified gaps in unit tests, resolved bugs, generated reports, and documented findings.',
      'Significantly improved unit test framework build time from 11 hrs to 5 mins.',
      'Managed and maintained production servers and OpenStack instances.',
      'Mentored and provided support to new co-op students.',
      'Awarded for above-and-beyond effort towards QNX OS for Safety 2.2.2 and QNX Hypervisor for Safety 2.2.5 releases.',
      'Researched and planned adoption of PowerPy testing framework.',
      'Pioneered QNX development on Apple Silicon.',
    ],
  },
  {
    title: 'Independent Contractor',
    company: 'Fearless Design, LLC',
    location: 'Remote (based in California, USA)',
    date: 'Effective March 31, 2025 - Present',
    description: [
      'Onboarding Responsibilities: Identify, test, and verify support for vehicle parameters (odometer, speed, tire pressure, fuel level, battery level, state of health, charging state, cell voltages) on Sidecar App Leaderboard.',
      'Receive customer verifications (scan logs) via email and update parameter support matrix.',
      'Follow up with customers for additional scan logs as needed.',
      'Identify and file bugs/feature requests for vehicle onboarding.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-left md:text-right">
                <h3 className="text-xl font-semibold mb-1">{job.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.date}</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-gray-200 dark:border-gray-700 pl-6 md:border-l-0 md:border-t-2 md:pt-6 md:pl-0 md:ml-6">
                <h4 className="text-lg font-medium mb-2">{job.title}</h4>
                <ul className="list-disc list-outside space-y-1 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {job.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
import { InlineCode, SmartLink } from "@/once-ui/components";

const person = {
  firstName: "Siddharth",
  lastName: "Natamai",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Vehicle Onboarding Engineer",
  avatar: "images/avatar.jpg",
  location: "America/Toronto",
  languages: ["English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, technology, and share thoughts from my projects and experiences.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sidbmw",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/siddharth-natamai",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:siddharthnatamai@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `My personal portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer & Builder</>,
  subline: (
    <>
      I'm Siddharth, a software developer based in Ottawa. Currently building 
      <br /> OctaneBuddy for iOS and exploring core OS development.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Learn more about me, ${person.name}, ${person.role} based in Ottawa`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Ottawa-based software developer currently studying Computer Science at Carleton
        University. Previously a Core OS Software Development Student at BlackBerry QNX, I have
        gained experience in kernel development, filesystems, and building applications like my
        OctaneBuddy iOS app.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Clutch Engineering / Featherless Design, LLC",
        timeframe: "Apr 2025 - Present",
        role: "Vehicle Onboarding Engineer (Contract Part-time)",
        achievements: [
          <>
            Expanding Sidecar's compatibility (<SmartLink href='https://sidecar.clutch.engineering'>sidecar.clutch.engineering</SmartLink>) by discovering and testing proprietary OBDII PID's across various vehicle models.
          </>,
          <>
            Analyzing vehicle scan logs, identifying unique vehicle parameters, and integrating them into the platform to enhance diagnostic/analytic capabilities.
          </>,
        ],
        images: [],
      },
      {
        company: "BlackBerry QNX",
        timeframe: "May 2021 - Aug 2024",
        role: "Core OS Software Development Student",
        achievements: [
          <>
            <b>SDP 8.0 Contributions:</b> Contributed significantly to pre-release and post-release phases. Work included enhancing the kernel and filesystem, notably migrating filesystem utilities from their own crypto framework to the QNX cryptography library, bolstering platform security. Also generated a comprehensive list of potential Design Safe State (DSS) triggers.
          </>,
          <>
            <b>QOS (2.2.2 - 2.2.7) Contributions:</b> Identified and resolved issues in unit tests, enhancing accuracy and reliability. Developed scripts to generate lcov results, segregating results by architecture (aarch64, x86_64, arm, x86) for better reporting.
          </>,
          <>
            <b>UT Server Management:</b> As prime UT server administrator, ensured continuous functionality by resolving complex issues and configuring scripts to run all product branches concurrently, maintaining the integrity of the testing environment. Managed to bring total UT run time from several hours to 5 minutes making full use of the available hardware resources.
          </>,
          <>
            <b>Tool and Script Development:</b> Fixed and maintained the merge request creation script, automated unit tests, static analysis, regression testing, and streamlined the integration process. Researched and tested migration from Klocwork to using Coverity as a static analysis tool.
          </>,
          <>
            <b>Mentorship & Innovation:</b> Mentored co-op students over several terms. Collaborated with the DevOps team on running unit tests on QNX VMs to improve robustness. Helped set up QNX environments on Apple Silicon, enhancing accessibility towards students.
          </>,
          <>
             Pioneered the setup of QNX development environment on Apple Silicon, assisting classmates in RTOS course.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Carleton University",
        description: (
          <>
            Bachelor of Computer Science (Sep 2019 - Present). Relevant Courses: Object Oriented
            Software Engineering, Abstract Data Types and Algorithms, Operating Systems, Real-Time
            Operating Systems, Computer Vision, Human-Computer Interaction.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Python, C, Java, Shell Script, SQL.</>,
        images: [],
      },
      {
        title: "Technologies/Tools",
        description: (
          <>
            Linux/Unix, QNX OS, QNX OS for Safety, POSIX, GDB, GCC, QEMU, Makefile, Git, SVN, Jira,
            Vim, Zsh, Docker, Bash, OpenStack.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what I have been writing about recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects I have worked on`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by me`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

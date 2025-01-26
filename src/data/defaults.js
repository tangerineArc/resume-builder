const defaultEmployments = [
  {
    id: crypto.randomUUID(),
    role: "Web Developer",
    employer: "Acme Inc.",
    startDate: "Oct 2021",
    endDate: "Present",
    city: "San Diego, CA",
    description:
      "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
  },
  {
    id: crypto.randomUUID(),
    role: "Junior Web Developer",
    employer: "Startup Inc.",
    startDate: "Nov 2024",
    endDate: "Dec 2025",
    city: "San Francisco, CA",
    description:
      "Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
  },
];

const defaultSkills = [
  {
    id: crypto.randomUUID(),
    category: "Programming Languages",
    skills: "HTML, CSS, JavaScript",
  },
  {
    id: crypto.randomUUID(),
    category: "Cloud Services",
    skills: "AWS, GCP, MS Azure",
  },
  {
    id: crypto.randomUUID(),
    category: "Databases",
    skills: "MySQL, SQLite, PostgreSQL, MongoDB",
  },
];

const defaultEntries = [
  {
    id: crypto.randomUUID(),
    school: "IIT Patna",
    degree: "B.Tech Computer Science",
    startDate: "Aug 2023",
    endDate: "Present",
    city: "Patna, Bihar",
    description:
      "Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
  },
];

export { defaultEmployments, defaultSkills, defaultEntries };

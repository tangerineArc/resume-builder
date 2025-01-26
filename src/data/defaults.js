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

export { defaultEmployments, defaultSkills };

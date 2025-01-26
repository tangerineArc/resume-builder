const defaultEmployments = [
  {
    id: crypto.randomUUID(),
    role: "Leader",
    employer: "House of the Dead",
    startDate: "Oct 20XX",
    endDate: "Present",
    city: "Underground",
    description:
      "Engineered the downfall of influential groups through meticulous manipulation of events and human behavior.",
  },
  {
    id: crypto.randomUUID(),
    role: "Founder",
    employer: "Decay of the Angel",
    startDate: "Nov 20XX",
    endDate: "Dec 20XX",
    city: "Underground",
    description:
      "Spearheaded an international operation to dismantle corrupt organizations and destabilize global powers to achieve ideological goals.",
  },
];

const defaultSkills = [
  {
    id: crypto.randomUUID(),
    category: "Ability",
    skills: "Crime and Punishment",
  },
  {
    id: crypto.randomUUID(),
    category: "Strategic Planning",
    skills: "Resource optimization, Risk assessment",
  },
  {
    id: crypto.randomUUID(),
    category: "Psychological Expertise",
    skills: "Behavioral manipulation",
  },
  {
    id: crypto.randomUUID(),
    category: "Leadership",
    skills: "Charisma, Precision execution"
  }
];

const defaultEntries = [
  {
    id: crypto.randomUUID(),
    school: "School of Shadows",
    degree: "Philosophy of Sin",
    startDate: "Aug 20XX",
    endDate: "Dec 20XX",
    city: "Underground",
    description:
      "Mastered the art of strategy, philosophy, and human psychology through relentless study and real-world application. My education transcends formal institutions, shaped by literature, existential thought, and the complexities of human nature.",
  },
];

const defaultLanguages = [
  {
    id: crypto.randomUUID(),
    language: "English",
  },
  {
    id: crypto.randomUUID(),
    language: "Japanese",
  },
  {
    id: crypto.randomUUID(),
    language: "Russian",
  },
];

export { defaultEmployments, defaultSkills, defaultEntries, defaultLanguages };

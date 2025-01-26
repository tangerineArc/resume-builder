import "../styles/skills-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton.jsx";

import SkillItem from "./SkillItem.jsx";

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

export default function SkillsSection() {
  const [skills, setSkills] = useState(defaultSkills);

  const handleAddSkill = () => {
    if (!skills.at(-1).category) return;

    const skill = {
      id: crypto.randomUUID(),
      category: "",
      skills: "",
    };

    setSkills((prevSkills) => {
      const newSkills = structuredClone(prevSkills);
      newSkills.push(skill);
      return newSkills;
    });
  };

  const handleDeleteSkill = (targetId) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== targetId)
    );
  };

  return (
    <section id="skills-section">
      <hr />
      <h2>Skills</h2>
      <hr />
      <div>
        <div>
          <input defaultValue={"Categories"} disabled />
          <input defaultValue={"Skills"} disabled />
        </div>

        {skills.map((skill) => {
          return (
            <SkillItem
              key={skill.id}
              item={skill}
              deleteEventHandler={() => handleDeleteSkill(skill.id)}
            />
          );
        })}
      </div>

      <AddButton label={"Add Skill"} clickEventHandler={handleAddSkill} />
    </section>
  );
}

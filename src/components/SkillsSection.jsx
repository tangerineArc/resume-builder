import "../styles/skills-section.css";

import AddButton from "../ui/AddButton.jsx";

import SkillItem from "./SkillItem.jsx";

export default function SkillsSection({ modifiers, data }) {
  const handleAddSkill = () => {
    if (!data.skills.at(-1).category) return;

    const skill = {
      id: crypto.randomUUID(),
      category: "",
      skills: "",
    };

    modifiers.setSkills((prevSkills) => {
      const newSkills = structuredClone(prevSkills);
      newSkills.push(skill);
      return newSkills;
    });
  };

  const handleDeleteSkill = (targetId) => {
    modifiers.setSkills((prevSkills) =>
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

        {data.skills.map((skill) => {
          return (
            <SkillItem
              key={skill.id}
              item={skill}
              deleteEventHandler={() => handleDeleteSkill(skill.id)}
              modifiers={modifiers}
            />
          );
        })}
      </div>

      <AddButton label={"Add Skill"} clickEventHandler={handleAddSkill} />
    </section>
  );
}

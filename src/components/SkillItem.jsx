import "../styles/skill-item.css";

import { CircleMinus } from "lucide-react";

export default function SkillItem({ item, deleteEventHandler, modifiers }) {
  const handleCategoryInput = (event) => {
    modifiers.setSkills(prevSkills => {
      const newSkills = structuredClone(prevSkills);
      for (let skill of newSkills) {
        if (skill.id === item.id) {
          skill.category = event.target.value.trim();
          break;
        }
      }
      return newSkills;
    });
  };

  const handleSkillsInput = (event) => {
    modifiers.setSkills(prevSkills => {
      const newSkills = structuredClone(prevSkills);
      for (let skill of newSkills) {
        if (skill.id === item.id) {
          skill.skills = event.target.value.trim();
          break;
        }
      }
      return newSkills;
    });
  };

  return (
    <div className="skill-item">
      <input
        type="text"
        defaultValue={item.category}
        placeholder="category"
        onInput={handleCategoryInput}
      />
      <input
        type="text"
        defaultValue={item.skills}
        placeholder="skills"
        onInput={handleSkillsInput}
      />

      <CircleMinus color="#abc4ff" className="remove-icon" onClick={deleteEventHandler} />
    </div>
  );
}

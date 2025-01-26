import "../styles/skill-item.css";

import { CircleMinus } from "lucide-react";

export default function SkillItem({ item, deleteEventHandler }) {
  const handleCategoryInput = (event) => {
    item.category = event.target.value.trim();
  };

  const handleSkillsInput = (event) => {
    item.skills = event.target.value.trim();
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

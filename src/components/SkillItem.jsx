import "../styles/skill-item.css";

import { CircleMinus } from "lucide-react";

export default function SkillItem({ category, skills }) {
  return (
    <div className="skill-item">
      <input type="text" defaultValue={category} />
      <input type="text" defaultValue={skills} />
      <CircleMinus color="#abc4ff" className="remove-icon" />
    </div>
  );
}

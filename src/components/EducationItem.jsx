import "../styles/education-item.css";

import { Pencil, Trash2 } from "lucide-react"

export default function EducationItem({degree, school, startDate, endDate}) {
  return (
    <div className="education-item">
      <div>
        <p>{degree} at {school}</p>
        <p>{startDate} - {endDate}</p>
      </div>
      <div>
        <Pencil className="icon" color="#0582ca" />
        <Trash2 className="icon" color="#5c677d" />
      </div>
    </div>
  );
}

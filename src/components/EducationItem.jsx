import "../styles/education-item.css";

import { Pencil } from "lucide-react"

export default function EducationItem({degree, school, startDate, endDate}) {
  return (
    <div className="education-item">
      <div>
        <p>{degree} at {school}</p>
        <p>{startDate} - {endDate}</p>
      </div>
      <Pencil className="edit-icon" color="#0582ca" />
    </div>
  );
}

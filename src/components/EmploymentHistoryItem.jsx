import "../styles/employment-history-item.css";

import { Pencil } from "lucide-react";

export default function EmploymentHistoryItem({ role, startDate, endDate }) {
  return (
    <div className="employment-history-item">
      <div>
        <p>{role}</p>
        <p>{startDate} - {endDate}</p>
      </div>
      <Pencil color="#0582ca" className="edit-icon" />
    </div>
  );
}

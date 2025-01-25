import "../styles/employment-history-item.css";

import { Pencil, Trash2 } from "lucide-react";

export default function EmploymentHistoryItem({ role, startDate, endDate }) {
  return (
    <div className="employment-history-item">
      <div>
        <p>{role}</p>
        <p>{startDate} - {endDate}</p>
      </div>
      <div>
        <Pencil color="#0582ca" className="icon" />
        <Trash2 color="#5c677d" className="icon" />
      </div>
    </div>
  );
}

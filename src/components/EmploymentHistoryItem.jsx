import "../styles/employment-history-item.css";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

import EmploymentHistoryEditorForm from "./EmploymentHistoryEditorForm.jsx";

export default function EmploymentHistoryItem({ item, deleteEventHandler }) {
  const [isEditingEmployment, setIsEditingEmployment] = useState(false);

  const handleEditEmployment = () => {
    setIsEditingEmployment(true);
  };

  const handleCancelEdit = () => {
    setIsEditingEmployment(false);
  };

  const handleSaveEmployment = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    item.role = data["job-role"];
    item.employer = data.employer;
    item.startDate = data["start-date"];
    item.endDate = data["end-date"];
    item.city = data["city"];
    item.description = data.description;

    handleCancelEdit();
  };

  return !isEditingEmployment ? (
    <div className="employment-history-item">
      <div>
        <p>
          {item.role} at {item.employer}
        </p>
        <p>
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <div>
        <Pencil
          color="#0582ca"
          className="icon"
          onClick={handleEditEmployment}
        />
        <Trash2 color="#5c677d" className="icon" onClick={deleteEventHandler} />
      </div>
    </div>
  ) : (
    <EmploymentHistoryEditorForm
      cancelEventHandler={handleCancelEdit}
      saveEventHandler={handleSaveEmployment}
      employmentData={item}
    />
  );
}

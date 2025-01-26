import "../styles/employment-history-item.css";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

import EmploymentHistoryEditorForm from "./EmploymentHistoryEditorForm.jsx";

export default function EmploymentHistoryItem({ item, deleteEventHandler, modifiers }) {
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
    modifiers.setEmployments(prevEmployments => {
      const newEmployments = structuredClone(prevEmployments);
      for (let employment of newEmployments) {
        if (item.id === employment.id) {
          employment.role = data["job-role"];
          employment.employer = data.employer;
          employment.startDate = data["start-date"];
          employment.endDate = data["end-date"];
          employment.city = data.city;
          employment.description = data.description;
          break;
        }
      }
      return newEmployments;
    });

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

import "../styles/education-item.css";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

import EducationEditorForm from "./EducationEditorForm.jsx";

export default function EducationItem({ item, deleteEventHandler, modifiers }) {
  const [isEditingEducation, setIsEditingEducation] = useState(false);

  const handleEditEducation = () => {
    setIsEditingEducation(true);
  };

  const handleCancelEdit = () => {
    setIsEditingEducation(false);
  };

  const handleSaveEducation = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    modifiers.setEntries(prevEntries => {
      const newEntries = structuredClone(prevEntries);
      for (let entry of newEntries) {
        if (item.id === entry.id) {
          entry.school = data.school;
          entry.degree = data.degree;
          entry.startDate = data["start-date"];
          entry.endDate = data["end-date"];
          entry.city = data.city;
          entry.description = data.description;
          break;
        }
      }
      return newEntries;
    });

    handleCancelEdit();
  };

  return !isEditingEducation ? (
    <div className="education-item">
      <div>
        <p>
          {item.degree} at {item.school}
        </p>
        <p>
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <div>
        <Pencil
          className="icon"
          color="#0582ca"
          onClick={handleEditEducation}
        />
        <Trash2 className="icon" color="#5c677d" onClick={deleteEventHandler} />
      </div>
    </div>
  ) : (
    <EducationEditorForm
      cancelEventHandler={handleCancelEdit}
      saveEventHandler={handleSaveEducation}
      educationData={item}
    />
  );
}

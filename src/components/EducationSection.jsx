import "../styles/education-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton.jsx";

import EducationEditorForm from "./EducationEditorForm.jsx";
import EducationItem from "./EducationItem.jsx";

export default function EducationSection({ modifiers, data }) {
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  const handleAddEntry = () => {
    setIsAddingEntry(true);
  };

  const handleCancelEntry = () => {
    setIsAddingEntry(false);
  };

  const handleSaveEntry = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    const entry = {
      id: crypto.randomUUID(),
      school: data.school,
      degree: data.degree,
      startDate: data["start-date"],
      endDate: data["end-date"],
      city: data.city,
      description: data.description,
    };

    modifiers.setEntries((prevEntries) => {
      const newEntries = structuredClone(prevEntries);
      newEntries.push(entry);
      return newEntries;
    });

    handleCancelEntry();
  };

  const handleDeleteEntry = (targetId) => {
    modifiers.setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== targetId)
    );
  };

  return (
    <section id="education-section">
      <div>
        <hr />
        <h2>Education</h2>
        <hr />
      </div>

      {data.entries.map((entry) => {
        return (
          <EducationItem
            key={entry.id}
            item={entry}
            deleteEventHandler={() => handleDeleteEntry(entry.id)}
            modifiers={modifiers}
          />
        );
      })}

      {isAddingEntry && (
        <EducationEditorForm
          cancelEventHandler={handleCancelEntry}
          saveEventHandler={handleSaveEntry}
          educationData={{}}
        />
      )}

      <AddButton label={"Add Education"} clickEventHandler={handleAddEntry} />
    </section>
  );
}

import "../styles/education-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton.jsx";

import EducationEditorForm from "./EducationEditorForm.jsx";
import EducationItem from "./EducationItem.jsx";

const defaultEntries = [
  {
    id: crypto.randomUUID(),
    school: "IIT Patna",
    degree: "B.Tech Computer Science",
    startDate: "Aug 2023",
    endDate: "Present",
    city: "Patna, Bihar",
    description:
      "Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
  },
];

export default function EducationSection() {
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [entries, setEntries] = useState(defaultEntries);

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

    setEntries((prevEntries) => {
      const newEntries = structuredClone(prevEntries);
      newEntries.push(entry);
      return newEntries;
    });

    handleCancelEntry();
  };

  const handleDeleteEntry = (targetId) => {
    setEntries((prevEntries) =>
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

      {entries.map((entry) => {
        return (
          <EducationItem
            key={entry.id}
            item={entry}
            deleteEventHandler={() => handleDeleteEntry(entry.id)}
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

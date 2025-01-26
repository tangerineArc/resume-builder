import "../styles/employment-history-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton.jsx";

import EmploymentHistoryItem from "./EmploymentHistoryItem.jsx";
import EmploymentHistoryEditorForm from "./EmploymentHistoryEditorForm.jsx";

export default function EmploymentHistorySection({ modifiers, data }) {
  const [isAddingEmployment, setIsAddingEmployment] = useState(false);

  const handleAddEmployment = () => {
    setIsAddingEmployment(true);
  };

  const handleCancelEmployment = () => {
    setIsAddingEmployment(false);
  };

  const handleSaveEmployment = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    const employment = {
      id: crypto.randomUUID(),
      role: data["job-role"],
      employer: data.employer,
      startDate: data["start-date"],
      endDate: data["end-date"],
      city: data.city,
      description: data.description,
    };

    modifiers.setEmployments((prevEmployments) => {
      const newEmployments = structuredClone(prevEmployments);
      newEmployments.push(employment);
      return newEmployments;
    });

    handleCancelEmployment();
  };

  const handleDeleteEmployment = (targetId) => {
    modifiers.setEmployments((prevEmployments) => {
      const newEmployments = prevEmployments.filter(
        (employment) => employment.id !== targetId
      );
      return newEmployments;
    });
  };

  return (
    <section id="employment-history-section">
      <div>
        <hr />
        <h2>Work Experience</h2>
        <hr />
      </div>

      {data.employments.map((employment) => {
        return <EmploymentHistoryItem
          key={employment.id}
          item={employment}
          deleteEventHandler={() => handleDeleteEmployment(employment.id)}
          modifiers={modifiers}
        />
      })}

      {isAddingEmployment && (
        <EmploymentHistoryEditorForm
          cancelEventHandler={handleCancelEmployment}
          saveEventHandler={handleSaveEmployment}
          employmentData={{}}
        />
      )}

      <AddButton
        label={"Add Employment"}
        clickEventHandler={handleAddEmployment}
      />
    </section>
  );
}

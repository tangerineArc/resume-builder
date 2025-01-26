import "../styles/employment-history-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton.jsx";

import EmploymentHistoryItem from "./EmploymentHistoryItem.jsx";
import EmploymentHistoryEditorForm from "./EmploymentHistoryEditorForm.jsx";

const defaultEmployments = [
  {
    id: crypto.randomUUID(),
    role: "Web Developer",
    employer: "Acme Inc.",
    startDate: "Oct 2021",
    endDate: "Present",
    city: "San Diego, CA",
    description:
      "Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
  },
  {
    id: crypto.randomUUID(),
    role: "Junior Web Developer",
    employer: "Startup Inc.",
    startDate: "Nov 2024",
    endDate: "Dec 2025",
    city: "San Francisco, CA",
    description:
      "Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
  },
];

export default function EmploymentHistorySection() {
  const [isAddingEmployment, setIsAddingEmployment] = useState(false);
  const [employments, setEmployments] = useState(defaultEmployments);

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

    setEmployments((prevEmployments) => {
      const newEmployments = structuredClone(prevEmployments);
      newEmployments.push(employment);
      return newEmployments;
    });

    handleCancelEmployment();
  };

  const handleDeleteEmployment = (targetId) => {
    setEmployments((prevEmployments) => {
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

      {employments.map((employment) => {
        return <EmploymentHistoryItem
          key={employment.id}
          item={employment}
          deleteEventHandler={() => handleDeleteEmployment(employment.id)}
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

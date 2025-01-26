import "../styles/editor.css";

import EducationSection from "./EducationSection.jsx";
import EmploymentHistorySection from "./EmploymentHistorySection.jsx";
import LanguagesEditorSection from "./LanguagesEditorSection.jsx";
import PersonalDetailsForm from "./PersonalDetailsForm.jsx";
import SkillsSection from "./SkillsSection.jsx";

export default function Editor() {
  return (
    <div id="editor">
      <h1>Resumé Builder</h1>

      <section>
        <hr />
        <h2>Personal Details</h2>
        <hr />
        <PersonalDetailsForm />
      </section>

      <EmploymentHistorySection />
      <SkillsSection />
      <EducationSection />
      <LanguagesEditorSection />
    </div>
  );
}

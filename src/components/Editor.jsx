import "../styles/editor.css";

import AddButton from "../ui/AddButton.jsx";

import EducationEditorForm from "./EducationEditorForm.jsx";
import EducationItem from "./EducationItem.jsx";
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

      <section>
        <div>
          <hr />
          <h2>Education</h2>
          <hr />
        </div>

        <EducationItem degree={"B.Tech Computer Science"} school={"IIT Patna"} startDate={"Oct 2021"} endDate={"Present"} />

        <EducationEditorForm />
        
        <AddButton label={"Add Education"} />
      </section>

      <LanguagesEditorSection />
    </div>
  );
}

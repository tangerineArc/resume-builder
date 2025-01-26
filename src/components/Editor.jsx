import "../styles/editor.css";

import EducationSection from "./EducationSection.jsx";
import EmploymentHistorySection from "./EmploymentHistorySection.jsx";
import LanguagesEditorSection from "./LanguagesEditorSection.jsx";
import PersonalDetailsSection from "./PersonalDetailsSection.jsx";
import SkillsSection from "./SkillsSection.jsx";

export default function Editor({ modifiers, data }) {
  return (
    <div id="editor">
      <h1>Resumé Builder</h1>

      <PersonalDetailsSection modifiers={modifiers} data={data} />
      <EmploymentHistorySection modifiers={modifiers} data={data} />
      <SkillsSection />
      <EducationSection />
      <LanguagesEditorSection />
    </div>
  );
}

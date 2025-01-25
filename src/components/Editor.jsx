import "../styles/editor.css";

import AddButton from "../ui/AddButton.jsx";

import EducationItem from "./EducationItem.jsx";
import EmploymentHistoryItem from "./EmploymentHistoryItem.jsx";
import LanguagesEditorSection from "./LanguagesEditorSection.jsx";
import PersonalDetailsForm from "./PersonalDetailsForm.jsx";
import SkillItem from "./SkillItem.jsx";

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

      <section>
        <div>
          <hr />
          <h2>Employment History</h2>
          <hr />
        </div>

        <EmploymentHistoryItem role={"Web Developer at Acme Inc."} startDate={"Oct 2021"} endDate={"Present"} />
        <EmploymentHistoryItem role={"Junior Web Developer at Startup Inc."} startDate={"Oct 2021"} endDate={"Present"} />

        <AddButton label={"Add Employment"} />
      </section>

      <section>
        <hr />
        <h2>Skills</h2>
        <hr />
        <div>
          <div>
            <div>Categories</div>
            <div>Skills</div>
          </div>

          <SkillItem category={"Programming Languages"} skills={"HTML, CSS, JavaScript"} />
          <SkillItem category={"Cloud Services"} skills={"AWS, GCP, MS Azure"} />
          <SkillItem category={"Web Technologies"} skills={"React, Angular, Vue"} />
          <SkillItem category={"Databases"} skills={"MySQL, SQLite, PostgreSQL, MongoDB"} />
        </div>

        <AddButton label={"Add Skill"} />
      </section>

      <section>
        <div>
          <hr />
          <h2>Education</h2>
          <hr />
        </div>

        <EducationItem degree={"B.Tech Computer Science"} school={"IIT Patna"} startDate={"Oct 2021"} endDate={"Present"} />
        
        <AddButton label={"Add Education"} />
      </section>

      <LanguagesEditorSection />
    </div>
  );
}

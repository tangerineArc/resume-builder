import "../styles/languages-editor-section.css";

import AddButton from "../ui/AddButton";

import LanguageItem from "./LanguageItem.jsx";

export default function LanguagesEditorSection() {
  return (
    <section id="languages-editor-section">
      <div>
        <hr />
        <h2>Languages</h2>
        <hr />
      </div>

      <div>
        <input type="text" placeholder="e.g. Javanese"/>
        <AddButton label={"Add"} />
      </div>

      <div>
        <LanguageItem language={"Portuguese"} />
        <LanguageItem language={"Spanish"} />
        <LanguageItem language={"Italian"} />
      </div>
    </section>
  );
}

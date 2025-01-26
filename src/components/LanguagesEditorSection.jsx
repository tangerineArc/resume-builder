import "../styles/languages-editor-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton";

import LanguageItem from "./LanguageItem.jsx";

export default function LanguagesEditorSection({ modifiers, data }) {
  const [currentLanguage, setCurrentLanguage] = useState("");

  const handleAddLanguage = () => {
    if (!currentLanguage.trim()) return;

    modifiers.setLanguages((prevLanguages) => {
      const newLanguages = structuredClone(prevLanguages);
      newLanguages.push({ id: crypto.randomUUID(), language: currentLanguage });
      return newLanguages;
    });

    setCurrentLanguage("");
  };

  const handleDeleteLanguage = (targetId) => {
    modifiers.setLanguages((prevLanguages) =>
      prevLanguages.filter((language) => language.id !== targetId)
    );
  };

  const handleInput = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <section id="languages-editor-section">
      <div>
        <hr />
        <h2>Languages</h2>
        <hr />
      </div>

      <div>
        <input
          type="text"
          placeholder="e.g. Javanese"
          value={currentLanguage}
          onInput={handleInput}
        />
        <AddButton label={"Add"} clickEventHandler={handleAddLanguage} />
      </div>

      <div>
        {data.languages.map((language) => {
          return (
            <LanguageItem
              key={language.id}
              language={language.language}
              deleteEventHandler={() => handleDeleteLanguage(language.id)}
            />
          );
        })}
      </div>
    </section>
  );
}

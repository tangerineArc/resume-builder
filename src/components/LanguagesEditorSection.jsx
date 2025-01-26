import "../styles/languages-editor-section.css";

import { useState } from "react";

import AddButton from "../ui/AddButton";

import LanguageItem from "./LanguageItem.jsx";

const defaultLanguages = [
  {
    id: crypto.randomUUID(),
    language: "Portuguese",
  },
  {
    id: crypto.randomUUID(),
    language: "Spanish",
  },
  {
    id: crypto.randomUUID(),
    language: "Italian",
  },
];

export default function LanguagesEditorSection() {
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [languages, setLanguages] = useState(defaultLanguages);

  const handleAddLanguage = () => {
    if (!currentLanguage.trim()) return;

    setLanguages((prevLanguages) => {
      const newLanguages = structuredClone(prevLanguages);
      newLanguages.push({ id: crypto.randomUUID(), language: currentLanguage });
      return newLanguages;
    });

    setCurrentLanguage("");
  };

  const handleDeleteLanguage = (targetId) => {
    setLanguages((prevLanguages) =>
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
        {languages.map((language) => {
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

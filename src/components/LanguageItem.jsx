import "../styles/language-item.css";

import { Trash2 } from "lucide-react";

export default function LanguageItem({ language, deleteEventHandler }) {
  return (
    <span className="language">
      {language}
      <Trash2 className="icon" color="#5c677d" onClick={deleteEventHandler} />
    </span>
  );
}

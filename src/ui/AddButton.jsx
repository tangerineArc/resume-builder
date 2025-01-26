import "../styles/add-button.css";

import { CirclePlus } from "lucide-react";

export default function AddButton({ label, clickEventHandler }) {
  return (
    <button className="add-button" onClick={clickEventHandler}>
      <CirclePlus className="add-icon" />
      {label}
    </button>
  );
}

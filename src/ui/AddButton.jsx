import "../styles/add-button.css";

import { CirclePlus } from "lucide-react";

export default function AddButton({ label }) {
  return (
    <button className="add-button">
      <CirclePlus className="add-icon" />
      {label}
    </button>
  );
}

import "../styles/personal-details-section.css";

import PersonalDetailsForm from "./PersonalDetailsForm";

export default function PersonalDetailsSection({ modifiers, data }) {
  return (
    <section id="personal-details-section">
      <hr />
      <h2>Personal Details</h2>
      <hr />
      <PersonalDetailsForm modifiers={modifiers} data={data} />
    </section>
  );
}

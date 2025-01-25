import "../styles/education-editor-form.css";

export default function EducationEditorForm() {
  return (
    <form id="education-editor-form">
      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" />
      </div>

      <div>
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" id="degree" />
      </div>

      <div>
        <label htmlFor="start-date">Start Date</label>
        <input type="text" name="start-date" id="start-date" />
      </div>

      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="text" name="end-date" id="end-date" />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
      </div>

      <div>
        <button type="reset">Cancel</button>
        <button type="button">Save</button>
      </div>
    </form>
  );
}

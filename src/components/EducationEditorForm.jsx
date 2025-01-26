import "../styles/education-editor-form.css";

export default function EducationEditorForm({ saveEventHandler, cancelEventHandler, educationData }) {
  return (
    <form id="education-editor-form" onSubmit={saveEventHandler}>
      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" required defaultValue={educationData?.school} />
      </div>

      <div>
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" id="degree" required defaultValue={educationData?.degree} />
      </div>

      <div>
        <label htmlFor="start-date">Start Date</label>
        <input type="text" name="start-date" id="start-date" required defaultValue={educationData?.startDate} />
      </div>

      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="text" name="end-date" id="end-date" required defaultValue={educationData?.endDate} />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" required defaultValue={educationData?.city} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" required defaultValue={educationData?.description}></textarea>
      </div>

      <div>
        <button type="reset" onClick={cancelEventHandler}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

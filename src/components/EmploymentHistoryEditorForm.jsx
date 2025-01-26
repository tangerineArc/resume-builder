import "../styles/employment-history-editor-form.css";

export default function EmploymentHistoryEditorForm({
  cancelEventHandler,
  saveEventHandler,
  employmentData,
}) {
  return (
    <form
      id="employment-history-editor-form"
      onSubmit={(event) => saveEventHandler(event)}
    >
      <div>
        <label htmlFor="job-position">Job Role</label>
        <input
          type="text"
          name="job-role"
          id="job-position"
          required
          defaultValue={employmentData?.role}
        />
      </div>

      <div>
        <label htmlFor="employer">Employer</label>
        <input
          type="text"
          name="employer"
          id="employer"
          required
          defaultValue={employmentData?.employer}
        />
      </div>

      <div>
        <label htmlFor="start-date">Start Date</label>
        <input
          type="text"
          name="start-date"
          id="start-date"
          required
          defaultValue={employmentData?.startDate}
        />
      </div>

      <div>
        <label htmlFor="end-date">End Date</label>
        <input
          type="text"
          name="end-date"
          id="end-date"
          required
          defaultValue={employmentData?.endDate}
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          required
          defaultValue={employmentData?.city}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          required
          defaultValue={employmentData?.description}
        ></textarea>
      </div>

      <div>
        <button type="reset" onClick={cancelEventHandler}>
          Cancel
        </button>
        <button type="submit">
          {employmentData.id ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
}

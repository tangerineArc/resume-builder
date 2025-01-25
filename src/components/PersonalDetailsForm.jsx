import "../styles/personal-details-form.css";

export default function PersonalDetailsForm() {
  return (
    <form id="personal-details-form">
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" />
      </div>
      <div>
        <label htmlFor="mail-id">Email</label>
        <input type="email" name="mail-id" id="mail-id" />
      </div>
      <div>
        <label htmlFor="phone-number">Phone</label>
        <input type="tel" name="phone-number" id="phone-number" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
      </div>
      <div>
        <label htmlFor="job-role">Job Role</label>
        <input type="text" name="job-role" id="job-role" />
      </div>
      <div>
        <label htmlFor="linkedin-handle">LinkedIn Handle</label>
        <input type="url" name="linkedin-handle" id="linkedin-handle" />
      </div>
      <div>
        <label htmlFor="portfolio-website">Portfolio Website</label>
        <input type="url" name="portfolio-website" id="portfolio-website" />
      </div>
      <div>
        <label htmlFor="about">About</label>
        <textarea name="about" id="about" rows={4}></textarea>
      </div>
      <div>
        <label htmlFor="profile-picture">Profile Picture</label>
        <input type="file" name="profile-picture" id="profile-picture" />
      </div>
    </form>
  );
}

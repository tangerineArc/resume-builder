import "../styles/personal-details-form.css";

export default function PersonalDetailsForm({ modifiers, data }) {
  return (
    <form id="personal-details-form">
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          onInput={(event) =>
            modifiers.handleFirstNameChange(event.target.value)
          }
          defaultValue={data.firstName}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          onInput={(event) =>
            modifiers.handleLastNameChange(event.target.value)
          }
          defaultValue={data.lastName}
        />
      </div>
      <div>
        <label htmlFor="mail-id">Email</label>
        <input
          type="email"
          name="mail-id"
          id="mail-id"
          onInput={(event) => modifiers.handleEmailChange(event.target.value)}
          defaultValue={data.email}
        />
      </div>
      <div>
        <label htmlFor="phone-number">Phone</label>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          onInput={(event) => modifiers.handlePhoneChange(event.target.value)}
          defaultValue={data.phone}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onInput={(event) => modifiers.handleAddressChange(event.target.value)}
          defaultValue={data.address}
        />
      </div>
      <div>
        <label htmlFor="job-role">Job Role</label>
        <input
          type="text"
          name="job-role"
          id="job-role"
          onInput={(event) => modifiers.handleJobRoleChange(event.target.value)}
          defaultValue={data.jobRole}
        />
      </div>
      <div>
        <label htmlFor="linkedin-handle">LinkedIn Handle</label>
        <input
          type="url"
          name="linkedin-handle"
          id="linkedin-handle"
          onInput={(event) =>
            modifiers.handleLinkedinChange(event.target.value)
          }
          defaultValue={data.linkedin}
        />
      </div>
      <div>
        <label htmlFor="portfolio-website">Portfolio Website</label>
        <input
          type="url"
          name="portfolio-website"
          id="portfolio-website"
          onInput={(event) =>
            modifiers.handlePortfolioChange(event.target.value)
          }
          defaultValue={data.portfolio}
        />
      </div>
      <div>
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          rows={4}
          onInput={(event) => modifiers.handleAboutChange(event.target.value)}
          defaultValue={data.about}
        ></textarea>
      </div>
      <div>
        <label htmlFor="profile-picture">Profile Picture</label>
        <input
          type="file"
          name="profile-picture"
          id="profile-picture"
          onInput={(event) =>
            modifiers.handleProfilePictureChange(event.target.files[0])
          }
        />
      </div>
    </form>
  );
}

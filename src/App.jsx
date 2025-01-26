import { useState } from "react";

import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

export default function App() {
  const [firstName, setFirstName] = useState("Jonathan");
  const [lastName, setLastName] = useState("Doe");
  const [jobRole, setJobRole] = useState("Web Developer");
  const [email, setEmail] = useState("jonathan.doe@web.com");
  const [phone, setPhone] = useState("(555) 555-555");
  const [address, setAddress] = useState("San Francisco, California");
  const [linkedin, setLinkedin] = useState("https://linkedin.com/username");
  const [portfolio, setPortfolio] = useState("https://github.com/username");
  const [about, setAbout] = useState(
    "Highly motivated and results-oriented Web Developer with 4 years of experience in building user-friendly and responsive web applications. Passionate about innovative and performant web experiences."
  );

  const modifiers = {
    handleFirstNameChange: (name) => {
      setFirstName(name.trim());
    },
    handleLastNameChange: (name) => {
      setLastName(name.trim());
    },
    handleJobRoleChange: (role) => {
      setJobRole(role.trim());
    },
    handleEmailChange: (mail) => {
      setEmail(mail.trim());
    },
    handlePhoneChange: (phoneNumber) => {
      setPhone(phoneNumber.trim());
    },
    handleAddressChange: (address) => {
      setAddress(address.trim());
    },
    handleLinkedinChange: (url) => {
      setLinkedin(url.trim());
    },
    handlePortfolioChange: (url) => {
      setPortfolio(url.trim());
    },
    handleAboutChange: (desc) => {
      setAbout(desc.trim());
    },
  };

  const data = {
    firstName,
    lastName,
    jobRole,
    email,
    phone,
    address,
    portfolio,
    linkedin,
    about,
  };

  return (
    <>
      <Editor modifiers={modifiers} data={data} />
      <Preview data={data} />
    </>
  );
}

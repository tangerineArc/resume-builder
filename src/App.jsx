import { Printer } from 'lucide-react';
import { useState } from "react";

import {
  defaultEmployments,
  defaultEntries,
  defaultSkills,
  defaultLanguages,
} from "./data/defaults.js";

import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

export default function App() {
  const [firstName, setFirstName] = useState("Fyodor");
  const [lastName, setLastName] = useState("Dostoevsky");
  const [jobRole, setJobRole] = useState("The Conjurer");
  const [email, setEmail] = useState("[email protected]");
  const [phone, setPhone] = useState("+81-000-SINLESS");
  const [address, setAddress] = useState("Yokohama, Japan");
  const [linkedin, setLinkedin] = useState("https://linkedin.com/demon");
  const [portfolio, setPortfolio] = useState("https://github.com/tangerineArc");
  const [about, setAbout] = useState(
    "An enigmatic strategist with expertise in orchestrating complex operations and dismantling organizations through meticulous planning and psychological manipulation. Adept at achieving ambitious goals with precision and minimal resources."
  );
  const [profilePicture, setProfilePicture] = useState("/fyodor.jpg");

  const [employments, setEmployments] = useState(defaultEmployments);
  const [skills, setSkills] = useState(defaultSkills);
  const [entries, setEntries] = useState(defaultEntries);
  const [languages, setLanguages] = useState(defaultLanguages);

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
    handleProfilePictureChange: (image) => {
      if (!image || !image.type.startsWith("image/")) return;

      const url = URL.createObjectURL(image);
      setProfilePicture(url);
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
    profilePicture,
    employments,
    skills,
    entries,
    languages,
  };

  return (
    <>
      <Editor
        modifiers={{
          ...modifiers,
          setEmployments,
          setSkills,
          setEntries,
          setLanguages,
        }}
        data={data}
      />
      <Preview data={data} />

      <Printer className="print-icon" size={32} color="#0466c8" onClick={print} />
    </>
  );
}

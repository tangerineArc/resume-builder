import "../styles/preview.css";

import { Dot } from "lucide-react";

export default function Preview({ data }) {
  return (
    <div id="preview">
      <div>
        <aside>
          <div>
            <div
              style={{
                backgroundImage: `url(${data.profilePicture})`,
              }}
            ></div>
          </div>

          <div>
            <p>Contact</p>
            <div>
              <p>Address</p>
              <p>{data.address}</p>
            </div>
            <div>
              <p>Phone</p>
              <p>{data.phone}</p>
            </div>
            <div>
              <p>Email</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p>LinkedIn</p>
              <p>{data.linkedin}</p>
            </div>
            <div>
              <p>Portfolio</p>
              <p>{data.portfolio}</p>
            </div>
          </div>

          <div>
            <p>Languages</p>
            <div>
              {data.languages.map((language) => {
                return <p key={language.id}>{language.language}</p>;
              })}
            </div>
          </div>
        </aside>

        <main>
          <p>
            <span>{data.firstName}</span> <span>{data.lastName}</span>
          </p>
          <p>{data.jobRole}</p>
          <p>{data.about}</p>

          <div>
            <p>Work Experience</p>
            {data.employments.map((employment) => {
              return (
                <div key={employment.id}>
                  <Dot className="decorator-icon" color="#d7e3fc" />
                  <div>
                    <p>{employment.role}</p>
                    <p>
                      {employment.startDate} - {employment.endDate}
                    </p>
                  </div>
                  <p>
                    {employment.city} ~ {employment.employer}
                  </p>
                  <p>{employment.description}</p>
                </div>
              );
            })}
          </div>

          <div>
            <p>Skills</p>
            {data.skills.map((skill) => {
              return (
                <div key={skill.id}>
                  <p>{skill.category}</p>
                  <p>{skill.skills}</p>
                </div>
              );
            })}
          </div>

          <div>
            <p>Education</p>
            {data.entries.map((entry) => {
              return (
                <div key={entry.id}>
                  <Dot className="decorator-icon" color="#d7e3fc" />
                  <div>
                    <p>{entry.degree}</p>
                    <p>
                      {entry.startDate} - {entry.endDate}
                    </p>
                  </div>
                  <p>
                    {entry.city} ~ {entry.school}
                  </p>
                  <p>{entry.description}</p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

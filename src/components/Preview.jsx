import "../styles/preview.css";

import { Dot } from "lucide-react";

export default function Preview({ data }) {
  return (
    <div id="preview">
      <div>
        <aside>
          <div>
            <div></div>
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
              <p>Portuguese</p>
              <p>Spanish</p>
              <p>Italian</p>
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
            <div>
              <Dot className="decorator-icon" color="#d7e3fc" />
              <div>
                <p>B.Tech Computer Science</p>
                <p>Aug 2023 - Present</p>
              </div>
              <p>Berkeley, California ~ University of California</p>
              <p>
                Successfully completed a capstone project involving the design
                and development of a complex web application, demonstrating the
                ability to apply theoretical knowledge to real-world scenarios.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

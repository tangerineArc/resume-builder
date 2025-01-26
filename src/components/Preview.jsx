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
            <div>
              <Dot className="decorator-icon" color="#d7e3fc" />
              <div>
                <p>Web Developer</p>
                <p>Oct 2021 - Present</p>
              </div>
              <p>San Diego, CA ~ Acme Inc.</p>
              <p>
                Designed and developed responsive websites and web applications
                using HTML, CSS, JavaScript, and React.js. Implemented backend
                functionality using Python and Django.
              </p>
            </div>
            <div>
              <Dot className="decorator-icon" color="#d7e3fc" />
              <div>
                <p>Junior Web Developer</p>
                <p>Jan 2020 - Oct 2021</p>
              </div>
              <p>San Francisco, CA ~ Startup Inc.</p>
              <p>
                Developed and maintained web applications using HTML, CSS, and
                JavaScript. Troubleshooted and resolved bugs to ensure smooth
                website operation.
              </p>
            </div>
          </div>

          <div>
            <p>Skills</p>
            <div>
              <p>Programming Languages</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <div>
              <p>Cloud Services</p>
              <p>AWS, GCP, MS Azure</p>
            </div>
            <div>
              <p>Web Technologies</p>
              <p>React, Angular, Vue</p>
            </div>
            <div>
              <p>Databases</p>
              <p>MySQL, PostgreSQL, MongoDB, SQLite3</p>
            </div>
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

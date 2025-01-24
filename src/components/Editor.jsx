import "../styles/editor.css";

import { CircleMinus, CirclePlus, Pencil } from 'lucide-react';

export default function Editor() {
  return (
    <div id="editor">
      <h1>Resumé Builder</h1>

      <section>
        <h2>Personal Details</h2>
        <form>
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
            <label htmlFor="linkedin-handle">LinkedIn</label>
            <input type="url" name="linkedin-handle" id="linkedin-handle" />
          </div>
          <div>
            <label htmlFor="portfolio-website">Portfolio</label>
            <input type="url" name="portfolio-website" id="portfolio-website" />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea name="about" id="about"></textarea>
          </div>
          <div>
            <label htmlFor="profile-picture">Profile Picture</label>
            <input type="file" name="profile-picture" id="profile-picture" />
          </div>
        </form>
      </section>

      <section>
        <h2>Employment History</h2>
        <div>
          <div>
            <p>Web Developer at Acme Inc.</p>
            <p><span>Oct 2021</span> - <span>Present</span></p>
          </div>
          <Pencil />
        </div>
        <div>
          <div>
            <p>Junior Web Developer at Startup Inc.</p>
            <p><span>Oct 2021</span> - <span>Present</span></p>
          </div>
          <Pencil />
        </div>
        <button>
          <CirclePlus />
          Add Employment
        </button>
      </section>

      <section>
        <h2>Skills</h2>
        <div>
          <div>
            <p>Categories</p>
            <p>Skills</p>
          </div>
          <div>
            <input type="text" defaultValue={"Programming Languages"} />
            <input type="text" defaultValue={"HTML, CSS, JavaScript"} />
            <CircleMinus style={{flexShrink: 0}} />
          </div>
          <div>
            <input type="text" defaultValue={"Cloud Services"} />
            <input type="text" defaultValue={"AWS, GCP, MS Azure"} />
            <CircleMinus style={{flexShrink: 0}} />
          </div>
          <div>
            <input type="text" defaultValue={"Web Technologies"} />
            <input type="text" defaultValue={"React, Angular, Vue"} />
            <CircleMinus style={{flexShrink: 0}} />
          </div>
          <div>
            <input type="text" defaultValue={"Databases"} />
            <input type="text" defaultValue={"MySQL, SQLite, PostgreSQL, MongoDB"} />
            <CircleMinus style={{flexShrink: 0}} />
          </div>
        </div>
        <button>
          <CirclePlus />
          Add Skill
        </button>
      </section>

      <section>
        <h2>Education</h2>
        <div>
          <div>
            <p>B.Tech Computer Science at IIT Patna</p>
            <p><span>Oct 2021</span> - <span>Present</span></p>
          </div>
          <Pencil />
        </div>
        <button>
          <CirclePlus />
          Add Education
        </button>
      </section>

      <section>
        <h2>Languages</h2>
        <div>
          <input type="text" placeholder="e.g. Javanese"/>
          <button>
            <CirclePlus />
            Add
          </button>
        </div>
        <div>
          <span>Portuguese</span>
          <span>Spanish</span>
          <span>Italian</span>
        </div>
      </section>
    </div>
  );
}

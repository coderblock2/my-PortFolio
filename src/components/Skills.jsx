import React from "react";
import "./CSS/skills.css";
import { skills } from "./Data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="SkillsContainer">
        <div className="skillsicons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            width="48"
            height="48"
          >
            <path d="M16.5 7.5h-9v9h9v-9Z" />
            <path
              fillRule="evenodd"
              d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="skillsheading">
          <h1>Skills & Technologies</h1>
        </div>
        <div className="skillsabout">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
          cupiditate, aut distinctio alias dolor earum molestiae modi sint
          quibusdam deleniti veniam magni accusantium vitae, expedita aperiam
          perferendis harum aspernatur, dolores inventore recusandae
          perspiciatis.
        </div>

        <div className="allskill">
          {skills.map((skill, index) => (
            <div className="skillicon" key={index}>
              <div className="mainicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="w-6 h-6"
                  width="25"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="realskill">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import Project from "./Project";
import gIcon from "../../images/github-icon_3.png";
import lIcon from "../../images/linkedin-icon_3.png";
import Burger from "../../images/burger3.png";
import Gifted from "../../images/gifted.png";
import Weather from "../../images/weather1.png";
import Employee from "../../images/react-employee1-1.png";
import Quiz from "../../images/wrong.png";
import DateNight from "../../images/datenight.png";

const Portfolio = () => {
  const projects = [
    {
      href: "http://cgriffin332.github.io/react-employee-directory",
      image: Employee,
      title: "Employee-Directory",
      github: "https://github.com/cgriffin332/react-employee-directory",
    },
    {
      href: "https://burger-time332.herokuapp.com/",
      image: Burger,
      title: "Burger Time",
      github: "https://github.com/cgriffin332/burger-time332",
    },
    {
      href: "https://gifted332.herokuapp.com/",
      image: Gifted,
      title: "Gifted",
      github: "https://github.com/cgriffin332/gifted",
    },
    {
      href: "https://cgriffin332.github.io/Weather-Dashboard332/",
      image: Weather,
      title: "Weather Dashboard",
      github: "https://github.com/cgriffin332/Weather-Dashboard332",
    },
    {
      href: "https://cgriffin332.github.io/Code-Quiz332/#",
      image: Quiz,
      title: "Code Quiz",
      github: "https://github.com/cgriffin332/Code-Quiz332",
    },
    {
      href: "https://cgriffin332.github.io/The-Date-Night-Planner/",
      image: DateNight,
      title: "Date Night Planner",
      github: "https://github.com/cgriffin332/The-Date-Night-Planner",
    }
  ];
  return (
    <div>
      <main>
        <section className="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white">
          <div className="row">
            <div className="col-12 px-3 bg-white">
              {/* <!-- page title --> */}
              <a
                href="https://github.com/cgriffin332"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  id="icon"
                  className="float-right mx-2"
                  src={gIcon}
                  alt="github icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/calvin-griffin-8247521b7/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  id="icon"
                  className="float-right"
                  src={lIcon}
                  alt="linkedin icon"
                />
              </a>
              <h1>Portfolio</h1>
            </div>
          </div>
          {/* <!-- portfolio --> */}
          <div className="row">
            {/* <!-- project 5 --> */}
            <Project
              href={projects[0].href}
              image={projects[0].image}
              title={projects[0].title}
              github={projects[0].github}
            />
            {/* <!-- blank space --> */}
            <Project
              href={projects[1].href}
              image={projects[1].image}
              title={projects[1].title}
              github={projects[1].github}
            />
          </div>
          <div className="row">
          <Project
              href={projects[2].href}
              image={projects[2].image}
              title={projects[2].title}
              github={projects[2].github}
            />
            <Project
              href={projects[3].href}
              image={projects[3].image}
              title={projects[3].title}
              github={projects[3].github}
            />
          </div>
          <div className="row">
          <Project
              href={projects[4].href}
              image={projects[4].image}
              title={projects[4].title}
              github={projects[4].github}
            />
            <Project
              href={projects[5].href}
              image={projects[5].image}
              title={projects[5].title}
              github={projects[5].github}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

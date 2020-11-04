import React from "react";
import Project from "./Project";
import gIcon from "../../images/github-icon_3.png";
import lIcon from "../../images/linkedin-icon_3.png";
import Burger from "../../images/burger3.png";
import Gifted from "../../images/gifted.png";
import Weather from "../../images/weather.png";
import Workweek from "../../images/workweek.png";
import Quiz from "../../images/wrong.png";
import DateNight from "../../images/datenight.png";

const Portfolio = () => {
  const projects = [
    {
      href: "https://burger-time332.herokuapp.com/",
      image: Burger,
      title: "Gifted",
      github: "https://github.com/cgriffin332/burger-time332",
    },
    {
      href: "https://gifted332.herokuapp.com/",
      image: Gifted,
      title: "Burger Time",
      github: "https://github.com/cgriffin332/gifted",
    },
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
            <div className="col-lg-6 p-3 bg-white">
              {/* <!-- project 1 --> */}
              <div className="card">
                <a
                  href="https://cgriffin332.github.io/Weather-Dashboard332/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={Weather}
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <a
                    href="https://github.com/cgriffin332/Weather-Dashboard332"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-3 bg-white">
              {/* <!-- project 2 --> */}
              <div className="card">
                <a
                  href="https://cgriffin332.github.io/Work-Day-Scheduler332/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={Workweek}
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Work Day Planner</h5>
                  <a
                    href="https://github.com/cgriffin332/Work-Day-Scheduler332"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-3 bg-white">
              {/* <!-- project 3 --> */}
              <div className="card">
                <a
                  href="https://cgriffin332.github.io/Code-Quiz332/#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={Quiz}
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Code Quiz</h5>
                  <a
                    href="https://github.com/cgriffin332/Code-Quiz332"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-3 bg-white">
              {/* <!-- project 4 --> */}
              <div className="card">
                <a
                  href="https://cgriffin332.github.io/The-Date-Night-Planner/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={DateNight}
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Date Night Planner</h5>
                  <a
                    href="https://github.com/cgriffin332/The-Date-Night-Planner"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

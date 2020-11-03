import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section className="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white">
        <div className="row">
          <div className="col-12 px-3 bg-white">
            {/* <!-- page title --> */}
            <a href="https://github.com/cgriffin332"
            rel="noreferrer"
            target="_blank">
              <img
                id="icon"
                className="float-right mx-2"
                src="./assets/images/github-icon_3.png"
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
                src="./assets/images/linkedin-icon_3.png"
                alt="linkedin icon"
              />
            </a>
            <h1>Portfolio</h1>
          </div>
        </div>
        {/* <!-- portfolio --> */}
        <div className="row">
          <div className="col-lg-6 p-3 bg-white">
            {/* <!-- project 5 --> */}
            <div className="card">
              <a href="https://burger-time332.herokuapp.com/" rel="noreferrer" target="_blank">
                <img
                  className="card-img-top"
                  src="./assets/images/burger3.png"
                  alt="Card image cap"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Burger Time</h5>
                <a
                  href="https://github.com/cgriffin332/burger-time332"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
          {/* <!-- blank space --> */}
          <div className="col-lg-6 p-3 bg-white">
            <div className="card">
              <a href="https://gifted332.herokuapp.com/" rel="noreferrer"
              target="_blank">
                <img
                  className="card-img-top"
                  src="./assets/images/gifted.png"
                  alt="Card image cap"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Burger Time</h5>
                <a href="https://github.com/cgriffin332/gifted" 
                rel="noreferrer"
                target="_blank">
                  Github Link
                </a>
              </div>
            </div>
          </div>
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
                  src="./assets/images/weather.png"
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
                  src="./assets/images/workweek.png"
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
                  src="./assets/images/wrong.png"
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
                  src="./assets/images/datenight.png"
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
    </div>
  );
};

export default Portfolio;

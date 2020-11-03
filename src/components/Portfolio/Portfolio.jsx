import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <section
        class="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white"
      >
        <div class="row">
          <div class="col-12 px-3 bg-white">
            <!-- page title -->
            <a href="https://github.com/cgriffin332" target="_blank"
              ><img
                id="icon"
                class="float-right mx-2"
                src="./assets/images/github-icon_3.png"
                alt="github icon"
            /></a>
            <a
              href="https://www.linkedin.com/in/calvin-griffin-8247521b7/"
              target="_blank"
              ><img
                id="icon"
                class="float-right"
                src="./assets/images/linkedin-icon_3.png"
                alt="linkedin icon"
            /></a>
            <h1>Portfolio</h1>
          </div>
        </div>
        <!-- portfolio -->
        <div class="row">
          <div class="col-lg-6 p-3 bg-white">
            <!-- project 5 -->
            <div class="card">
              <a href="https://burger-time332.herokuapp.com/" target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/burger3.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Burger Time</h5>
                <a
                  href="https://github.com/cgriffin332/burger-time332"
                  target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
          <!-- blank space -->
          <div class="col-lg-6 p-3 bg-white">
            <div class="card">
              <a href="https://gifted332.herokuapp.com/" target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/gifted.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Burger Time</h5>
                <a href="https://github.com/cgriffin332/gifted" target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 p-3 bg-white">
            <!-- project 1 -->
            <div class="card">
              <a
                href="https://cgriffin332.github.io/Weather-Dashboard332/"
                target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/weather.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <a
                  href="https://github.com/cgriffin332/Weather-Dashboard332"
                  target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 p-3 bg-white">
            <!-- project 2 -->
            <div class="card">
              <a
                href="https://cgriffin332.github.io/Work-Day-Scheduler332/"
                target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/workweek.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Work Day Planner</h5>
                <a
                  href="https://github.com/cgriffin332/Work-Day-Scheduler332"
                  target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 p-3 bg-white">
            <!-- project 3 -->
            <div class="card">
              <a
                href="https://cgriffin332.github.io/Code-Quiz332/#"
                target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/wrong.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Code Quiz</h5>
                <a
                  href="https://github.com/cgriffin332/Code-Quiz332"
                  target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 p-3 bg-white">
            <!-- project 4 -->
            <div class="card">
              <a
                href="https://cgriffin332.github.io/The-Date-Night-Planner/"
                target="_blank"
                ><img
                  class="card-img-top"
                  src="./assets/images/datenight.png"
                  alt="Card image cap"
              /></a>
              <div class="card-body">
                <h5 class="card-title">Date Night Planner</h5>
                <a
                  href="https://github.com/cgriffin332/The-Date-Night-Planner"
                  target="_blank"
                  >Github Link</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Portfolio;
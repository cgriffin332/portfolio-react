import React from "react";

const About = () => {
  return (
    <div>
      <main>
        {/* <!-- container --> */}
        <section class="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white">
          <div class="row">
            <div class="col-12 bg-white">
              {/* <!-- page title --> */}
              <a href="https://github.com/cgriffin332" target="_blank">
                <img
                  id="icon"
                  class="float-right mx-2"
                  src="./assets/images/github-icon_3.png"
                  alt="github icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/calvin-griffin-8247521b7/"
                target="_blank"
              >
                <img
                  id="icon"
                  class="float-right"
                  src="./assets/images/linkedin-icon_3.png"
                  alt="linkedin icon"
                />
              </a>
              <h1>About Me</h1>
            </div>
            <div class="col-12 p-3 bg-white">
              {/* <!-- headshot --> */}
              <img
                id="headshot"
                src="./assets/images/smile.png"
                alt="Picture of me"
              />
              {/* <!-- bio info --> */}
              <p>
                My name is Calvin Griffin and I am a new web developer
                interested in learning as much as I can about this exciting
                field. I’m originally from Columbus, Ohio, but currently live in
                Atlanta, Georgia with my wife.
              </p>
              <p>
                I am currently a professional opera singer, but Covid-19 has put
                a major wrench in my profession. In March, I was working with
                The Metropolitan Opera in New York City. We were in the final
                rehearsals of our production when the pandemic began, and The
                Met had to cancel their entire season. As the severity of this
                pandemic has increased, more and more of my upcoming opera work
                has been cancelled. During these unstable times, I want to take
                the free time I've been given to develop another passion and
                useful skill. I have been intrigued by coding languages and web
                development, so I enrolled in GA Tech’s Full Stack Web
                Development Bootcamp. I am thrilled to learn as much as I can
                from this intensive course, and to arm myself with the tools
                necessary to begin this new career.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

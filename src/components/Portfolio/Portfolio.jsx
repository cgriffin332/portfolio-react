import React from "react";
import Project from "./Project";
import gIcon from "../../images/github-icon_3.png";
import lIcon from "../../images/linkedin-icon_3.png";
import Burger from "../../images/burger.png";
import Gifted from "../../images/gifted1.png";
import Weather from "../../images/weather2.png";
import Employee from "../../images/employee.png";
import Books from "../../images/googlebooks.png";
import Ciphr from "../../images/ciphr.png";

const Portfolio = () => {
  const projects = [
    {
      href: "https://ciphr.herokuapp.com/",
      image: Ciphr,
      title: "Ciphr",
      github: "https://github.com/zachdrummond/ciphr",
      description: "Ciphr is an app that serves as a platform to share and solve coding algorithms. It enables developers to connect with each other in order to strengthen their critical thinking abilities and problem solving skills.",
      tools: "Tools: Material UI, JavaScript, React.js, CSS, Node.js, Express.js, Mongoose.js, and MongoDB"
    },
    {
      href: "https://google-book-search332.herokuapp.com/",
      image: Books,
      title: "Google Books Search",
      github: "https://github.com/cgriffin332/google-books-search332",
      description: "Google Book Search incorporates React components, works with helper/util functions, and React lifecycle methods to query and display books based on user searches. It uses Node, Express and MongoDB so that users can save books to review or purchase later.",
      tools: "Tools: HTML, CSS, JavaScript, Node.js, Express.js, Mongoose.js, MongoDB, React.js, and Bootstrap"
    },
    {
      href: "http://cgriffin332.github.io/react-employee-directory",
      image: Employee,
      title: "Employee-Directory",
      github: "https://github.com/cgriffin332/react-employee-directory",
      description: "For this project, I have created an employee directory with React. I have broken down the application's UI into components, managed component state, and it responds to user events. The user can search employees by last name, or sort the table of employees by first name, last name, or birth date.",
      tools: "Tools: HTML, CSS, JavaScript, Node.js, React.js, and Bootstrap"
    },
    {
      href: "https://burger-time332.herokuapp.com/",
      image: Burger,
      title: "Burger Time",
      github: "https://github.com/cgriffin332/burger-time332",
      description: "This burger logger app follows an MVC design pattern, using Node and MySQL to query and route data, while using Handlebars to generate the HTML.",
      tools: "Tools: MySQL, Node, Express, Handlebars and a homemade ORM"
    },
    {
      href: "https://gifted332.herokuapp.com/",
      image: Gifted,
      title: "Gifted",
      github: "https://github.com/cgriffin332/gifted",
      description: "Gifted is an app that tracks all of your gifts in one organized place. No need for sticky notes or spreadsheets any longer! There is a table that organizes all of the gifts you receive from others and a table that organizes all of the gifts that you send to others. You can add new gifts, or edit/delete current gifts.",
      tools: "Tools: HTML, CSS, JavaScript, jQuery, Node.js, Express, Express-Handlebars, MySQL, and Foundation"
    },
    {
      href: "https://cgriffin332.github.io/Weather-Dashboard332/",
      image: Weather,
      title: "Weather Dashboard",
      github: "https://github.com/cgriffin332/Weather-Dashboard332",
      description: "This is a weather dashboard where the user can enter the name of a city in the search bar and receive the current weather as well as the 5-day forecast. This application uses OpenWeather API to retrieve the information and stores the last searched city in local storage. It runs in the browser and features dynamically updated HTML and CSS.",
      tools: "Tools: HTML, CSS, JavaScript, and jQuery"
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
              description={projects[0].description}
              tools={projects[0].tools}
            />
            {/* <!-- blank space --> */}
            <Project
              href={projects[1].href}
              image={projects[1].image}
              title={projects[1].title}
              github={projects[1].github}
              description={projects[1].description}
              tools={projects[1].tools}
            />
          </div>
          <div className="row">
          <Project
              href={projects[2].href}
              image={projects[2].image}
              title={projects[2].title}
              github={projects[2].github}
              description={projects[2].description}
              tools={projects[2].tools}
            />
            <Project
              href={projects[3].href}
              image={projects[3].image}
              title={projects[3].title}
              github={projects[3].github}
              description={projects[3].description}
              tools={projects[3].tools}
            />
          </div>
          <div className="row">
          <Project
              href={projects[4].href}
              image={projects[4].image}
              title={projects[4].title}
              github={projects[4].github}
              description={projects[4].description}
              tools={projects[4].tools}
            />
            <Project
              href={projects[5].href}
              image={projects[5].image}
              title={projects[5].title}
              github={projects[5].github}
              description={projects[5].description}
              tools={projects[5].tools}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

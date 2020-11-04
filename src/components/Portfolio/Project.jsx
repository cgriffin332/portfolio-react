import React from "react";

const projects = [
  {
    href: "https://burger-time332.herokuapp.com/",
    image: "",
    title: "Burger Time",
    github: "https://github.com/cgriffin332/burger-time332",
  },
];

const Project = ({ href, image, title, github }) => {
  return (
    <div className="card">
      <a href={href} rel="noreferrer" target="_blank">
        <img className="card-img-top" src={image} alt="Card image cap" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={github} rel="noreferrer" target="_blank">
          Github Link
        </a>
      </div>
    </div>
  );
};

export default Project;

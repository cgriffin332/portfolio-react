import React from "react";

const Project = ({ href, image, title, github }) => {
  return (
    <div className="col-lg-6 p-3 bg-white">
      <div className="card">
        <a href={href} rel="noreferrer" target="_blank">
          <img className="card-img-top" src={image} alt="Card cap" />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={github} rel="noreferrer" target="_blank">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

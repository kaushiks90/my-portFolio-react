import React from "react";
import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";
import project4 from "../../images/projects/project4.jpg";
import project5 from "../../images/projects/project5.jpg";

const Work = () => {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My
        <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">Check out some of my projects...</h2>
      <div className="projects">
        <div className="item">
          <a href="#!">
            <img src={project1} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project2} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project3} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project4} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={project5} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> Github
          </a>
        </div>
      </div>
    </main>
  );
};

export default Work;

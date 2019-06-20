import React from "react";

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Kaushik
        <span className="text-secondary">Subramanian</span>
      </h1>
      <h2 className="sm-heading">
        Web Developer, Programmer, Designer & Entrepreneur
      </h2>
      <div className="icons">
        <a href="https://twitter.com/kaushiks90">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="https://www.facebook.com/kaushik.shankar.3">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="https://in.linkedin.com/in/kaushiks90">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/kaushiks90">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;


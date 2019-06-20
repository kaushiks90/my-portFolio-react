import React from "react";
import portrait from "../../images/portrait.jpg";

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <img src={portrait} alt="John Doe" className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            I have over 6 years of experience as a software engineer, and have
            worked at both small startups and large organizations. While I'm a
            proficient full-stack developer, my expertise is in building
            scalable backend services (API services, stream processing,and async
            mechanisms.
          </p>
        </div>

        <div className="job job-1">
          <h3>The Taxback Group</h3>
          <h5>C# Developer(AWS)</h5>
          <p>
            Migrated a legacy application into Micro services Architecture.
            Created a Mern Stack API website with Strapi CMS for Euro Money2020
            Worked on RabbitMQ, Docker, AWS and CI/CD
          </p>
        </div>

        <div className="job job-2">
          <h3>Infosys Limited</h3>
          <h5>Technology Analyst</h5>
          <p>
            Interfaced with business analysts, developers and technical support
            to determine the best requirement specifications. Worked on Visual
            Studio 2015 using Angular 2.0, MVC 5.0, and used Oracle 11g in the
            backend.Implemented REST services using WCF. Implemented design
            pattern, including experimentation and multiple iterations. Stored,
            retrieved and manipulated data for close analysis of system
            capabilities. Wrote maintainable and extensible code in a team
            environment.
          </p>
        </div>

        <div className="job job-3">
          <h3>SSG COnsulting Private Limited</h3>
          <h5>Software Engineer</h5>
          <p>
            Designed ecommerce application components. Worked on Visual Studio
            2012 using Web API and used Tsql Server 2012 in the backend. Used
            Jquery and JavaScript extensively along with third party control
            Kendo UI. Designed new product elements such as image recognition,
            video, and device-to-device communication.
          </p>
        </div>

        <div className="job job-4">
          <h3>Wolknet Software Private Limited</h3>
          <h5>Software Engineer</h5>
          <p>
            Worked in C# asp.net and TSQL Server. Designed and developed schema
            data models
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;

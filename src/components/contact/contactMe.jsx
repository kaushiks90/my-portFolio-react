import React from "react";
import "./contactMe.scss";

const ContactMe = () => {
  return (
    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span> johndoe@test.com
        </div>
        <div>
          <span className="text-secondary">Phone: </span> (555) 555-5555
        </div>
        <div>
          <span className="text-secondary">Address: </span> 50 Main st Boston MA
          02101
        </div>
      </div>

      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="border" />
        <form className="contact-form" action="index.html" method="post">
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your name"
          />
          <input
            type="email"
            className="contact-form-text"
            placeholder="Your email"
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your phone"
          />
          <textarea className="contact-form-text" placeholder="Your message" />
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
    </main>
  );
};

export default ContactMe;

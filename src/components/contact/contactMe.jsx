import React from "react";
import "./contactMe.scss";
import Form from "../common/form";
import Joi from "joi-browser";
import { sendEmail } from "../../services/contcatService";

class ContactMe extends Form {
  state = {
    data: { name: "", email: "", phone: "", company: "", message: "" },
    errors: {}
  };
  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    phone: Joi.string()
      .required()
      .label("Phone"),
    company: Joi.string()
      .required()
      .label("Company"),
    message: Joi.string()
      .required()
      .label("Message")
  };
  doSubmit = async () => {
    try {
      await sendEmail(this.state.data);
    } catch (ex) {
      console.log("Error");
    }
    console.log("Submitted");
  };

  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span>{" "}
            kaushiks.subramanian@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (+91) 9738527179
          </div>
          <div>
            <span className="text-secondary">Address: </span> Bangalore India
          </div>
        </div>

        <div className="contact-section">
          <h1>Contact Me</h1>
          <div className="border" />
          <form className="contact-form" onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("company", "Company")}
            {/* {this.renderInput('message', 'Message')} */}
            {this.renderTextArea("message", "Message")}
            {this.renderButton("Send")}
          </form>
        </div>
      </main>
    );
  }
}

export default ContactMe;

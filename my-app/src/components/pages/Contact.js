import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div class="form-container">
    <h1 class="contact-info">Contact Information</h1>
      <form class="register-form" action="https://formspree.io/f/moqyebrr"
  method="POST">
        {/* Uncomment the next line to show the success message */}
        
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}

        <input
          id="message"
          class="form-field"
          type="text-area"
          placeholder="Write Your Message Here"
          name="message"
        />

        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
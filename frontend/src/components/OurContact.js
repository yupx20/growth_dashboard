// Contact.js
import React from "react";
import "../styling/contact.css";

export const OurContact = () => {
  const handleSendMessage = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`);

    const mailtoLink = `mailto:daffaalfaidzin@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client with pre-filled details
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? Reach out to us through the following contacts:</p>
          <div className="contact-methods">
            <div className="contact-method">
              <p>Email:</p>
              <a href="mailto:daffaalfaidzin@gmail.com">daffaalfaidzin@gmail.com</a>
            </div>
            <div className="contact-method">
              <p>Phone:</p>
              <a href="tel:+6281239070425">+62 812-3907-0425</a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a Message</h2>
          {/* Add your contact form here */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="button" onClick={handleSendMessage}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OurContact;

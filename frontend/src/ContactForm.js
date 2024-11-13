import React, { useEffect } from "react";
import "./Contact.css";

const ContactForm = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwd-F2hkLHzR_xtDJ6VOpuZofAkw1aJkCnaMWiE-2TcHVTmYo3U4ixVWArbwXC2gbjM/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          msg.innerHTML = "Message sent successfully!";
          setTimeout(function () {
            msg.innerHTML = ""}, 5000)
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <>
      <div class="form-container">
        <form name="submit-to-google-sheet">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input
            type="email"
            name="E-mail"
            placeholder="Your E-mail"
            required
          />
          <textarea
            name="Message"
            rows="6"
            placeholder="Your Message"
            required
          />
        <div className="submission">
          <button type="submit" class="btn">Submit</button> </div>
        </form>
        <span id="msg"> </span>
      </div>
    </>
  );
};

export default ContactForm;

import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section
      id="contact-section"
      className="max-w-[1440px] mx-auto h-screen flex justify-center items-center"
    >
      <ContactForm />
    </section>
  );
};

export default ContactPage;

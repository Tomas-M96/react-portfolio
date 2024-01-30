import React from "react";
import InputField from "./generic/InputField";
import InputArea from "./generic/InputArea";

const ContactForm = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    console.log("Form submitted");
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-1/3 h-full"
      onSubmit={handleFormSubmit}
    >
      <h1 className="text-5xl underline underline-offset-[12px] decoration-light-primary dark:decoration-dark-primary my-6 tracking-wider">
        Contact
      </h1>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField label="Name" name="name" type="text" id="name" />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField label="Email" name="email" type="email" id="email" />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField label="Subject" name="subject" type="text" id="subject" />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputArea label="Message" name="message" id="message" />
      </div>
      <button
        type="submit"
        className="py-[16px] px-[16px] bg-light-primary dark:bg-dark-primary text-light-text dark:text-light-text rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

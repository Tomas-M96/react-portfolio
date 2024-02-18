import { useRef, useState } from "react";
import toast from "react-hot-toast";

import emailjs from "@emailjs/browser";

import InputField from "./generic/InputField";
import InputArea from "./generic/InputArea";
import Button from "./generic/Button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const resetFields = () => {
    console.log("Resetting fields...");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const emailParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.persist();
    e.preventDefault();

    if (name === "") {
      toast.error("Name cannot be empty");
      return;
    } else if (email === "") {
      toast.error("Email cannot be empty");
      return;
    } else if (subject === "") {
      toast.error("Subject cannot be empty");
      return;
    } else if (message === "") {
      toast.error("Message cannot be empty");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStateMessage("Message sent!");
          toast.success(stateMessage);
          setIsSubmitting(false);
          resetFields();
          setTimeout(() => {
            setStateMessage("");
          }, 5000); //hide message after 5 seconds
        },
        () => {
          setStateMessage("Something went wrong!");
          toast.error(stateMessage);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); //Hide message after 5 seconds
        }
      );
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-full h-full"
      onSubmit={handleFormSubmit}
      id="contact-form"
    >
      <h1 className="text-5xl underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main my-6 tracking-wider">
        Contact
      </h1>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField
          label="Name"
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField
          label="Email"
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputField
          label="Subject"
          name="subject"
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <InputArea
          label="Message"
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;

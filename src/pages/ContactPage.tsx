import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section
      id="contact-section"
      className="max-w-[1440px] w-3/4 md:w-2/4 mx-auto h-full flex justify-center items-center"
    >
      <ContactForm />
    </section>
  );
};

export default ContactPage;

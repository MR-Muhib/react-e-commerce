import ContactBanner from "../components/contactPage/ContactBanner";
import ContactForm from "../components/contactPage/ContactForm";
import ContactHeader from "../components/contactPage/ContactHeader";
import ContactLocation from "../components/contactPage/ContactLocation";

const Contact = () => {
  return (
    <div className="container  mx-auto">
      <ContactBanner />
      <ContactHeader />

      <div className="md:flex">
        <ContactLocation />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

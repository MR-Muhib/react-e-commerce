import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import ContactBanner from "../components/contactPage/ContactBanner";
import ContactForm from "../components/contactPage/ContactForm";
import ContactHeader from "../components/contactPage/ContactHeader";
import ContactLocation from "../components/contactPage/ContactLocation";

const Contact = () => {
  return (
    <div className="container  mx-auto">
      <ContactBanner />
      <ContactHeader />

      <div className="sm:flex justify-around mb-5 p-5">
        <ContactLocation />
        <ContactForm />
      </div>

      {/* product quality and over view  */}
      <IntroduceApplication />
    </div>
  );
};

export default Contact;

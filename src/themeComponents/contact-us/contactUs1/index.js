import style from "./styles/Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactUs = () => {
  return (
    <>
      <section className={style.contactUs}>
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455039.775340255!2d49.56762805475765!3d24.16625624451223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1659514550341!5m2!1sar!2seg"></iframe>
        </div>

        <div className="container">
          <ContactForm/>
          <ContactDetails/>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

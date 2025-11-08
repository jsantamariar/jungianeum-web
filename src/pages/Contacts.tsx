import { ContactForm, ContactInfo, Newsletter } from "../components";

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <ContactForm />
        <div className="contacts-divider"></div>
        <ContactInfo />
        <div className="contacts-divider"></div>
        <section className="contacts-intro">
          <Newsletter />
        </section>
      </div>
    </div>
  );
}

export default Contacts;

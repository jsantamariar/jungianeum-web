import { ContactForm, ContactInfo, Newsletter } from "../components";

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <section className="contacts-intro">
          <Newsletter />
        </section>

        <div className="contacts-divider"></div>

        <ContactForm />

        <div className="contacts-divider"></div>

        <ContactInfo />
      </div>
    </div>
  );
}

export default Contacts;

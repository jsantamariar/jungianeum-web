import { ContactForm, ContactInfo, Newsletter } from "../components";

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <section className="contacts-intro">
          <h1 className="contacts-title">Contact</h1>
          <p className="contacts-description">
            We'd love to hear from you. Whether you're an author, reader, or
            academic institution, feel free to reach out.
          </p>
        </section>

        <div className="contacts-divider"></div>

        <ContactForm />

        <div className="contacts-divider"></div>

        <ContactInfo />

        <div className="contacts-divider"></div>

        <Newsletter />
      </div>
    </div>
  );
}

export default Contacts;

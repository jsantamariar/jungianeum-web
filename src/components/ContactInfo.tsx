function ContactInfo() {
  return (
    <section className="contacts-info-section">
      <div className="contacts-info-grid">
        <div className="contacts-info-item">
          <h3 className="contacts-info-item-title">Email</h3>
          <p className="contacts-info-text">info@jungianeum.com</p>
        </div>

        <div className="contacts-info-item">
          <h3 className="contacts-info-item-title">Address</h3>
          <p className="contacts-info-text">Berlin, Germany</p>
        </div>

        <div className="contacts-info-item">
          <h3 className="contacts-info-item-title">Office Hours</h3>
          <p className="contacts-info-text">Monday - Friday</p>
          <p className="contacts-info-text">9:00 AM - 5:00 PM (CET)</p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

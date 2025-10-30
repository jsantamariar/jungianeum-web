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

        <section className="contacts-form-section">
          <form className="contacts-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject of your message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows={8}
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="form-submit-button">
              Send Message
            </button>
          </form>
        </section>

        <div className="contacts-divider"></div>

        <section className="contacts-info-section">
          <div className="contacts-info-grid">
            <div className="contacts-info-item">
              <h3 className="contacts-info-title">Email</h3>
              <p className="contacts-info-text">info@jungianeum.com</p>
            </div>

            <div className="contacts-info-item">
              <h3 className="contacts-info-title">Address</h3>
              <p className="contacts-info-text">Berlin, Germany</p>
            </div>

            <div className="contacts-info-item">
              <h3 className="contacts-info-title">Office Hours</h3>
              <p className="contacts-info-text">Monday - Friday</p>
              <p className="contacts-info-text">9:00 AM - 5:00 PM (CET)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;

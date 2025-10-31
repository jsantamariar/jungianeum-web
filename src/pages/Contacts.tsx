import { useState } from "react";
import type { FormEvent } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <form className="contacts-form" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.subject}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status === "success" && (
              <div className="form-message form-success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="form-message form-error">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="form-submit-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
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

import { useState } from "react";
import type { FormEvent } from "react";
import { useToast } from "../hooks/useToast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const { showToast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

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

      showToast(
        "Message sent successfully! We'll get back to you soon.",
        "success"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("idle");
    } catch (error) {
      showToast("Failed to send message. Please try again.", "error");
      setStatus("idle");
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

        <button
          type="submit"
          className="form-submit-button"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;

import { useState, useEffect } from "react";
import type { FormEvent } from "react";

function NewsletterModal() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("newsletter-modal-seen");
    const hasSubscribed = localStorage.getItem("newsletter-subscribed");

    if (hasSeenModal || hasSubscribed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-modal-seen", "true");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setEmail("");
      localStorage.setItem("newsletter-subscribed", "true");

      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content newsletter-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="newsletter-modal-content">
          <h2 className="newsletter-modal-title">
            Subscribe to our newsletter
          </h2>
          <p className="newsletter-modal-description">
            Subscribe to our newsletter and receive updates on new publications,
            author events, and exclusive content on analytical psychology.
          </p>

          <form className="newsletter-modal-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-modal-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="newsletter-modal-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>

            {status === "success" && (
              <div className="newsletter-modal-message newsletter-modal-success">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            )}

            {status === "error" && (
              <div className="newsletter-modal-message newsletter-modal-error">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;

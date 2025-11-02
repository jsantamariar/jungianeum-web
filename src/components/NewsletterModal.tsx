import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useToast } from "../hooks/useToast";

function NewsletterModal() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();

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

      showToast("Thank you for subscribing!", "success");
      setEmail("");
      setStatus("idle");
      localStorage.setItem("newsletter-subscribed", "true");

      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      showToast("Something went wrong. Please try again.", "error");
      setStatus("idle");
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;

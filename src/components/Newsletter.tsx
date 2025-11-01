import { useState } from "react";
import type { FormEvent } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Aquí iría la integración con tu servicio de newsletter
      // Por ahora simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">
          Subscribe to our newsletter to receive updates on new publications,
          author events, and exclusive content on analytical psychology.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-group">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="newsletter-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {status === "success" && (
            <div className="newsletter-message newsletter-success">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          {status === "error" && (
            <div className="newsletter-message newsletter-error">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;

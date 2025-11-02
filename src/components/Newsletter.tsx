import { useState } from "react";
import type { FormEvent } from "react";
import { useToast } from "../hooks/useToast";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const { showToast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showToast("Thank you for subscribing!", "success");
      setEmail("");
      setStatus("idle");
    } catch (error) {
      showToast("Something went wrong. Please try again.", "error");
      setStatus("idle");
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
        </form>
      </div>
    </section>
  );
}

export default Newsletter;

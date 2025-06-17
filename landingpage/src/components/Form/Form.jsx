import { useState } from "react";
import "./Form.css";

function Form({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with your actual waitlist service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      // Replace this with your actual API call
      console.log("Email submitted:", email);

      setIsSubmitted(true);
      setEmail("");

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay" onClick={handleOverlayClick}>
      <div className="form-modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        {!isSubmitted ? (
          <>
            <div className="form-header">
              <h2>Join the Waitlist</h2>
              <p>
                Be the first to know when ApexxOS launches and get exclusive
                early access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            <p className="form-note">No spam. Unsubscribe at any time.</p>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>You're on the list!</h2>
            <p>We'll notify you as soon as ApexxOS is ready.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;

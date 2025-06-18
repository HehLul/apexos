import { useState } from "react";
import "./Form.css";

function Form({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "e3b650a3-08c9-4d93-8e18-7fbfee740f1f");
      formData.append("email", email);
      formData.append("subject", "New ApexxOS Waitlist Signup");
      formData.append("from_name", "ApexxOS Waitlist");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");

        // Close modal after 2 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2000);
      } else {
        console.log("Error", data);
        // You could add error state handling here if needed
      }
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

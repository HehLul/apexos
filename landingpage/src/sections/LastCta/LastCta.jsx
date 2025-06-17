import "./LastCta.css";

import Form from "../../components/Form/Form";
import { useState } from "react";

function LastCta() {
  //For form component
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <div className="last-cta">
        <div className="content page-section">
          <h1>Stop Leaving Potential on the Table</h1>
          <h2>
            Join the high performers who've chosen systematic optimization over
            guesswork. Get launch updates and priority over others.
          </h2>
          <button className="cta" onClick={openForm}>
            Join Waitlist
          </button>
        </div>
      </div>
      <Form isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default LastCta;

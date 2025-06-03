import { useState } from "react";
import "./Pricing.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { CircleCheckBig } from "lucide-react";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (planIndex) => {
    // If clicking the same plan, deselect it
    if (selectedPlan === planIndex) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(planIndex);
    }
  };

  return (
    <div className="pricing">
      <SectionTitle title={"Pricing"}></SectionTitle>
      <div className="header">
        <h1>Pre-Launch Pricing - Limited Time</h1>
        <p>
          Lock in these exclusive rates before launch. Prices increase to
          $37/month after launch date. Choose your systematic optimization plan
          now.
        </p>
      </div>

      <div
        className={`pricings ${selectedPlan !== null ? "has-selected" : ""}`}
      >
        <div
          className={`container ${selectedPlan === 0 ? "selected" : ""}`}
          onClick={() => handlePlanClick(0)}
        >
          <h4>Standard Plan</h4>
          <p>
            <span>$39</span> first 3 months paid
            <br />
            Get started with essential tracking. Locked-in rate: $27/month for
            life after trial.
          </p>
          <ul>
            <li className="plan-title">Everything you need:</li>
            <li>
              <CircleCheckBig size={24} />
              Hour-by-hour performance tracking
            </li>
            <li>
              <CircleCheckBig size={24} />
              Visual dashboard and analytics
            </li>
            <li>
              <CircleCheckBig size={24} />
              Seamless data logging
            </li>
            <li>
              <CircleCheckBig size={24} />
              Smart notifications and reminders
            </li>
            <li>
              <CircleCheckBig size={24} />
              Manual data export
            </li>
          </ul>
          <button>Get Standard Access</button>
        </div>

        <div
          className={`container ${selectedPlan === 1 ? "selected" : ""}`}
          onClick={() => handlePlanClick(1)}
        >
          <h4>Premium Plan</h4>
          <p>
            <span>$47</span> first 3 months paid
            <br />
            Full premium features included. Locked-in rate: $27/month for life
            after trial.
          </p>
          <ul>
            <li className="plan-title">Everything in Standard, plus:</li>
            <li>
              <CircleCheckBig size={24} />
              AI-powered pattern recognition
            </li>
            <li>
              <CircleCheckBig size={24} />
              Advanced analytics & correlations
            </li>
            <li>
              <CircleCheckBig size={24} />
              Automated insights & suggestions
            </li>
            <li>
              <CircleCheckBig size={24} />
              Priority customer support
            </li>
            <li>
              <CircleCheckBig size={24} />
              Beta access to new features
            </li>
          </ul>
          <button>Get Premium Access</button>
        </div>

        <div
          className={`container ${selectedPlan === 2 ? "selected" : ""}`}
          onClick={() => handlePlanClick(2)}
        >
          <h4>Lifetime Access</h4>
          <p>
            <span>$167</span> one-time payment
            <br />
            Never pay again. Complete access to all features forever. Best
            value.
          </p>
          <ul>
            <li className="plan-title">Everything in Premium, plus:</li>
            <li>
              <CircleCheckBig size={24} />
              Lifetime access to all features
            </li>
            <li>
              <CircleCheckBig size={24} />
              All future updates included
            </li>
            <li>
              <CircleCheckBig size={24} />
              Private community access
            </li>
            <li>
              <CircleCheckBig size={24} />
              VIP customer support
            </li>
            <li>
              <CircleCheckBig size={24} />
              First priority for new features
            </li>
          </ul>
          <button>Get Lifetime Access</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

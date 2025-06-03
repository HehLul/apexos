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
        <h1>Invest in Your Competitive Advantage</h1>
        <p>
          Choose the plan that fits your systematic optimization journey.
          Limited-time pre-launch pricing available now.
        </p>
      </div>

      <div
        className={`pricings ${selectedPlan !== null ? "has-selected" : ""}`}
      >
        <div
          className={`container ${selectedPlan === 0 ? "selected" : ""}`}
          onClick={() => handlePlanClick(0)}
        >
          <h4>Waitlist</h4>
          <p>
            <span>$0</span> forever
            <br />
            Stay updated on ApexOS development and get first access when we
            launch
          </p>
          <ul>
            <li className="plan-title">What you get:</li>
            <li>
              <CircleCheckBig size={24} />
              Product development updates
            </li>
            <li>
              <CircleCheckBig size={24} />
              Early access notifications
            </li>
            <li>
              <CircleCheckBig size={24} />
              Performance optimization tips
            </li>
            <li>
              <CircleCheckBig size={24} />
              Launch day priority access
            </li>
          </ul>
          <button>Join Waitlist</button>
        </div>

        <div
          className={`container ${selectedPlan === 1 ? "selected" : ""}`}
          onClick={() => handlePlanClick(1)}
        >
          <h4>Lifetime Access</h4>
          <p>
            <span>$29</span> one-time
            <br />
            Lock in lifetime access at the lowest price ever. Limited pre-launch
            offer.
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
              Lifetime updates and new features
            </li>
          </ul>
          <button>Secure Lifetime Access</button>
        </div>

        <div
          className={`container ${selectedPlan === 2 ? "selected" : ""}`}
          onClick={() => handlePlanClick(2)}
        >
          <h4>Lifetime + Bonuses</h4>
          <p>
            <span>$67</span> one-time
            <br />
            Everything in Lifetime Access plus exclusive insider content and
            optimization secrets
          </p>
          <ul>
            <li className="plan-title">Everything in Lifetime, plus:</li>
            <li>
              <CircleCheckBig size={24} />
              Exclusive optimization playbook
            </li>
            <li>
              <CircleCheckBig size={24} />
              Advanced performance frameworks
            </li>
            <li>
              <CircleCheckBig size={24} />
              Priority customer support
            </li>
            <li>
              <CircleCheckBig size={24} />
              Beta access to new features
            </li>
            <li>
              <CircleCheckBig size={24} />
              Private community access
            </li>
          </ul>
          <button>Get Premium Access</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

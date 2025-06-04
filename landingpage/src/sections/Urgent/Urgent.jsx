import "./Urgent.css";
import Countdown from "react-countdown";

function Urgent() {
  const launchDate = new Date("2025-07-15T12:00:00");

  // Custom renderer for countdown
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="countdown-ended">Launch Time!</span>;
    } else {
      return (
        <div className="countdown-timer">
          <div className="time-block">
            <span className="time-number">{days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-block">
            <span className="time-number">{hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-block">
            <span className="time-number">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-block">
            <span className="time-number">{seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="urgent">
      <div className="urgent-content">
        <h1>Business gets metrics. Performance gets guesswork?</h1>
        {/* <p>
          While you guess what's wrong, high performers are engineering
          systematic improvements.
        </p> */}

        <div className="countdown-section">
          <h3>Pre-Launch Pricing Ends In:</h3>
          <Countdown date={launchDate} renderer={countdownRenderer} />
        </div>

        <div className="pricing-comparison">
          <div className="rate">
            <span className="label">Current Rate:</span>
            <span className="price">$47 for 3 months</span>
            <span className="detail">(then $17/month locked for life)</span>
          </div>
          <div className="rate post-launch">
            <span className="label">Post-Launch Rate:</span>
            <span className="price">$37/month</span>
          </div>
        </div>

        <div className="final-hook">
          <p>Stop leaving potential on the table.</p>
          <button className="urgent-cta">Get Pre-Launch Access</button>
        </div>
      </div>
    </div>
  );
}

export default Urgent;

import "./Why.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
function Why() {
  return (
    <div className="why">
      <SectionTitle title={"Why ApexOS"}></SectionTitle>
      <h1>What's Really Holding You Back</h1>

      <div className="timeline-flow">
        <div className="timeline-step">
          <div className="step-number">01</div>
          <h3>The Problem</h3>
          <p>
            High performers get stuck not because they lack drive, but because
            they lack data. You're making critical performance decisions based
            on gut feelings instead of objective metrics.
          </p>
        </div>

        <div className="timeline-arrow">→</div>

        <div className="timeline-step">
          <div className="step-number">02</div>
          <h3>The Realization</h3>
          <p>
            You know that gut feeling at day's end—knowing you left potential in
            the tank. Without systematic tracking, you'll waste months fixing
            surface issues while real bottlenecks destroy your potential every
            hour.
          </p>
        </div>

        <div className="timeline-arrow">→</div>

        <div className="timeline-step">
          <div className="step-number">03</div>
          <h3>Our Mission</h3>
          <p>
            ApexOS exists to unlock every ounce of your hidden potential. We
            provide the systematic tracking and analysis tools that transform
            guesswork into precision performance engineering.
          </p>
        </div>
      </div>
      {/* <h1>Stop Optimizing Blindly and Start Engineering Performance</h1>
      <p>
        You know that gut feeling at day's end—knowing you left potential in the
        tank. Our mission is to unlock every ounce of your hidden potential with
        objective metrics for every hour.
      </p>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="icon">📊</div>
          <h3>Eliminate Guesswork</h3>
          <p>
            No more wasting months fixing surface-level issues while real
            bottlenecks destroy your potential. Get objective data on exactly
            what's holding you back every single hour.
          </p>
        </div>

        <div className="benefit-card">
          <div className="icon">⚡</div>
          <h3>Instant Bottleneck Detection</h3>
          <p>
            See precisely where energy drains, focus losses, and productivity
            gaps occur throughout your day. Turn scattered feelings into
            systematic optimization protocols.
          </p>
        </div>

        <div className="benefit-card">
          <div className="icon">🎯</div>
          <h3>Self-Directed Optimization</h3>
          <p>
            Create personalized audits and axioms based on your actual
            performance patterns. Build your own systematic approach to
            optimization with clear, data-backed insights you can act on.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Why;

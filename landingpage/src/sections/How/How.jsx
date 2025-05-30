import "./How.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

//icons
import number1 from "../../assets/number-1.png";
import number2 from "../../assets/number-2.png";
import number3 from "../../assets/number-3.png";

function How() {
  return (
    <div className="how">
      <SectionTitle title={"How it Works"}></SectionTitle>
      <div className="container">
        <div className="header">
          <h1>3 Step Process</h1>
          <p>
            Transform from guessing what's wrong to engineering precise
            performance improvements with our systematic approach
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-header">
              <img src={number1} alt="" />
              <h2>Meticulously Track Everything</h2>
            </div>

            <p>
              Log energy levels, productivity, focus time, and obstacles for
              every single hour via seamless input methods. Build the
              comprehensive dataset you need for systematic optimization.
            </p>
          </div>
          <div className="step">
            <div className="step-header">
              <img src={number2} alt="" />
              <h2>Analyze Your Patterns</h2>
            </div>

            <p>
              Visual dashboards reveal exactly how every hour played out with
              beautiful charts showing energy patterns, productivity trends, and
              bottleneck correlations across all your metrics.
            </p>
          </div>
          <div className="step">
            <div className="step-header">
              <img src={number3} alt="" />
              <h2>Engineer Your Performance</h2>
            </div>

            <p>
              Create personalized audits and axioms based on your actual
              performance data. Build systematic optimization protocols that
              eliminate guesswork and unlock your hidden potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default How;

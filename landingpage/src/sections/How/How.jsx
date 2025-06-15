import "./How.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

//icons
// import number1 from "../../assets/number-1.png";
// import number2 from "../../assets/number-2.png";
// import number3 from "../../assets/number-3.png";
import number1 from "../../assets/dashboard.png";
import number2 from "../../assets/magnifying.png";
import number3 from "../../assets/gear.png";

function How() {
  return (
    <div className="how page-section">
      {/* <SectionTitle title={"How it Works"}></SectionTitle> */}
      <div className="container">
        <div className="header">
          <h1>The Performance Engineering Framework</h1>
          <h2>
            Stop optimizing blind. Engineer systematic performance improvements
            through our precision data-driven approach.
          </h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-header">
              <img src={number1} alt="" />
              <h3>Track Performance</h3>
            </div>

            <p>
              Log energy, productivity, focus, and obstacles for every hour
              through frictionless input.
            </p>
          </div>
          <div className="step">
            <div className="step-header">
              <img src={number2} alt="" />
              <h2>Identify Bottlenecks</h2>
            </div>

            <p>
              AI-powered dashboards instantly reveal patterns and the exact
              bottlenecks destroying your potential.
            </p>
          </div>
          <div className="step">
            <div className="step-header">
              <img src={number3} alt="" />
              <h2>Engineer Improvements</h2>
            </div>

            <p>
              Create data-backed optimization protocols based on your actual
              performance patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default How;

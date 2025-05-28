import "./Why.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

//icons
// import bulbicon from "../../assets/bulbicon.png";
// import rocketicon from "../../assets/rocketicon.png";
// import questionicon from "../../assets/questionicon.png";
import rightarrowicon from "../../assets/rightarrowicon.png";

import bulbicon from "../../assets/timeicon.png";
import rocketicon from "../../assets/bolticon.png";
import questionicon from "../../assets/markicon.png";

function Why() {
  return (
    <div className="why">
      <SectionTitle title={"Why ApexOS"}></SectionTitle>
      <h1>What's Really Holding You Back</h1>

      <div className="timeline-flow">
        <div className="timeline-step">
          <div className="title">
            <img src={questionicon} alt="" />

            <h3>The Problem</h3>
          </div>
          <p>
            <span>
              {" "}
              High performers get stuck not because they lack drive, but because
              they lack data.
            </span>{" "}
            You're making critical performance decisions based on gut feelings
            instead of objective metrics.
          </p>
        </div>

        <img src={rightarrowicon} alt="->" />

        <div className="timeline-step">
          <div className="title">
            <img src={bulbicon} alt="" />

            <h3>The Realization</h3>
          </div>
          <p>
            That gut feeling at day's end knowing you left potential in the
            tank. Without systematic tracking,{" "}
            <span>you'll waste months fixing surface issues</span> while real
            bottlenecks destroy your potential.
          </p>
        </div>

        <img className="rightarrow" src={rightarrowicon} alt="->" />

        <div className="timeline-step">
          <div className="title">
            <img src={rocketicon} alt="" />

            <h3>Our Mission</h3>
          </div>
          <p>
            ApexOS exists to unlock <i>every ounce</i> of your hidden potential.
            We provide the systematic tracking and analysis tools that{" "}
            <span>
              transform guesswork into precision performance engineering.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;

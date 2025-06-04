import "./Problem.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

//icons
import downgraph from "../../assets/book.png";
import fireicon from "../../assets/think.png";
import battery_icon from "../../assets/battery.png";
import thinking_icon from "../../assets/loop.png";

function Problem() {
  return (
    <div className="problem">
      <SectionTitle title={"Problem"}></SectionTitle>
      <div className="header">
        <h1>What's Really Holding You Back</h1>

        <p>The gap between your current self and unlocking your potential</p>
      </div>

      <div className="problem-cards">
        <div className="problem-card">
          <img className="icon" src={fireicon} alt="" />

          <p>
            You set high ambitions and create systems to reach your goals. But
            you regularly feel like you're not making any substantial progress.
          </p>
          <div className="attribution">
            <div className="problem-type">The Ambitious Trap</div>
            <div className="persona">Aspiring Founders</div>
          </div>
        </div>

        <div className="problem-card">
          <img className="icon " src={downgraph} alt="" width={46} />
          <p>
            You've read the books, watched the videos, tried the systems. But
            still struggle with staying disciplined.
          </p>
          <div className="attribution">
            <div className="problem-type">The Consistency Crisis</div>
            <div className="persona">Self-Improvement Veterans</div>
          </div>
        </div>

        <div className="problem-card">
          <img className="icon" src={battery_icon} alt="" />
          <p>
            You know you have more left in the tank. You feel it. But you can't
            pinpoint exactly what's draining your potential every single day.
          </p>
          <div className="attribution">
            <div className="problem-type">The Wasted Potential</div>
            <div className="persona">High Achievers</div>
          </div>
        </div>

        <div className="problem-card">
          <img className="icon" src={thinking_icon} alt="" />
          <p>
            You're contantly frustrated knowing you could have done more, been
            more, achieved more. That frusturation is eating at you.
          </p>
          <div className="attribution">
            <div className="problem-type">The Frustration Loop</div>
            <div className="persona">Driven Indivisuals</div>
          </div>
        </div>
      </div>

      <div className="closing-hook">
        {/* <p>
          What if the solution isn't another productivity system, but
          crystal-clear visibility into your daily patterns? Stop guessing.
          Start auditing. Optimize systematically.
        </p> */}
        <p>
          You're stuck not because you lack drive, but because you lack data.
          <br /> What if there was an OS that meticulously tracked all your data
          and sytematically engineered your life?
        </p>
      </div>
    </div>
  );
}

export default Problem;

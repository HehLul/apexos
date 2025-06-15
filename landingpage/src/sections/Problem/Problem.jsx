import "./Problem.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

//icons
import downgraph from "../../assets/book.png";
import fireicon from "../../assets/think.png";
import battery_icon from "../../assets/battery.png";
import thinking_icon from "../../assets/loop.png";

function Problem() {
  return (
    <div className="problem page-section">
      {/* <SectionTitle title={"Problem"}></SectionTitle> */}
      <div className="section-header">
        <h1>What's Really Holding You Back</h1>
        <h2>The gap between your current self and unlocking your potential</h2>
      </div>

      <div className="problem-cards">
        {/* Row 1 - Top row with left/right animation */}
        <div className="problem-row-1">
          <div className="problem-card text-container">
            <img className="icon" src={fireicon} alt="" />
            <p>
              You set high ambitions and create systems to reach your goals. But
              you regularly feel like you're not making any substantial
              progress.
            </p>
            <div className="attribution">
              <div className="problem-type">The Ambitious Trap</div>
              <div className="persona">Aspiring Founders</div>
            </div>
          </div>

          <div className="problem-card">
            <img className="icon" src={downgraph} alt="" width={46} />
            <p>
              You've read the books, watched the videos, tried the systems. But
              still struggle with staying disciplined.
            </p>
            <div className="attribution">
              <div className="problem-type">The Consistency Crisis</div>
              <div className="persona">Self-Improvement Veterans</div>
            </div>
          </div>
        </div>

        {/* Row 2 - Bottom row with left/right animation */}
        <div className="problem-row-2">
          <div className="problem-card">
            <img className="icon" src={battery_icon} alt="" />
            <p>
              You know you have more left in the tank. You feel it. But you
              can't pinpoint exactly what's draining your potential every single
              day.
            </p>
            <div className="attribution">
              <div className="problem-type">The Wasted Potential</div>
              <div className="persona">High Achievers</div>
            </div>
          </div>

          <div className="problem-card">
            <img className="icon" src={thinking_icon} alt="" />
            <p>
              You're constantly frustrated knowing you could have done more,
              been more, achieved more. That frustration is eating at you.
            </p>
            <div className="attribution">
              <div className="problem-type">The Frustration Loop</div>
              <div className="persona">Driven Individuals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="closing-hook">
        <p>
          You're stuck not because you lack drive, but because you lack data.
        </p>
        <p>
          What if there was a platform, an OS, that tracked all your hourly data
          and engineered your everyday life?
        </p>
      </div>
    </div>
  );
}

export default Problem;

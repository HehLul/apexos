import "./Solution.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Solution() {
  return (
    <div className="solution">
      <SectionTitle title={"Solution"}></SectionTitle>
      <div className="header">
        <h1>Stop Guessing. Start Engineering.</h1>
        <p>The true approach to unlocking your full potential</p>
      </div>

      <div className="solution-content">
        <p>
          Without systematic tracking, you'll waste months fixing surface issues
          while real bottlenecks destroy your potential every single day. You're
          operating blind, making optimization decisions based on feelings
          instead of data. <br /> <br /> ApexxOS exists to unlock every ounce of
          your hidden potential. We provide the systematic tracking and analysis
          tools that transform guesswork into precision performance engineering.
          No more wondering what's holding you back. Just crystal-clear
          visibility into your daily patterns and the systematic insights to
          optimize them.
        </p>
      </div>
    </div>
  );
}

export default Solution;

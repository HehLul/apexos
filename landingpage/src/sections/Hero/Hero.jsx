import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h3>ApexOS</h3>
        {/* <h1>
          The High Performer's OS
          <br />
          for Meticulous Self-Optimization
        </h1> */}
        <h1>The OS For Meticulous Optimization</h1>
        <p>
          ApexOS enables high performers to objectively unlock their potential:
          Seamlessly track every KPI, instantly identify bottlenecks, and audit
          your life systematically
        </p>
      </div>

      <div className="buttons">
        <button>Get Started</button>
        <button>How it Works</button>
      </div>
    </div>
  );
}

export default Hero;

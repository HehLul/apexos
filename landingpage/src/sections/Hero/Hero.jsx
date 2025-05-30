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
        <h1>The Operating System For High Performers</h1>
        {/* <p>
            ApexOS enables high performers to seamlessly track every KPI,
            instantly identify bottlenecks, and audit their life systematically
            </p> */}
        {/* <p>
          ApexOS enables high performers to obtain their true potential by
          seamlessly tracking every KPI to instantly identify bottlenecks and
          audi their life systematically
        </p> */}
        <p>
          Unlock your true potential: ApexOS enables you to sytematically audit
          your everyday life through meticulous KPI tracking and help instantly
          identify bottlenecks.
        </p>
      </div>

      <div className="buttons">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Hero;

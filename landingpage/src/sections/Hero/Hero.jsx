import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h3>ApexxOS</h3>

        <h1>The Operating System For High Performers</h1>

        <p>
          Unlock your true potential: ApexxOS enables you to sytematically audit
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

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h3>ApexxOS</h3>

        <h1>The Operating System For High Performers</h1>

        <p>
          Stop leaving potential on the table: Meticulously track every hour,
          instantly spot performance bottlenecks, systematically unlock your
          hidden potential.
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

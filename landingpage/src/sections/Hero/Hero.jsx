import "./Hero.css";

import mockup from "../../assets/dummy_mockup.png";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h1>The Operating System For High Performers</h1>

        {/* <p>Precision performance engineering your life: meticulously </p> */}

        <p>
          Precision performance engineering your life through meticulous data
          tracking, AI bottleneck identification, and strategic performance
          audits.
        </p>
      </div>

      <div className="buttons">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
      <img src={mockup} alt="" />
    </div>
  );
}

export default Hero;

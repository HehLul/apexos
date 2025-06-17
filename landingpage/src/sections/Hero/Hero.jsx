import "./Hero.css";

import mockup from "../../assets/dummy_mockup.png";

function Hero() {
  const scrollToNextSection = () => {
    document.getElementById("problem").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <div className="text">
        <h1>Meticulously Track and Optimize Every Hour</h1>
        {/* <h2>
          ApexxOS enables you to meticulously engineer your everyday life
          through seamless data tracking, identify bottlenecks, and integrate
          daily protocols.
        </h2> */}
        <h2>
          A platform that helps you optimize every hour of your day through
          analyzing your daily patterns and implementing personalized protocols
        </h2>
        {/* <h1>Engineer your performance.</h1>
        <h2>The systematic OS for high performers who refuse to guess.</h2> */}
      </div>

      <div className="buttons">
        <button>Join Waitlist</button>
        <button onClick={scrollToNextSection}>Learn More</button>
      </div>
      <img src={mockup} alt="" />
    </div>
  );
}

export default Hero;

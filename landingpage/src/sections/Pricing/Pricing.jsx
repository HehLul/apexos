import "./Pricing.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Pricing() {
  return (
    <div className="pricing">
      <SectionTitle title={"Pricing"}></SectionTitle>
      <div className="header">
        <h1>Pre Launch Prices</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus aspernatur, corrupti aliquam sit atque eaque
          reprehenderit rerum culpa.
        </p>
      </div>

      <div className="pricings">
        <div className="container">
          <p>Personal</p>
          <p>
            <span>$0</span> one time
            <br />
            For inidvisual looking to see updates and singup on the waitlist
          </p>
          <ul>
            <p>This plan includes</p>
            <li>Waitlist</li>
            <li>Get updates</li>
            <li>See progress</li>
            <li>Get access to launch prices</li>
            <li>Not anythin else lol</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="container">
          <p>Personal</p>
          <p>
            <span>$0</span> one time
            <br />
            For inidvisual looking to see updates and singup on the waitlist
          </p>
          <ul>
            <p>This plan includes</p>
            <li>Waitlist</li>
            <li>Get updates</li>
            <li>See progress</li>
            <li>Get access to launch prices</li>
            <li>Not anythin else lol</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="container">
          <p>Personal</p>
          <p>
            <span>$0</span> one time
            <br />
            For inidvisual looking to see updates and singup on the waitlist
          </p>
          <ul>
            <p>This plan includes</p>
            <li>Waitlist</li>
            <li>Get updates</li>
            <li>See progress</li>
            <li>Get access to launch prices</li>
            <li>Not anythin else lol</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

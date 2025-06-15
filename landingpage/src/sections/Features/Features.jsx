import "./Features.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard/FeatureCard";

//images and icons
import charticon from "../../assets/piechartwhite.png";
import timeicon from "../../assets/timewhite.png";
import notificon from "../../assets/notifwhite.png";
import bolticon from "../../assets/boltwhite.png";

function Features() {
  return (
    <div className="features page-section">
      <div className="header section-header">
        <h1>Stop Guessing and Start Engineering</h1>
        <h2>
          Get the systematic tracking tools you need to objectively identify
          bottlenecks and optimize every hour of your day
        </h2>
      </div>
      <div className="feature-cards">
        {/* Row 1 - using proper grid row wrapper */}
        <div className="feature-row-1">
          <FeatureCard
            icon={charticon}
            title={"Visual Dashboard"}
            desc={
              "Our visual dashboard allows for seamless data analysis and bottleneck tracking. See exactly how every hour played out with beautiful charts."
            }
          ></FeatureCard>
          <FeatureCard
            icon={timeicon}
            title={"Hour-by-Hour Tracking"}
            desc={
              "Track energy levels, productivity, focus time, and obstacles for every single hour. Get the granular data you need for systematic optimization."
            }
          ></FeatureCard>
        </div>

        {/* Row 2 - using proper grid row wrapper */}
        <div className="feature-row-2">
          <FeatureCard
            icon={bolticon}
            title={"Seamless Data Logging"}
            desc={
              "Effortlessly capture your metrics throughout the day with frictionless input methods. Maintain consistent tracking without disrupting your workflow."
            }
          ></FeatureCard>
          <FeatureCard
            icon={notificon}
            title={"Smart Notifications"}
            desc={
              "Customizable, timely reminders keep you consistently tracking without being annoying. Build the systematic habit that unlocks your potential."
            }
          ></FeatureCard>
        </div>
      </div>
    </div>
  );
}

export default Features;

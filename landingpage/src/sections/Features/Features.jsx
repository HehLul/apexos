import "./Features.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Features() {
  return (
    <div className="features">
      <div className="header">
        <SectionTitle icon={""} title={"Features"}></SectionTitle>
        <h1>Everything you need</h1>
        <p>
          ApexOS provides all the necessary features for meticulous data
          tracking and regular audits
        </p>
      </div>
    </div>
  );
}

export default Features;

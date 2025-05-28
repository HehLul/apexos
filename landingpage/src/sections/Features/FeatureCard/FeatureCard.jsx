import "./FeatureCard.css";
import dummypic from "../../../assets/dummypic.jpg";
function FeatureCard({ img, icon, title, desc }) {
  return (
    <div className="feature-card">
      <img src={dummypic} alt="" />
      <div className="title">
        <img src={icon} alt="" />
        <h2>{title}</h2>
      </div>

      <p>{desc}</p>
    </div>
  );
}

export default FeatureCard;

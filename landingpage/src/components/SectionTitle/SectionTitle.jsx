import "./SectionTitle.css";
import stackicon from "../../assets/stackicon.png";
function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <img src={stackicon} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default SectionTitle;

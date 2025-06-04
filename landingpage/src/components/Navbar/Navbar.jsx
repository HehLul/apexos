import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../apexos_logo2.png" alt="" />
        <h3>ApexxOS</h3>
      </div>
      <ul>
        <a href="">Vision</a>
        <a href="">Product</a>
        <a href="">Pricing</a>
        <a href="">aOS Portal</a>
        {/* <a href="">Home</a> */}
      </ul>
      {/* <button>Get ApexOS</button> */}

      <div className="buttons">
        <button>Join Waitlist</button>
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;

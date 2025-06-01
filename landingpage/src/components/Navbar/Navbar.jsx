import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../apexos_logo2.png" alt="" />
        <h3>ApexxOS</h3>
      </div>
      <ul>
        <a href="">Features</a>
        <a href="">Why apexxOS</a>
        <a href="">How it works</a>
        <a href="">Pricing</a>
        {/* <a href="">Home</a> */}
      </ul>
      {/* <button>Get ApexOS</button> */}

      <div className="buttons">
        <button>Sign In</button>
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;

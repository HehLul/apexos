import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

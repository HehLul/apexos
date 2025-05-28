import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Why from "./sections/Why/Why";
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Why></Why>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

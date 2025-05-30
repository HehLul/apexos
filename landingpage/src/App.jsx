import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Why from "./sections/Why/Why";
import How from "./sections/How/How";
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <Why></Why>
      <Features></Features>
      <How></How>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

// App.jsx
import { useEffect } from "react";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Why from "./sections/Why/Why";
import How from "./sections/How/How";
import Pricing from "./sections/Pricing/Pricing";
import LastCta from "./sections/LastCta/LastCta";
import Footer from "./sections/Footer/Footer";
import Problem from "./sections/Problem/Problem";
import Solution from "./sections/Solution/Solution";
import Urgent from "./sections/Urgent/Urgent";
import New from "./sections/New/New";

//main function
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <New></New> */}
      <Problem></Problem>
      <How></How>
      <Features></Features>
      {/* <Pricing></Pricing> */}
      {/* <Urgent></Urgent> */}
      <LastCta></LastCta>
      <Footer></Footer>
    </div>
  );
}

export default App;

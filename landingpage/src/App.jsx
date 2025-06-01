// App.jsx - Updated with Intersection Observer
import { useEffect } from "react";
import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Why from "./sections/Why/Why";
import How from "./sections/How/How";

function App() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of element is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before element fully enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections that should animate on scroll
    const sectionsToAnimate = document.querySelectorAll(
      ".why, .features, .how"
    );
    sectionsToAnimate.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

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

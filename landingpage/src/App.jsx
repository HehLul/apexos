// App.jsx - Separate observers for section header and individual rows
import { useEffect } from "react";
import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Why from "./sections/Why/Why";
import How from "./sections/How/How";
import Pricing from "./sections/Pricing/Pricing";

function App() {
  useEffect(() => {
    // Observer for section headers (Why, Features, How sections)
    const sectionObserverOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, sectionObserverOptions);

    // Observer specifically for feature card rows
    const rowObserverOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -20px 0px",
    };

    const rowObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, rowObserverOptions);

    // Observe sections for header animations
    const sectionsToAnimate = document.querySelectorAll(
      ".why, .features, .how"
    );
    sectionsToAnimate.forEach((section) => sectionObserver.observe(section));

    // Wait for DOM to be ready, then observe feature rows
    setTimeout(() => {
      const featureRows = document.querySelectorAll(
        ".feature-row-1, .feature-row-2"
      );
      featureRows.forEach((row) => {
        // Create a wrapper div around each row's cards for observation
        const cards = row.querySelectorAll(".feature-card");
        if (cards.length > 0) {
          // Use the row element itself for observation
          rowObserver.observe(row);
        }
      });
    }, 100);

    // Cleanup observers on component unmount
    return () => {
      sectionObserver.disconnect();
      rowObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <Why></Why>
      <Features></Features>
      <How></How>
      <Pricing></Pricing>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

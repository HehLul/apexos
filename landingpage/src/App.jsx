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
import LastCta from "./sections/LastCta/LastCta";
import Footer from "./sections/Footer/Footer";
import Problem from "./sections/Problem/Problem";
import Solution from "./sections/Solution/Solution";

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
      ".why, .features, .how, .pricing, .problem, .solution"
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
      <How></How>
      <Problem></Problem>
      {/* <Solution></Solution> */}
      {/* <Why></Why> */}
      <Features></Features>
      <Pricing></Pricing>

      <LastCta></LastCta>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

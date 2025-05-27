import "./global.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <div className="content"></div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

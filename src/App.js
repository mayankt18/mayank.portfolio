import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useEffect, useState } from "react";
import {
  ClimbingBoxLoader,
  GridLoader,
  PacmanLoader,
  RingLoader,
  ScaleLoader,
  SquareLoader,
} from "react-spinners";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader
            size={30}
            loading={loading}
            color={"#D65478"}
            margin={2}
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;

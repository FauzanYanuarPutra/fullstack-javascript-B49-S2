import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Provincies from "./pages/provinces";
import Navbar from "./components/layouts/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className=" max-w-[1000px] mx-auto w-[90%] my-10 md:my-20">
          <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/provincies" element={<Provincies />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;


import React from "react";
import { Route, Routes, } from "react-router-dom";

// import { About } from "../pages/About";
import { Home } from "../pages/Home";
// import { ProductDetails } from "../pages/ProductDetails";
// import { Products } from "../pages/Products";
// import { Mission } from "./Mission";
// import { Team } from "./Team";
// import { Reviews } from "./Reviews";
// import { SharedLayout } from "./SharedLayout";

 
export function App() {
  return (
    <div className="App">
      <h1>Trending today</h1>
      < Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
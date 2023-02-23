import React from "react";
import { Route, Routes, } from "react-router-dom";
import { PAGE_NAME } from "router/paths";


// import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
// import { ProductDetails } from "../pages/ProductDetails";
// import { Products } from "../pages/Products";
// import { Mission } from "./Mission";
// import { Team } from "./Team";
// import { Reviews } from "./Reviews";
// import { SharedLayout } from "./SharedLayout";

 
export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGE_NAME.homepage} element={<Home />} />
        <Route path={PAGE_NAME.movies} element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
export default App;
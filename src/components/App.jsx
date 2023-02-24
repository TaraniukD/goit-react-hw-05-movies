import { MainLayout } from "Layouts/MainLayout";
import ErrorPage from "pages/Error/Error";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
        <Route path={PAGE_NAME.homepage} element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path={PAGE_NAME.movies} element={<MovieDetails />} />
           <Route path="/error" element={<ErrorPage />} />
           <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
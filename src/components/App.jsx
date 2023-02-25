import { MainLayout } from "Layouts/MainLayout";
import ErrorPage from "pages/Error/Error";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PAGE_NAME } from "router/paths";
import './App.css';

import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { SearchMovies } from "pages/SearchMovies/SearchMovies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";


 
export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGE_NAME.homepage} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAME.search} element={<SearchMovies />} />
          <Route path={PAGE_NAME.movies} element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
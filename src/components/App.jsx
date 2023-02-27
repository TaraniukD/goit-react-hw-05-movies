import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "Layouts/MainLayout";
import { PAGE_NAME } from "router/paths";
import './App.css';

const Home = lazy(() => import("pages/Home/Home"));
const ErrorPage = lazy(() => import("pages/Error/Error"));
const SearchMovies = lazy(() => import("pages/SearchMovies/SearchMovies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));


export function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
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
    </Suspense>
  );
};

export default App;
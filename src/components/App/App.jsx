import React, { Component } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWNmYjU2NzQ5NGJlZTU3YTk2NTQ4NDJmZGM2Nzg2YSIsInN1YiI6IjY0YjU1YWY5MGJiMDc2MDEyZDU5MTE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PuLGboHINRczyDWMglAFi0IkvOIuO777DQSb9p7AEjM';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const MovieTrailer = lazy(() => import('../MovieTrailer/MovieTrailer'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<MovieTrailer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} theme="dark" />
    </div>
  );
};

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from '../../pages/NotFound';
import SharedLayout from '../SharedLayout/SharedLayout';

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

export async function getTrendingMovies() {
  const typeRequest = {
    trends: 'trending/movie/week',
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.trends}`;
  const response = await axios.get(url, options);
  return response.data.results;
}

export async function getSearchMovie(searchQuery = '') {
  const typeRequest = {
    search: 'search/movie',
  };
  const options = {
    params: {
      query: searchQuery,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.search}`;
  const response = await axios.get(url, options);

  return response.data.results;
}

export async function getMovieDetails(movieId, type = 'details') {
  const typeRequestById = {
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    videos: `movie/${movieId}/videos`,
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequestById[type]}`;
  const response = await axios.get(url, options);

  return response.data;
}

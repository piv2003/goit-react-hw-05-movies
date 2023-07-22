import { Suspense, useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../components/App/App';
import BackButton from '../components/BackButton/BackButton';
import { StyledLink } from '../components/MovieDetails/MovieDetails.styled';
import {
  Container,
  MovieInfo,
  MovieDescription,
} from '../components/MovieDetails/MovieDetails.styled';

 const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
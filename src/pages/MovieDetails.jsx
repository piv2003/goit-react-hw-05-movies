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
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId, 'details');
        setMovieDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (movieDetails === null) return <h2>Loading...</h2>;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : '';

  const genresText = genres.length
    ? genres.map(({ name }) => name).join(', ')
    : 'No genres';

 

export default MovieDetails;

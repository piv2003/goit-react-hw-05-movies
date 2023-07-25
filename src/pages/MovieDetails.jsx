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

  return (
    <Container>
      <BackButton to={backLinkRef.current}>Go back</BackButton>
      <MovieInfo>
        {poster_path && (
          <img
            src={posterSrc}
            alt={title}
            width="300px"
            height="440px"
            style={{
              borderRadius: '25px',
              boxShadow: '7px 7px 4px #727171',
            }}
          />
        )}
        <MovieDescription>
          <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
          <p>User Score: {Math.round(vote_average) * 10}%</p>
          <b>Overview:</b>
          <p>{overview}</p>
          <b>Genres:</b>
          <p>{genresText}</p>

          <h2>Additional Information</h2>
          <ul>
            <li>
              <StyledLink to="cast" state={{ from: backLinkRef }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: backLinkRef }}>
                Reviews
              </StyledLink>
            </li>
            <li>
              <StyledLink to="trailer" state={{ from: backLinkRef }}>
                Trailer
              </StyledLink>
            </li>
          </ul>
        </MovieDescription>
      </MovieInfo>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;

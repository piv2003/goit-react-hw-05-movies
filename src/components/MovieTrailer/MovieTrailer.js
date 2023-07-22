import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { MovieTrailerBox, Trailer } from './MovieTrailer.styled';

const MovieTrailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
};

export default MovieTrailer;

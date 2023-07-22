import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { List } from './Cast.styled';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.js';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
};

export default Cast;

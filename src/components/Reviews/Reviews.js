import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { List, DoNotHave } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [quantityReviews, setQuantityReviews] = useState(null);
};

export default Reviews;

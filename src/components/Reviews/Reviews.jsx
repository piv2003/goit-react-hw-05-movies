import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { List, DoNotHave } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [quantityReviews, setQuantityReviews] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId, 'reviews')
      .then(data => {
        setReviews(data.results);
        setQuantityReviews(data.total_results);
      })
      .catch(console.log);
  }, [movieId]);

  if (quantityReviews === 0) {
    return <DoNotHave>We don't have any reviews for this movie.</DoNotHave>;
  }

  if (quantityReviews > 0) {
    return (
      <List>
        {reviews.map(review => (
          <li key={review.id}>
            <b>Author: {review.author}</b>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
    );
  }
};

export default Reviews;

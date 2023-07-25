import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { MovieTrailerBox, Trailer } from './MovieTrailer.styled';
import Notification from '../../pages/NotFound';

const MovieTrailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails(movieId, 'videos')
      .then(data => {
        const video = data.results.find(item => item.type === 'Trailer');

        if (video) {
          setTrailer(`https://www.youtube.com/embed/${video.key}`);
        }

        setLoading(false); // Загрузка завершена
      })
      .catch(console.log);
  }, [movieId, trailer]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!trailer) {
    return <Notification>No trailer available for this movie.</Notification>;
  }

  return (
    <MovieTrailerBox>
      <Trailer url={trailer} width="70%" height="70%" controls={true} />
    </MovieTrailerBox>
  );
};

export default MovieTrailer;

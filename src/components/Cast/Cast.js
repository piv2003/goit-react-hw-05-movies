import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App/App';
import { List } from './Cast.styled';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.js';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId, 'credits')
      .then(credits => setActors(credits.cast))
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      <List>
        <ScrollToTopButton />
        {actors.map(actor => (
          <li key={actor.cast_id}>
            {!actor.profile_path ? (
              <span>No photo</span>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
            )}
            <b>{actor.name}</b>
            <p>{actor.character}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;

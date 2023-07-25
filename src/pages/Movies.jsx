import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovie } from '../components/App/App';
import Notification from './NotFound';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
import Skeleton from 'components/Skeleton';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNoResults(false);
    if (movieName) {
      setIsLoading(true);
      setSearched(true);
      getSearchMovie(movieName)
        .then(movies => {
          setMovies(movies);
          if (movies.length === 0) {
            setNoResults(true);
          }
          setIsLoading(false);
        })
        .catch(console.log);
    }
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.name.value;
    const nextParams = query !== '' ? { query } : {};

    if (query === '') {
      toast.error('Please enter your request');
    }

    setSearchParams(nextParams);

    evt.target.name.value = '';
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searched && noResults && (
        <Notification>No results found for your search query</Notification>
      )}

      {searched && !noResults && (
        <>{isLoading ? <Skeleton /> : <MovieList movies={movies} />}</>
      )}
    </>
  );
};

export default Movies;

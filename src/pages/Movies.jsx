import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovie } from '../components/App/App';
import { Notification } from '../components/MovieList/MovieList.styled';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import Skeleton from '../components/Skeleton/Skeleton';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setNoResults(false);
      if (movieName) {
        setIsLoading(true);
        setSearched(true);
        try {
          const movies = await getSearchMovie(movieName);
          setMovies(movies);
          setNoResults(movies.length === 0);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchMovies();
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.name.value;

    if (query === '') {
      toast.error('Please enter your request');
      return;
    }

    setSearchParams({ query });
    evt.target.name.value = '';
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searched && (
        <>
          {noResults ? (
            <Notification>No results found for your search query</Notification>
          ) : (
            <>{isLoading ? <Skeleton /> : <MovieList movies={movies} />}</>
          )}
        </>
      )}
    </>
  );
};

export default Movies;

import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { getTrendingMovies } from '../components/App/App';
import Skeleton from '../components/Skeleton/Skeleton';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import { Title } from '../components/Home/Home.styled.jsx';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <Title>Trending today</Title>
      {isLoading ? <Skeleton /> : <MovieList movies={trendingMovies} />}
    </>
  );
};

export default Home;

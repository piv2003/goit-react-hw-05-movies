import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList/MovieList';
import { getTrendingMovies } from '../components/App/App';
import Skeleton from '../components/Skeleton/Skeleton';

const Title = styled.h1`
  text-align: center;
  -webkit-text-stroke: 2px #fa47c4;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: 900;
  color: #130ff3;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);
`;

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
      <Title>Trending today</Title>
      {isLoading ? <Skeleton /> : <MovieList movies={trendingMovies} />}
    </>
  );
};

export default Home;

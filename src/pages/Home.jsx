import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList/MovieList';
import { getTrendingMovies } from '../components/App/App';
import Skeleton from '../components/Skeleton/Skeleton';

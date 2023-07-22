import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px;
  background-color: #f8faea;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 15px;
`;
export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid 3px #8404ac;
  border-radius: 30px;
  padding: 10px;

  & ul {
    display: flex;
    gap: 15px;
  }
`;

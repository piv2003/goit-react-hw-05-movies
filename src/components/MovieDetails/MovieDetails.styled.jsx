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

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px 0;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #e3f79a;
  border: solid 1px #f00707;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;

  &:hover {
    color: red;
    transform: scale(1.03);
    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,
      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;
  }
`;

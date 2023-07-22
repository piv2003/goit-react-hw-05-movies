import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  font-size: 17px;
  font-weight: bold;
  border-radius: 7px;
  background: #0d0363;
  margin-bottom: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover span {
    transform: translateY(-0.3em);
  }
  &:active span {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  border: 2px solid #1c5c03;
  border-radius: 7px;
  padding: 5px 10px;
  background: #baf0bc;
  color: #1e035c;
  transform: translateY(-0.2em);
  transition: transform 0.2s ease;
`;

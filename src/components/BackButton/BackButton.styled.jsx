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

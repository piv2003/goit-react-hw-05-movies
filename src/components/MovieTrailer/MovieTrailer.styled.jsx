import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const MovieTrailerBox = styled.div`
  margin-top: 20px;
  position: relative;
  padding-top: 56.25%;
`;

export const Trailer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

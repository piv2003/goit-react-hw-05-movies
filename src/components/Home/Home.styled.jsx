import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  -webkit-text-stroke: 2px #fa47c4;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: 900;
  color: #130ff3;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);
  background-color: #fc73da;

  @-webkit-keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  @keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  color: rgb(10, 10, 10);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: radial-gradient(white, #ffa9a1);
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;

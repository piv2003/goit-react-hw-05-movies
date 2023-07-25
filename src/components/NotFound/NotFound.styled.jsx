import styled from 'styled-components';

const Notification = styled.b`
  font-size: 18px;
  width: 23%;
  color: red;
  text-shadow: 2px 2px 0px #3f2121, 5px 4px 0px rgb(230, 50, 191);
  margin-top: 20px;
  padding-left: 7px;
  padding-right: 7px;

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
  color: rgb(16, 3, 87);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: #da96fa;
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;

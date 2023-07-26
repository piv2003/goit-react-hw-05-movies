import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  & li {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,
      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;

    & b {
      background-color: #f7d9eb;
      text-decoration: underline;
      line-height: 20px;
      font-size: 18px;
    }
  }
`;

export const DoNotHave = styled.ul`
  font-size: 18px;
  width: 28%;
  color: red;
  text-shadow: 2px 2px 0px #3f2121, 5px 4px 0px rgb(230, 50, 191);
  margin-top: 20px;
  padding-left: 7px;
  border-radius: 5px;
  font-weight: 600;

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
  background: #da96fa;
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;

import styled from 'styled-components';

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: radial-gradient(circle, #ff98a0, #fa47c4);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  transition: background 0.5s ease, transform 0.5s ease;

  &:hover {
    background: radial-gradient(circle, #ffa9a1, #ff98a0);
    transform: scale(1.1);
  }

  &:active {
    animation: clickEffect 0.2s linear;
  }

  @keyframes clickEffect {
    0% {
      transform: scale(1);
      background: radial-gradient(circle, #ffa9a1, #ff98a0);
    }
    50% {
      transform: scale(0.95);
      background: radial-gradient(circle, #ff98a0, #fa47c4);
    }
    100% {
      transform: scale(1);
      background: radial-gradient(circle, #ffa9a1, #ff98a0);
    }
  }
`;

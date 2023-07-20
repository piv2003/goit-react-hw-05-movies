import styled from 'styled-components';

const Notification = styled.b`
  display: block;
  margin: 20px auto 0;
  font-size: 20px;
  width: 200px;
`;

const NotFound = () => {
  return <Notification>File not found</Notification>;
};

export default NotFound;

import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { StyledLink, Wrapper } from './BackButton.styled';

const BackButton = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <Wrapper>
        <HiOutlineChevronDoubleLeft size="24" />
      </Wrapper>
    </StyledLink>
  );
};

export default BackButton;

import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  SearchButton,
  SearchbarInput,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit, value, onChange }) => {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <SearchButton>
          <GoSearch />
        </SearchButton>
        <SearchbarInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies, please enter your request"
          value={value}
          onChange={onChange}
        />
      </SearchForm>
    </SearchBox>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;

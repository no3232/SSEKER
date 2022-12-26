import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle"

const SearchBar = () => {
  return (
    <SearchContainer>
      <GlobalStyle />
      <SearchInputWrapper>
        <SearchInput
          className='searchInput'
          type='text'
          placeholder='focus here to search'
        />
        <SearchInputIcon className='bx bx-search'></SearchInputIcon>
      </SearchInputWrapper>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 20rem;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 2rem;
  border: 1px solid #a1a1a1;
  :focus{
    outline-color: var(--primary-color);
  }
`;

const SearchInputIcon = styled.i`
  position: absolute;
  right: 0.8rem;
  top: 0.5rem;
  color: #a1a1a1;
  transition: all 0.1s ease-in-out;
`;

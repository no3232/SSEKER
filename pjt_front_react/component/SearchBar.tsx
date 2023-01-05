import { useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle"

const SearchBar = () => {
  const [listOpne, setListOpen] = useState(false)

  const Opening = () => {
    setListOpen(true)
  }
  return (
    <SearchContainer>
      <GlobalStyle />
      <SearchInputWrapper>
        <SearchInput
          className='searchInput'
          type='text'
          placeholder='focus here to search'
          onFocus={Opening}
          // onBlur={}
        />
        <SearchInputIcon className='bx bx-search'></SearchInputIcon>
      </SearchInputWrapper>
      {listOpne &&
        (<SearchResultList className='searchList'>
        <p>123</p>
        <p>123123</p>
        </SearchResultList>)
      }
    </SearchContainer>
  );
};

export default SearchBar;

const SearchResultList = styled.div`

`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
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

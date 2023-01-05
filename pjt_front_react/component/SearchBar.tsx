import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";

const SearchBar = () => {
  const [listOpne, setListOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);
  console.log(searchList)

  const Searching = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      axios({
        method: "GET",
        url: `https://ssekerapi.site/accounts/user/search?name=${event.target.value}`,
      }).then((response) => {
        setSearchList(Object.values(response.data));
      });
    }
  };
  const SearchListItems = searchList.map((person) => {
      console.log(person)
      // return (
      //   // <li>{person.name} {person.campus} {person.part}<Link href={"/login"}>123</Link></li>
      // )
    })

  const Opening = () => {
    setListOpen(true);
  };
  const Closing = () => {
    setListOpen(false);
  };
  return (
    <SearchContainer>
      <GlobalStyle />
      <SearchInputWrapper>
        <SearchInput
          className="searchInput"
          type="text"
          placeholder="focus here to search"
          onFocus={Opening}
          onBlur={Closing}
          onChange={Searching}
        />
        <SearchInputIcon className="bx bx-search"></SearchInputIcon>
      </SearchInputWrapper>
      {listOpne && (
        <SearchResultList className="searchList">
          {/* {SearchListItems} */}
        </SearchResultList>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchResultList = styled.ul``;

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
  :focus {
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

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";

interface searchUser {
  name: string;
  campus: number;
  part: number;
  username: string;
}


const UserSearchBar = () => {
  const [listOpen, setListOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [selectPeople, setSelectPeople] = useState<searchUser[]>([]);

  const SelectPeopleList = selectPeople.map((person: searchUser) => {
    return <PersonBox>{person.name} <i className='bx bx-x' onClick={()=>removeHandler(person)}></i></PersonBox>
  })

  const selectHandler = (person: searchUser) => {
    if (!selectPeople.includes(person)) {
      setSelectPeople((prev) => {return [...prev, person]})
    }
  }

  const removeHandler = (person: searchUser) => {
    setSelectPeople((prev) => {
      const newUserList = prev.filter((p: searchUser) => {
        if (p.username === person.username) {
          return false
        }
        return true
      })

      return newUserList})
  }

  const regionOption: {[key: number]: string} = {6: "전국", 5: '서울', 3: '대전', 4: '부울경', 1: '구미', 2: '광주'}


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
  const SearchListItems = searchList.map((person: searchUser) => {
      return (
        <div>
          <li onClick={()=>selectHandler(person)}>{person.name} {regionOption[person.campus]} {person.part + '반'}</li>
        </div>
      )
    })

  const Opening = () => {
    setListOpen(true);
  };
  const Closing = () => {
    setListOpen(false);
  };
  return (
    <SearchContainer >
      {listOpen && <Box onClick={Closing}></Box>}
      <GlobalStyle />

        {SelectPeopleList}


      <SearchInputWrapper>
        <SearchInput
          className="searchInput"
          type="text"
          placeholder="focus here to search"
          onFocus={Opening}
          onChange={Searching}
        />
        <SearchInputIcon className="bx bx-search"></SearchInputIcon>
        {listOpen && SearchListItems.length !== 0 && (
        <SearchResultList className="searchList">
          {SearchListItems}
        </SearchResultList>
      )}
      </SearchInputWrapper>
      
    </SearchContainer>
  );
};

export default UserSearchBar;

const PersonBox = styled.div`
  border: 1px solid black;
  > i {
    color: red;
  }
`

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: grey;
  opacity: 0.5;
`

const SearchResultList = styled.ul`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  list-style: none;
  > a {
    text-decoration: none;
  }
  > div {
    padding: 4px 5px
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  z-index: 2;
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

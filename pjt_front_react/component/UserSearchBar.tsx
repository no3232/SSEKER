import axios from "axios";
import { useState, useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import { TeamMember } from "../modules/types/dummy";

interface searchUser {
  name: string;
  campus: number;
  part: number;
  id: number;
}

const skillCategory:{[key: number]: {id: number, category: string}} = {
  1: {
      "id": 1,
      "category": "Frontend"
  },
  2: {
      "id": 2,
      "category": "Backend"
  },
  3: {
      "id": 3,
      "category": "UI&UX"
  },
  4: {
      "id": 4,
      "category": "Devops"
  }
}

const UserSearchBar = ({
  userList,
  skillId,
  selectHandler,
  removeHandler
}: {
  userList: TeamMember[];
  skillId: number;
  selectHandler: Function;
  removeHandler: Function;
}) => {
  const [listOpen, setListOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const searchInput = useRef<HTMLInputElement>(null);
  
  const SelectPeopleList = userList.map((person: TeamMember, index) => {
    return (
      <PersonBox key={index}>
        {person.manager.username}
        <i className='bx bx-x' onClick={()=>innerRemoveHandler(person)}></i>
      </PersonBox>
    );
  });

  const innerSelectHandler = (person: searchUser) => {
    const newMember = {
      manager: {
        id: person.id,
        username: person.name
      },
      skillcategory: skillCategory[skillId]
    }
    selectHandler(newMember)
    searchInput.current!.value = ""
    setListOpen(false)
    setSearchList([])
  };

  const innerRemoveHandler = (person: TeamMember) => {
    const newMember = {
      manager: person.manager,
      skillcategory: skillCategory[skillId]
    }
    removeHandler(newMember)
  };

  const regionOption: { [key: number]: string } = {
    6: "전국",
    5: "서울",
    3: "대전",
    4: "부울경",
    1: "구미",
    2: "광주",
  };

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
  const SearchListItems = searchList.map((person: searchUser, index) => {
    return (
      <div key={index}>
        <li onClick={()=>innerSelectHandler(person)}>
          {person.name} {regionOption[person.campus]} {person.part + "반"}
        </li>
      </div>
    );
  });

  const Opening = () => {
    setListOpen(true);
  };
  const Closing = () => {
    setListOpen(false);
  };
  return (
    <SearchContainer>
      {listOpen && <Box onClick={Closing}></Box>}
      <GlobalStyle />

      {SelectPeopleList}

      <SearchInputWrapper>
        <SearchInput
          className='searchInput'
          type='text'
          placeholder='focus here to search'
          onFocus={Opening}
          onChange={Searching}
          ref={searchInput}
        />
        <SearchInputIcon className='bx bx-search'></SearchInputIcon>
        {listOpen && SearchListItems.length !== 0 && (
          <SearchResultList className='searchList'>
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
`;

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: grey;
  opacity: 0.5;
`;

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
    padding: 4px 5px;
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

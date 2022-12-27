import styled from "styled-components";

import TitleText from "../../common/TitleText";
import CardList from "../../component/CardList";
import ClassSelect from "../../common/ClassSelect";
import SearchBar from "../../component/SearchBar";
import StackFilter from "../../component/StackFilter";
import { useState } from "react";

const UserListPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const openFilter = () => {
    setFilterOpen((prevState: boolean) => !prevState);
  };

  return (
    <UserBox>
      <TitleBox>
        <TitleText>팀원을 찾고 싶어요!</TitleText>
      </TitleBox>
      <SearchBar />
      <FilterIconBox onClick={openFilter}>
        {filterOpen ? (
          <i className='bx bx-x'></i>
        ) : (
          <i className='bx bx-filter'></i>
        )}
      </FilterIconBox>
      <FilterOption className={filterOpen ? "filter-open" : ''}>
        <ClassSelect />
        <StackFilter />
      </FilterOption>
      <CardList />
    </UserBox>
  );
};

export default UserListPage;

const UserBox = styled.div`
  margin-top: 42px;
`;

const TitleBox = styled.div`
  display: flex;
  height: 56px;
  align-item: center;
  margin-left: 15px;
`;

const FilterOption = styled.div`
  margin: 8px 15px;
  display: none;
`;

const FilterIconBox = styled.div`
  font-size: 32px;
  text-align: end;
  margin-right: 15px;
  margin-bottom: 8px;
`;

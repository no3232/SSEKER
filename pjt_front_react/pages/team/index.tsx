import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import TitleText from "../../common/TitleText";
import ClassSelect from "../../common/ClassSelect";
import SearchBar from "../../component/SearchBar";
import StackFilter from "../../component/StackFilter";
import TeamCardList from '../../component/TeamCardList';

// const DUMMY_LIST = [
//   {
//     stack: ["dart", "flask", "react", "vuejs"],
//     title: "1카드 제목입니다.",
//     status: "3/6",
//     id: 1,
//   },
//   {
//     stack: ["spring", "react", "vuejs"],
//     title: "2카드 제목입니다.",
//     status: "6/6",
//     id: 2,
//   },
//   {
//     stack: ["django", "python", "react", "vuejs"],
//     title: "3카드 제목입니다.",
//     status: "4/6",
//     id: 3,
//   },
//   {
//     stack: ["django", "python", "react", "vuejs"],
//     title: "4카드 제목입니다.",
//     status: "3/6",
//     id: 4,
//   },
//   {
//     stack: ["spring", "react", "vuejs"],
//     title: "5카드 제목입니다.",
//     status: "6/6",
//     id: 5,
//   },
//   {
//     stack: ["django", "python", "react", "vuejs"],
//     title: "6카드 제목입니다.",
//     status: "4/6",
//     id: 6,
//   },
//   {
//     stack: ["django", "python", "react", "vuejs"],
//     title: "7카드 제목입니다.",
//     status: "3/6",
//     id: 7,
//   },
//   {
//     stack: ["spring", "react", "vuejs"],
//     title: "8카드 제목입니다.",
//     status: "6/6",
//     id: 8,
//   },
//   {
//     stack: ["django", "python", "react", "vuejs"],
//     title: "9카드 제목입니다.",
//     status: "4/6",
//     id: 9,
//   },
// ];

const TeamListPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [temaData, setTeamData] = useState();
  const [pageNum, setPageNum] = useState();

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: `https://ssekerapi.site/projects/?count${pageNum}=&campus=&part=&skills`,
  //   }).then((response) => {
  //     setTeamData(response.data);
  //   });
  // }, []);

  const openFilter = () => {
    setFilterOpen((prevState: boolean) => !prevState);
  };

  return (
    <TeamBox>
      <TitleBox>
        <TitleText>프로젝트를 찾고 싶어요!</TitleText>
      </TitleBox>
      <SearchBar />
      <FilterIconBox onClick={openFilter}>
        {filterOpen ? (
          <i className='bx bx-x'></i>
        ) : (
          <i className='bx bx-filter'></i>
        )}
      </FilterIconBox>
      <FilterOption className={filterOpen ? "filter-open" : ""}>
        <ClassSelect />
        <StackFilter />
      </FilterOption>
      {/* <TeamCardList {...temaData} /> */}
    </TeamBox>
  );
};

export default TeamListPage;

const TeamBox = styled.div`
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

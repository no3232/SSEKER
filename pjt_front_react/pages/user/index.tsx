import styled from "styled-components";
import axios from "axios";

import TitleText from "../../common/TitleText";
import UserCardList from "../../component/UserCardList";
import ClassSelect from "../../common/ClassSelect";
import SearchBar from "../../component/SearchBar";
import StackFilter from "../../component/StackFilter";
import { useEffect, useState, useCallback } from "react";
import { userData, listCardTypes } from "../../modules/types/dummy";
import DropDown from '../../component/DropDown';

const UserListPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [userList, setUserList] = useState<listCardTypes[] | any>([]);
  const [pageNum, setPageNum] = useState<{[key: string]: number}>({page: 1, totalPage: 1});
  const [searchList, setSearchList] = useState([]);
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/?count=${pageNum.page}&campus=&part=&skills`,
    }).then((response) => {
      if (response.status === 200) {
        setUserList((prev: any) => {
          if (response.data.peoples.length > 0) {
            const peopleList = Object.values(response.data.peoples)
            return [...prev, ...peopleList]
              
          }
          return response.data.peoples;
        });

        setPageNum((prev) => ({
          ...prev,
          totalPage: Math.ceil(response.data.peoples_count/20)
        }));
      }
    });
  }, [pageNum.page]);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setPageNum((prev) => {
          if (prev.totalPage > prev.page) {
            return {
              ...prev,
              page: prev.page + 1
            };
          }
          return prev;
        });
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0,
      root: null
    });

    target && observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target]);

  const openFilter = () => {
    setFilterOpen((prevState: boolean) => !prevState);
  };

  return (
    <UserBox>
      <TitleBox>
        <TitleText>팀원을 찾고 싶어요!</TitleText>
      </TitleBox>
      <SearchBar />
      {/* <DropDown /> */}
      {/* <FilterIconBox onClick={openFilter}>
        {filterOpen ? (
          <i className='bx bx-x'></i>
        ) : (
          <i className='bx bx-filter'></i>
        )}
      </FilterIconBox>
      <FilterOption className={filterOpen ? "filter-open" : ""}>
        <ClassSelect />
        <StackFilter />
      </FilterOption> */}
      <UserCardList {...userList} />
      <Spinner ref={setTarget}></Spinner>
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

const Spinner = styled.div`
  height: 100px
`

const DUMMY_LIST = [
  {
    stack: ["dart", "flask", "react", "vuejs"],
    title: "1카드 제목입니다.",
    status: "3/6",
    id: 1,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "2카드 제목입니다.",
    status: "6/6",
    id: 2,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "3카드 제목입니다.",
    status: "4/6",
    id: 3,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "4카드 제목입니다.",
    status: "3/6",
    id: 4,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "5카드 제목입니다.",
    status: "6/6",
    id: 5,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "6카드 제목입니다.",
    status: "4/6",
    id: 6,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "7카드 제목입니다.",
    status: "3/6",
    id: 7,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "8카드 제목입니다.",
    status: "6/6",
    id: 8,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "9카드 제목입니다.",
    status: "4/6",
    id: 9,
  },
];

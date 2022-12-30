import styled from "styled-components";
import axios from "axios";

import TitleText from "../../common/TitleText";
import UserCardList from "../../component/UserCardList";
import ClassSelect from "../../common/ClassSelect";
import SearchBar from "../../component/SearchBar";
import StackFilter from "../../component/StackFilter";
import { useEffect, useState } from "react";
import { userData, listCardTypes } from "../../modules/types/dummy";

// const getUsers = async (): Promise<userData | string> => {
//   try {
//     // 👇️ const data: GetUsersResponse
//     const { data, status } = await axios.get<userData>(
//       "http://ec2-3-36-247-242.ap-northeast-2.compute.amazonaws.com:8000/accounts/",
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );

//     // console.log(JSON.stringify(data, null, 4));

//     // // 👇️ "response status is: 200"
//     // console.log("response status is: ", status);

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message);
//       return error.message;
//     } else {
//       console.log("unexpected error: ", error);
//       return "An unexpected error occurred";
//     }
//   }
// };

const UserListPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [userList, setUserList] = useState<listCardTypes | any>();
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/?count=${pageNum}&campus=&part=&skills`,
    }).then((response) => {
      setUserList(response.data);
    });
  }, []);

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
      <FilterOption className={filterOpen ? "filter-open" : ""}>
        <ClassSelect />
        <StackFilter />
      </FilterOption>
      <UserCardList {...userList} />
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

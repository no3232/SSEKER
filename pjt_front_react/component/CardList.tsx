import styled from "styled-components";

import ListCard from "./ListCard";

const DUMMY_LIST = [
  {
    stack: ["django", "python", "react", "vuejs"],
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


const CardList = () => {
  const ListCards = (
    <>
      {DUMMY_LIST.map((item) => 
        <ListCard
          key={item.id}
          id={item.id}
          title={item.title}
          stack={item.stack}
          status={item.status}
        />
      )}
    </>
  );

  return <ListStyle>{ListCards}</ListStyle>;
};

export default CardList;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`;

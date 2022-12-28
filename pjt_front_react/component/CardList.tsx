import styled from "styled-components";

import ListCard from "./ListCard";
import listCardTypes from "../modules/types/listCardTypes";


const CardList = (props: listCardTypes[]) => {
  const ListCards = (
    <>
      {Object.values(props).map((item) => 
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
  width: auto;
  margin: 0px 15px
`;

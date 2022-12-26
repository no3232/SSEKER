import styled from "styled-components";
import StackIcon from "../common/StackIcon";
import TitleText from "../common/TitleText";
import listCardTypes from "../modules/types/listCardTypes";

const ListCard = (props: listCardTypes) => {
  const CardStack = (
    <>
      {props.stack.map((stack) => (
        <StackIcon key={stack} stack={stack} clickable={false} />
      ))}
    </>
  );

  return (
    <CardOutside>
      <CardMainside>
        <CardTitleside>
          <TitleText>{props.title}</TitleText>
          <CardStatusside>{props.status}</CardStatusside>
        </CardTitleside>
        <CardStackside>{CardStack}</CardStackside>
      </CardMainside>
      <CardButtonside>
        <i className='bx bx-chevron-right'></i>
      </CardButtonside>
    </CardOutside>
  );
};

export default ListCard;

const CardOutside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
  padding 16px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

const CardButtonside = styled.div`
  display: flex;
  font-size: 40px;
  align-items: center;
`;

const CardMainside = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const CardTitleside = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CardStatusside = styled.div`
  display: flex;
  margin-left: 16px
`;

const CardStackside = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

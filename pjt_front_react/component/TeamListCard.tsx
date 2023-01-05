import styled from "styled-components";
import StackIcon from "../common/StackIcon";
import TitleText from "../common/TitleText";
import { EachTeamCardTypes } from "../modules/types/dummy";

const TeamListCard = (props: EachTeamCardTypes) => {
  const statusObj:{[key: number]: string} = {1: "마감", 2: "모집중", 3:"모집예정"}

  const CardStack = (
    <>
      {props.stack.slice(0, 4).map((stack: any) => {
        // console.log(stack.title)
        return (
          <StackIcon
            key={stack.title}
            stack={stack.title}
            clickable={false}
            textShow={false}
            list={""}
          />
        );
      })}
    </>
  );

  return (
    <CardOutside>
      <CardMainside>
        <CardTitleside>
          <TitleText>{props.title}</TitleText>
          <CardStatusside>{props.class}
            {props.part}반 {statusObj[props.status]}</CardStatusside>
        </CardTitleside>
        <CardStackside>{CardStack}{props.stack.length > 4 && <span>+ {props.stack.length - 4}</span>}</CardStackside>
      </CardMainside>
      <CardButtonside>
        <CardButton className='bx bx-chevron-right'/>
      </CardButtonside>
    </CardOutside>
  );
};

export default TeamListCard;

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
  align-items: center;
`;

const CardButton = styled.i`
  font-size: 40px;
`

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

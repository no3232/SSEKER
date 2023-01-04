import styled from "styled-components";

import TeamListCard from "./TeamListCard";
import { teamData } from "../modules/types/dummy";


const TeamCardList = (props: teamData) => {
  console.log(props);
  const ListCards = Object.values(props).map((item) => {
    return (
      <TeamListCard key={item.id} id={item.id} title={item.title} stack={item.skill} part={item.part} class={item.campus.title} fixedcount={item.fixed_count} participant={item.participant} status={item.status} />
    );
  });

  return <ListStyle>{ListCards}</ListStyle>;
};

export default TeamCardList;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0px 15px;
`;

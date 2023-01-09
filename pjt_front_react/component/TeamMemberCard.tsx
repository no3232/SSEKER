import Link from 'next/link';
import styled from "styled-components";
import TitleText from "../common/TitleText";
import { TeamMember } from "../modules/types/dummy";

const TeamMemberList = (props: TeamMember[]) => {
  // console.log(props)

  const CardList = Object.values(props).map((person) => {
    return (<Link href={`/userdetail/${person.manager.id}`} key={person.manager.username}>
    <CardOutside>
      <CardMainside>
        <CardTitleside>
          <TitleText>{person.manager.username}</TitleText>
          <CardStatusside>
          {person.skillcategory.category}
          </CardStatusside>
        </CardTitleside>
      </CardMainside>
      <CardButtonside>
        <CardButton className='bx bx-chevron-right' />
      </CardButtonside>
    </CardOutside>
    </Link>)
  })

  return (
    <>
    {CardList}
    </>
  );
};

export default TeamMemberList;

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
  margin-left: 16px;
`;

const CardStackside = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

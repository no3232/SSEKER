import Router from "next/router";
import styled from "styled-components";

import LargeText from "../../common/LargeText";
import MainButton from "../../common/MainButton";

const LoginAfterPage = () => {
  const router = Router;
  const moveToTeamList = () => {
    router.push("/team");
  };
  const moveToUserList = () => {
    router.push("/user");
  };

  return (
    <AfterBox>
      <TitleBox>
        <LargeText>SSEEKER</LargeText>
      </TitleBox>
      <ButtonBox>
        <MainButton onButtonClick={moveToUserList}>팀원 구하기!</MainButton>
        <MainButton onButtonClick={moveToTeamList}>팀에 들어가기!</MainButton>
      </ButtonBox>
    </AfterBox>
  );
};

export default LoginAfterPage;

const AfterBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-top: auto;
`;

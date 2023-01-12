import Router from "next/router";
import styled from "styled-components";

import LargeText from "../../common/LargeText";
import MainButton from "../../common/MainButton";
import { useEffect } from "react";
import { getKeyCookies } from "../../modules/cookie/keyCookies";

const LoginAfterPage = () => {
  const router = Router;

  useEffect(() => {
    if (getKeyCookies("key") === undefined) {
      router.push("/login");
    }
  }, []);
  const moveToTeamList = () => {
    router.push("/team");
  };
  const moveToUserList = () => {
    router.push("/user");
  };

  // 크로스 브라우징 높이, 넓이 계산
  let vh = 0;
  let vw = 0;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }, []);

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
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  width: 90vw;
  width: calc(vat(--vw, 1vw) * 100);
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
  justify-content: center;
  gap: 1em;
  margin: 0px 15px;
  margin-top: auto;

  padding-bottom: 4em;

  & button {
    margin: 0;
  }
`;

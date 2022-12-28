import TitleText from "../../common/TitleText";
import SubtitleText from "../../common/SubtitleText";
import styled from "styled-components";
import Router from 'next/router';

const SignupComplete = () => {
  const route = Router;

  setTimeout(() => {
    route.push('/signup/ssafyinfo')
  }, 3000)

  return (
    <CompleteBox>
      <TitleBox>
        <TitleText>사용자를 등록중입니다...</TitleText>
        <br />
        <SubtitleText>Tip!</SubtitleText>
        <br />
        <SubtitleText>
          마이페이지에서 여러 정보를 수정할 수 있어요!
        </SubtitleText>
      </TitleBox>
    </CompleteBox>
  );
};

export default SignupComplete;

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleBox = styled.div`
  margin-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
`;

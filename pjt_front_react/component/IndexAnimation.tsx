import styled from "styled-components";

import SubtitleText from "../common/SubtitleText";

const IndexAnimation = () => {
  return (
    <>
      <AnimationOutside>
        <SubtitleText>싸피에서</SubtitleText>
        <AnimationLoopBox>
          <AnimationLoopList>
            <AnimationLoopText>
              <SubtitleText>팀</SubtitleText>
            </AnimationLoopText>
            <AnimationLoopText>
              <SubtitleText>팀원</SubtitleText>
            </AnimationLoopText>
            <AnimationLoopText>
              <SubtitleText>스터디</SubtitleText>
            </AnimationLoopText>
            <AnimationLoopText>
              <SubtitleText>개인플젝</SubtitleText>
            </AnimationLoopText>
            <AnimationLoopText>
              <SubtitleText>팀</SubtitleText>
            </AnimationLoopText>
          </AnimationLoopList>
        </AnimationLoopBox>
        <SubtitleText>구할때는?</SubtitleText>
      </AnimationOutside>
    </>
  );
};

export default IndexAnimation;

const AnimationOutside = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationLoopBox = styled.div`
  height: 40px;
  overflow: hidden;
  position: relative;
`;

const AnimationLoopList = styled.ul`
  float: right;
  margin: 0;
  padding: 0;
  -webkit-animation: scrollUp 6s ease-in-out infinite normal;
  animation: scrollUp 6s ease-in-out infinite normal;

  @-webkit-keyframes scrollUp {
    from {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-80%);
      transform: translateY(-80%);
    }
  }
  @keyframes scrollUp {
    from {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-80%);
      transform: translateY(-80%);
    }
  }
`;

const AnimationLoopText = styled.li`
  opacity: 1;
  height: 30px;
  padding: 10px;
  list-style: none;
`;

import styled from "styled-components";
import Router from "next/router";
import { SyntheticEvent } from "react";

import TitleText from "../../common/TitleText";
import SubtitleText from "../../common/SubtitleText";
import MainButton from "../../common/MainButton";
import StackIcon from "../../common/StackIcon";

const SkillInfo = () => {
  const route = Router;

  const moveToAfter = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push("/signup/after");
  };

  return (
    <SkillBox>
      <TitleBox>
        <TitleText>Skill Info</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToAfter}>
        <SkillLabelText>
          <SubtitleText>프론트엔드</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <StackIcon stack='vuejs' clickable={true}/>
          <StackIcon stack='react' clickable={true} />
        </IconBox>
        <SkillLabelText>
          <SubtitleText>백엔드</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <StackIcon stack='django' clickable={true} />
          <StackIcon stack='spring' clickable={true} />
        </IconBox>
        <SkillLabelText>
          <SubtitleText>DebOps</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <StackIcon stack='linux' clickable={true} />
          <StackIcon stack='linux' clickable={true} />
        </IconBox>
        <SkillLabelText>
          <SubtitleText>UI/UX</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <StackIcon stack='figma' clickable={true} />
          <StackIcon stack='linux' clickable={true} />
        </IconBox>
        <MainButton type='submit'>작성 완료</MainButton>
      </FormBox>
    </SkillBox>
  );
};

export default SkillInfo;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleBox = styled.div`
  margin-top: auto;
  margin-left: 15px;
  margin-bottom: 24px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-bottom: auto;
`;

const SkillLabelText = styled.div``;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 24px;
`;

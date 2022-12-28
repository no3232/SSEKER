import styled from "styled-components";
import Router from "next/router";
import React, { SyntheticEvent, useState } from "react";

import TitleText from "../../common/TitleText";
import SubtitleText from "../../common/SubtitleText";
import MainButton from "../../common/MainButton";
import StackIcon from "../../common/StackIcon";
import { ListFormat } from 'typescript';

const SkillInfo = () => {
  const route = Router;
  const [signupSkills, setSignupSkills] = useState<string[]>([]);

  const getSkill = (event: SyntheticEvent): void => {
    const eventTarget = event.target as HTMLElement;
    if (signupSkills.includes(eventTarget.innerText)) {
      const newSkillset = signupSkills.filter((skill) => {
        if (skill === eventTarget.innerText) {
          return false;
        }
        return true;
      });
      setSignupSkills(newSkillset);
    } else {
      setSignupSkills([...signupSkills, eventTarget.innerText]);
    }
  };

  const moveToAfter = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(signupSkills)
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
          <div onClick={getSkill}>
            <StackIcon stack='vuejs' clickable={true} textShow={true} />
          </div>
          <div onClick={getSkill}>
            <StackIcon stack='react' clickable={true} textShow={true} />
          </div>
        </IconBox>
        <SkillLabelText>
          <SubtitleText>백엔드</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <div onClick={getSkill}>
            <StackIcon stack='django' clickable={true} textShow={true} />
          </div>
          <div onClick={getSkill}>
            <StackIcon stack='spring' clickable={true} textShow={true} />
          </div>
        </IconBox>
        <SkillLabelText>
          <SubtitleText>DebOps</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <div onClick={getSkill}>
            <StackIcon stack='linux' clickable={true} textShow={true} />
          </div>
          <div onClick={getSkill}>
            <StackIcon stack='linux' clickable={true} textShow={true} />
          </div>
        </IconBox>
        <SkillLabelText>
          <SubtitleText>UI/UX</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <div onClick={getSkill}>
            <StackIcon stack='figma' clickable={true} textShow={true} />
          </div>
          <div onClick={getSkill}>
            <StackIcon stack='linux' clickable={true} textShow={true} />
          </div>
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

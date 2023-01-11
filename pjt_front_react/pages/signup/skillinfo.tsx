import styled from "styled-components";
import Router from "next/router";
import React, { SyntheticEvent, useState, useEffect } from "react";
import axios from "axios";

import TitleText from "../../common/TitleText";
import SubtitleText from "../../common/SubtitleText";
import MainButton from "../../common/MainButton";
import StackIcon from "../../common/StackIcon";
import Select from "../../component/Select";
import { getKeyCookies } from "../../modules/cookie/keyCookies";
import { positionOption } from "../../modules/list/dummy";
import NanumSquareHeavy from "../../modules/fonts/NanumSquareNeoHeavy";

interface skillObjType {
  [key: string]: number;
}

const SkillInfo = () => {
  const route = Router;
  const [signupPosition, setSignupPosition] = useState<number>();
  const [signupSkills, setSignupSkills] = useState<number[]>([]);
  let user = { id: "" };
  useEffect(() => {
    if (getKeyCookies("key") === undefined) {
      route.push("/login");
    } else {
      user = JSON.parse(localStorage.getItem("userinfo") || "{}");
    }
  }, []);

  const getSkill = (event: SyntheticEvent): void => {
    const eventTarget = event.target as HTMLElement;
    const skillObj: skillObjType = {
      vuejs: 1,
      react: 2,
      django: 8,
      spring: 9,
      linux: 10,
      Git: 16,
      XD: 14,
      figma: 13,
    };

    if (signupSkills.includes(skillObj[eventTarget.innerText])) {
      const newSkillset = signupSkills.filter((skill) => {
        if (skill === skillObj[eventTarget.innerText]) {
          return false;
        }
        return true;
      });
      setSignupSkills(newSkillset);
    } else {
      setSignupSkills([...signupSkills, skillObj[eventTarget.innerText]]);
    }
  };

  const moveToAfter = async (event: SyntheticEvent) => {
    event.preventDefault();
    user = JSON.parse(localStorage.getItem("userinfo") || "{}");
    await axios({
      method: "PUT",
      url: `https://ssekerapi.site/accounts/${user.id}`,
      // url: "https://ssekerapi.site/accounts/ssafy123@ssafy.com",
      headers: {
        Authorization: `Token ${getKeyCookies("key")}`,
      },
      data: { skill: signupSkills, position: signupPosition },
    }).catch();
    await axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/${user.id}`,
    })
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem("userinfo", JSON.stringify(response.data));
        // console.log(ctxUserinfo);
        route.push("/login/after");
      })
      .catch((err) => {
        console.log(err.response);
        return;
      });
    await route.push("/signup/after");
  };

  const getPosition = (position: number) => {
    setSignupPosition(position);
  };

  return (
    <SkillBox>
      <NanumSquareHeavy />
      <TitleBox>
        <TitleText>SKILL INFO</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToAfter}>
        <ContentBox>
          <SkillLabelText>
            <SubtitleText>선호 포지션</SubtitleText>
          </SkillLabelText>
          <Select
            title="포지션 선택"
            options={positionOption}
            handler={getPosition}
          />
        </ContentBox>

        <ContentBox>
          <SkillLabelText>
            <SubtitleText>프론트엔드</SubtitleText>
          </SkillLabelText>
          <IconBox>
            <div onClick={getSkill}>
              <StackIcon stack="vuejs" clickable={true} textShow={true} />
            </div>
            <div onClick={getSkill}>
              <StackIcon stack="react" clickable={true} textShow={true} />
            </div>
          </IconBox>
        </ContentBox>
        
        <ContentBox>
          <SkillLabelText>
            <SubtitleText>백엔드</SubtitleText>
          </SkillLabelText>
          <IconBox>
            <div onClick={getSkill}>
              <StackIcon stack="django" clickable={true} textShow={true} />
            </div>
            <div onClick={getSkill}>
              <StackIcon stack="spring" clickable={true} textShow={true} />
            </div>
          </IconBox>
        </ContentBox>

        <ContentBox>
          <SkillLabelText>
            <SubtitleText>UI/UX</SubtitleText>
          </SkillLabelText>
          <IconBox>
            <div onClick={getSkill}>
              <StackIcon stack="figma" clickable={true} textShow={true} />
            </div>
            <div onClick={getSkill}>
              <StackIcon stack="XD" clickable={true} textShow={true} />
            </div>
          </IconBox>
        </ContentBox>

        <ContentBox>
          <SkillLabelText>
            <SubtitleText>DevOps</SubtitleText>
          </SkillLabelText>
          <IconBox>
            <div onClick={getSkill}>
              <StackIcon stack="linux" clickable={true} textShow={true} />
            </div>
            <div onClick={getSkill}>
              <StackIcon stack="Git" clickable={true} textShow={true} />
            </div>
          </IconBox>
        </ContentBox>


        <ContentBox>
          <MainButton type="submit">작성 완료</MainButton>
        </ContentBox>
      </FormBox>
    </SkillBox>
  );
};

export default SkillInfo;

const SkillBox = styled.div`
  justify-content: center;
  align-items: center;
  color: #404040;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  width: 90vw;
  width: calc(vat(--vw, 1vw) * 100);

  & .icons {
    width: 32vw;
  }
`;

const TitleBox = styled.div`
  margin-top: auto;
  margin-bottom: 24px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 0px 15px;
  margin-bottom: auto;
`;

const SkillLabelText = styled.div`
  margin-bottom: 1em;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  margin-top: 10px 1em 24px 1em;
`;

const ContentBox = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-block: 0.7em;

  & ${IconBox} {
    width: 100%;
  }

  & .SubTitle {
    text-align:left;
    width: 70vw;
  }

  & .Select div {
    width: 70vw;
  }

  & button .SubTitle{
    width: 100%;
    text-align: center;
  }

  &:nth-child(1),
  &:nth-child(5) {
    margin-bottom: 2em;
  }
`;

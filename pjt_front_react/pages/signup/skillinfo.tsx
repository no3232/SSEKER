import styled from "styled-components";
import Router from "next/router";
import React, { SyntheticEvent, useState, useContext, useEffect } from "react";
import axios from "axios";

import TitleText from "../../common/TitleText";
import SubtitleText from "../../common/SubtitleText";
import MainButton from "../../common/MainButton";
import StackIcon from "../../common/StackIcon";
import Select from "../../component/Select";
import { getKeyCookies } from "../../modules/cookie/keyCookies";

interface skillObjType {
  [key: string]: number;
}

const SkillInfo = () => {
  const route = Router;
  const [signupPosition, setSignupPosition] = useState<number>();
  const [signupSkills, setSignupSkills] = useState<number[]>([]);
  let user = {username: ""}
  useEffect(() => {
    if (getKeyCookies("key") === undefined) {
      route.push('/login')
    } else {
      user = JSON.parse(localStorage.getItem("userinfo") || "{}");
    }
  }, []);

  const positionOption = {
    1: "프론트엔드",
    2: "백엔드",
    3: "DevOps",
    4: "UI&UX",
  };

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
    console.log(user.username)
      await axios({
        method: "PUT",
        url: `https://ssekerapi.site/accounts/${user.username}`,
        // url: "https://ssekerapi.site/accounts/ssafy123@ssafy.com",
        headers: {
          Authorization: `Token ${getKeyCookies("key")}`,
        },
        data: { skill: signupSkills, position: signupPosition },
      }).catch();
      await axios({
        method: "GET",
        url: `https://ssekerapi.site/accounts/${user.username}`,
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
    }
  

  const getPosition = (position: number) => {
    setSignupPosition(position);
  };

  return (
    <SkillBox>
      <TitleBox>
        <TitleText>Skill Info</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToAfter}>
        <SkillLabelText>
          <SubtitleText>선호 포지션</SubtitleText>
        </SkillLabelText>
        <Select
          title='포지션 선택'
          options={positionOption}
          handler={getPosition}
        />
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
          <SubtitleText>DevOps</SubtitleText>
        </SkillLabelText>
        <IconBox>
          <div onClick={getSkill}>
            <StackIcon stack='linux' clickable={true} textShow={true} />
          </div>
          <div onClick={getSkill}>
            <StackIcon stack='Git' clickable={true} textShow={true} />
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
            <StackIcon stack='XD' clickable={true} textShow={true} />
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
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  width: calc(vat(--vw, 1vw) * 100);
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

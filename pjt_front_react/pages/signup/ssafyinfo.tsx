import styled, { css } from "styled-components";
import { SyntheticEvent, useState } from "react";
import Router from "next/router";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import ClassSelect from "../../common/ClassSelect";
import SubtitleText from "../../common/SubtitleText";
import ClassButtonTypes from "../../modules/types/classSelectButton"

const SsafyInfo = () => {
  const route = Router;
  const [trackSelect, setTrackSelect] = useState("");
  const [signupName, setSignupName] = useState("");

  const getSignupName = (name: string) => {
    setSignupName(name);
  }

  const clickTrack = (event: any) => {
    event.preventDefault();
    if (trackSelect === event.target.value) {
      setTrackSelect("");
      return;
    }
    setTrackSelect(event.target.value);
    return;
  };

  const moveToSkillInfo = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log({signupName, trackSelect})
    route.push("/signup/skillinfo");
  };

  return (
    <SsafyInfoBox>
      <TitleBox>
        <TitleText>SSAFY Info</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToSkillInfo}>
        <InputStyle
          name='username'
          type='text'
          placeholder='본명을 적어주세요'
          labelText='이름'
          getInputValue={getSignupName}
        />
        <ClassSelect />
        <TrackLabelText>
          <SubtitleText>수강 트랙</SubtitleText>
        </TrackLabelText>
        <TrackUl>
          <TrackLi>
            <TrackButton
              selected={trackSelect === "비전공"}
              onClick={clickTrack}
              value='비전공'
            >
              비전공
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect === "전공"}
              onClick={clickTrack}
              value='전공'
            >
              전공
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect === "모바일"}
              onClick={clickTrack}
              value='모바일'
            >
              모바일
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect === "임베디드"}
              onClick={clickTrack}
              value='임베디드'
            >
              임베디드
            </TrackButton>
          </TrackLi>
        </TrackUl>
        <MainButton type='submit'>Next</MainButton>
      </FormBox>
    </SsafyInfoBox>
  );
};

export default SsafyInfo;

const SsafyInfoBox = styled.div`
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

const TrackLabelText = styled.div``;

const TrackUl = styled.ul`
  display: flex;
  align-content: space-between;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 24px;
`;
const TrackLi = styled.li`
  display: flex;
`;

const TrackButton = styled.button<ClassButtonTypes>`
  border: solid 1px #0062ff;
  background-color: white;
  border-radius: 5px;
  color: #0062ff;
  font-family: 'NanumSquareNeoRegular';
  padding : 10px;
  margin: 2px;
  &:hover {
    border: solid 1px white;
      background-color: blue;
      color: white;
  }
  ${(props) =>
    props.selected &&
    css`
      border: solid 1px white;
      background-color: #0062ff;
      color: white;
      &:hover {
        border: solid 1px white;
        background-color: #0062ff;
        color: white;
      }
    `}
    
  }
  
`;

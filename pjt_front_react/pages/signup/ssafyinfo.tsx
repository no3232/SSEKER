import styled, { css } from "styled-components";
import { SyntheticEvent, useState } from "react";
import Router from "next/router";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import SubtitleText from "../../common/SubtitleText";
import ClassButtonTypes from "../../modules/types/classSelectButton"
import Select from '../../component/Select';
import axios from 'axios';

const SsafyInfo = () => {
  const route = Router;
  const [trackSelect, setTrackSelect] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupRegion, setSignupRegion] = useState("");
  const [signupClass, setSignupClass] = useState("");

  const regionOption = ['서울', '대전', '부울경', '구미', '광주']
  const classOption = ['1반', '2반', '3반', '4반', '5반','6반']

  const getSignupName = (name: string) => {
    setSignupName(name);
  }

  const getSignupRegion = (region: string) => {
    // console.log(region)
    setSignupRegion(region);
  }

  const getSignupClass = (classoption: string) => {
    // console.log(classoption)
    setSignupClass(classoption);
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
    console.log({signupName, trackSelect, signupRegion, signupClass})
    axios({
      method: 'PUT',
      url: 'https://ssekerapi.site/accounts/ssafy123@ssafy.com',
      headers: {Authorization: "Token 46b92fa86253f5ed1c3fb5a5e94d65d8a68e8293"},
      data: {campus: 2, part: 2, track: 2}
    })
      .then(response => console.log(response))
      .catch()
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
        {/* <ClassSelect /> */}
        <p>반</p>
        <Select title="지역 선택" options={regionOption} handler={getSignupRegion} />
        <p>지역</p>
        <Select title="반 선택" options={classOption} handler={getSignupClass} />
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

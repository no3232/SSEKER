import styled, { css } from "styled-components";
import { SyntheticEvent, useState, useContext, useEffect } from "react";
import Router from "next/router";
import axios from 'axios';

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import SubtitleText from "../../common/SubtitleText";
import ClassButtonTypes from "../../modules/types/classSelectButton"
import Select from '../../component/Select';
import { KeyContext } from '../../modules/context/KeyContext';
import { getKeyCookies } from '../../modules/cookie/keyCookies';

const SsafyInfo = () => {
  const route = Router;
  const [trackSelect, setTrackSelect] = useState<number>();
  const [signupName, setSignupName] = useState("");
  const [signupRegion, setSignupRegion] = useState<number>();
  const [signupClass, setSignupClass] = useState<number>();
  const [classOption, setClassOption] = useState<Object>({1: "반을 선택 해 주세요"})
  let user = {username: ""};

  useEffect(() => {
    if (getKeyCookies("key") === undefined) {
      route.push('/login')
    } else {
      user = JSON.parse(localStorage.getItem("userinfo") || "{}");
    }
  }, []);

  const regionOption = {6: "전국", 5: '서울', 3: '대전', 4: '부울경', 1: '구미', 2: '광주'}

  const getSignupName = (name: string) => {
    setSignupName(name);
  }

  const getSignupRegion = (region: number) => {
    if (region == 1 || region == 2 || region == 4) {
      setClassOption({ 1: "공통 1반", 2: "공통 2반" });
    } else if (region == 3) {
      setClassOption({ 1: "공통 1반", 2: "공통 2반", 3: "공통 3반" });
    } else if (region == 5) {
      setClassOption({
        1: "공통 1반",
        2: "공통 2반",
        3: "공통 3반",
        4: "공통 4반",
        5: "공통 5반",
        6: "공통 6반",
      });
    } else if (region == 6) {
      setClassOption({ 1: "전국" });
    }
    setSignupRegion(region);

  }

  const getSignupClass = (classoption: number) => {

    setSignupClass(classoption);
  }

  const clickTrack = (event: any) => {
    event.preventDefault();

    setTrackSelect(event.target.value);
    return;
  };

  const moveToSkillInfo = async (event: SyntheticEvent) => {
    event.preventDefault();
    user = JSON.parse(localStorage.getItem("userinfo") || "{}");
    await axios({
      method: 'PUT',
      url: `https://ssekerapi.site/accounts/${user.username}`,
      // url: `https://ssekerapi.site/accounts/ssafy123@ssafy.com`,
      headers: {Authorization: `Token ${getKeyCookies("key")}`},
      data: {name: signupName, campus: signupRegion, part: signupClass, track: trackSelect}
    })
    .then(response => console.log(response))
      .catch()
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
    await route.push("/signup/skillinfo");
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
        <p>지역</p>
        <Select title="지역 선택" options={regionOption} handler={getSignupRegion} />
        <p>반</p>
        <Select title="반 선택" options={classOption} handler={getSignupClass} />
        <TrackLabelText>
          <SubtitleText>수강 트랙</SubtitleText>
        </TrackLabelText>
        <TrackUl>
          <TrackLi>
            <TrackButton
              selected={trackSelect == 1}
              onClick={clickTrack}
              value='1'
            >
              파이썬
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect == 3}
              onClick={clickTrack}
              value='3'
            >
              자바(전공)
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect == 2}
              onClick={clickTrack}
              value='2'
            >
              자바(비전공)
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect == 5}
              onClick={clickTrack}
              value='5'
            >
              모바일
            </TrackButton>
          </TrackLi>
          <TrackLi>
            <TrackButton
              selected={trackSelect == 4}
              onClick={clickTrack}
              value='4'
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

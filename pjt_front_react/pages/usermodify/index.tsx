import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ModifyHeader from "../../component/ModifyHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";
import Select from "../../component/Select";
import StackSelect from "../../layout/StackSelect";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold";
import { skillList, skillObject } from "../../modules/types/dummy";
import { language, skill } from "../../modules/StackIconDummy";
import { defaultUserInfo } from "../../modules/types/UserInfoTypes";

const ExampleUser = {
  id: 0,
  username: "",
  campus: {
    id: 0,
    title: "",
    partcount: 0,
  },
  part: 0,
  skill: [],
  github: "",
  blog: "",
  level: {
    id: 0,
    BJlevel: "",
    color: "",
  },
  track: {
    id: 0,
    track: "",
  },
  language: [],
  email: "",
  introduce: "",
};

const Index = () => {
  const [loaded, setLoaded] = useState(false)
  const [allSkills, setAllSkills] = useState<skillObject[]>([]);
  const [userInfo, setUserInfo] = useState<defaultUserInfo>(ExampleUser);

  // 로컬 스토리지에서 유저 데이터 불러옴
  useEffect(() => {
    // axios
    //   .get(`https://ssekerapi.site/accounts/${username.username}`)
    //   .then((res) => {
    //     const { data } = res;
    //     console.log(data)
    //     // setUserInfo(data);
    //   })
    //   .catch((err) => console.log(err));

    // 스킬 오브젝트 불러오기
    axios
      .get("https://ssekerapi.site/objects/skill-language")
      .then((res) => {
        const { data } = res;

        setAllSkills(data);
      })
      .catch((err) => console.log(err));

    setUserInfo(JSON.parse(localStorage.getItem("userinfo") || "{}"));
    setLoaded(true)
  }, []);

  useEffect(() => {
    setSignupRegion(userInfo.campus.id);
    setSignupClass(userInfo.part);
  }, [userInfo]);

  // 랭크 수정 부분
  const [selectRank, setSelectRank] = useState<number>(0);
  const [selectTier, setSelectTier] = useState<number>(0);
  const test = { 0: "I", 1: "II", 2: "III", 3: "IV", 4: "V" };
  const rank = {
    // 1: [<Rank className='bx bxs-crown' color={"#a94e00"} />, "Bronze"],
    // 2: [<Rank className='bx bxs-crown' color={"#365471"} />, "Silver"],
    // 3: [<Rank className='bx bxs-crown' color={"#f4c46a"} />, "Gold"],
    // 4: [<Rank className='bx bxs-crown' color={"#22e1a2"} />, "Platinum"],
    // 5: [<Rank className='bx bxs-crown' color={"#05b6fc"} />, "Diamond"],
    // 6: [<Rank className='bx bxs-crown' color={"#ff0766"} />, "Ruby"],
    // 7: [<Rank className='bx bxs-crown' color={"#222222"} />, "Unrated"],
    1: "Bronze",
    2: "Silver",
    3: "Gold",
    4: "Platinum",
    5: "Diamond",
    6: "Ruby",
    7: "Unrated",
  };
  // const rank = [
  //   ["Bronze", "#a94e00"],
  //   ["Silver", "#365471"],
  //   ["Gold", "#f4c46a"],
  //   ["Platinum", "#22e1a2"],
  //   ["Diamond", "#05b6fc"],
  //   ["Ruby", "#ff0766"],
  //   ["Unrated", "#222222"],
  // ];

  const rankHandler = (rank: number) => {
    setSelectRank(rank);
    // console.log(selectRank)
  };

  const tierHandler = (tier: number) => {
    setSelectTier(tier);
    // console.log(selectTier)
  };

  const regionOption = {
    6: "전국",
    5: "서울",
    3: "대전",
    4: "부울경",
    1: "구미",
    2: "광주",
  };
  const [signupRegion, setSignupRegion] = useState<number>(userInfo.campus.id);
  const [signupClass, setSignupClass] = useState<number>(userInfo.part);
  const [classOption, setClassOption] = useState<Object>({
    1: "반을 선택 해 주세요",
  });

  const getSignupRegion = (region: number) => {
    if (region == 1 || region == 2 || region == 4) {
      setClassOption({ 1: "1반", 2: "2반" });
    } else if (region == 3) {
      setClassOption({ 1: "1반", 2: "2반", 3: "3반" });
    } else if (region == 5) {
      setClassOption({
        1: "1반",
        2: "2반",
        3: "3반",
        4: "4반",
        5: "5반",
        6: "6반",
      });
    } else if (region == 6) {
      setClassOption({ 1: "전국" });
    }
    setSignupClass(1);

    setSignupRegion(region);
    // console.log(classOption);
  };

  const getSignupClass = (classoption: number) => {
    // console.log(classoption)
    setSignupClass(classoption);
  };

  // useEffect(() => {
  //   setSignupClass(1);
  // }, [signupRegion]);

  // const rankoptions: JSX.Element[] = rank.map(
  //   (item: string[], index: number) => {
  //     return (
  //       <RankBox key={index}>
  //         <Rank className='bx bxs-crown' color={item[1]} /> {item[0]}
  //       </RankBox>
  //     );
  //   }
  // );

  //   console.log(rankoptions)

  const mySkills: { [key: number]: skillList[] } = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  };

  let mySkillList: string[] = [];

  for (let i = 0; i < userInfo.skill.length; i++) {
    mySkillList.push(userInfo.skill[i].title);
  }

  for (let i = 0; i < userInfo.language.length; i++) {
    mySkillList.push(userInfo.language[i].title);
  }

  for (const i in allSkills) {
    const SkillsCategory = parseInt(allSkills[i].category);
    const title = allSkills[i].title;

    if (mySkillList.includes(title)) {
      let info = userInfo.skill.filter((item: skillObject) => {
        return item.title === title;
      });

      if (info.length === 0) {
        info = userInfo.language.filter((item: skillObject) => {
          return item.title === title;
        });
      }

      switch (SkillsCategory) {
        case 0:
          mySkills[0].push({ ...info[0], selected: true });
          break;
        case 1:
          mySkills[1].push({ ...info[0], selected: true });
          break;
        case 2:
          mySkills[2].push({ ...info[0], selected: true });
          break;
        case 3:
          mySkills[3].push({ ...info[0], selected: true });
          break;
        case 4:
          mySkills[4].push({ ...info[0], selected: true });
          break;
      }
    } else {
      const info: skillObject = allSkills[i];
      switch (SkillsCategory) {
        case 0:
          mySkills[0].push({ ...info, selected: false });
          break;
        case 1:
          mySkills[1].push({ ...info, selected: false });
          break;
        case 2:
          mySkills[2].push({ ...info, selected: false });
          break;
        case 3:
          mySkills[3].push({ ...info, selected: false });
          break;
        case 4:
          mySkills[4].push({ ...info, selected: false });
          break;
      }
    }
  }

  const submitHandler = () => {
    console.log(signupClass, signupRegion);
  };

  return (
    <Container>
      <GlobalStyle />
      <NanumSquareRegular />
      <NanumSquareBold />
      <button onClick={submitHandler}>123123</button>
      <ModifyHeader name={userInfo.username} />
      <CampusBox>
        <SubtitleText className='title'>매터모스트 아이디</SubtitleText>
        <InputBox placeholder={userInfo.email} />
      </CampusBox>
      <CampusBox>
        <SubtitleText className='title'>소속캠퍼스</SubtitleText>
        <p>지역</p>
        <Select
          title={userInfo.campus.title}
          options={regionOption}
          handler={getSignupRegion}
        />
        <p>반</p>
        <Select
          title={signupClass + "반"}
          options={classOption}
          handler={getSignupClass}
        />
      </CampusBox>
      <DetailBox>
        <SubtitleText className='title'>Skill</SubtitleText>
        <SubBox>
          <SubtitleText>언어</SubtitleText>

          <Icons>
            <StackSelect mySkills={mySkills} type={0} />
          </Icons>
        </SubBox>

        <SubBox>
          <SubtitleText>프론트엔드</SubtitleText>

          <Icons>
            <StackSelect mySkills={mySkills} type={1} />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>백엔드</SubtitleText>

          <Icons>
            <StackSelect mySkills={mySkills} type={2} />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>UI/UX</SubtitleText>

          <Icons>
            <StackSelect mySkills={mySkills} type={3} />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>Devops</SubtitleText>

          <Icons>
            <StackSelect mySkills={mySkills} type={4} />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>참고</SubtitleText>

          <Icons>{/* <StackSelect /> */}</Icons>
        </SubBox>
      </DetailBox>

      <DetailBox className='rank'>
        <SubtitleText>백준 랭크</SubtitleText>

        <Select title='티어 선택' options={rank} handler={rankHandler} />
        {selectRank ? (
          <Select title='랭크 선택' options={test} handler={tierHandler} />
        ) : null}
      </DetailBox>

      <DetailBox className='rank'>
        <SubtitleText>GitHub</SubtitleText>

        <InputBox
          placeholder={
            userInfo.github ? userInfo.github : "깃허브 주소를 입력해주세요"
          }
        />
      </DetailBox>

      <DetailBox className='rank'>
        <SubtitleText>Blog</SubtitleText>

        <InputBox
          placeholder={
            userInfo.blog ? userInfo.blog : "블로그 주소를 입력해주세요"
          }
        />
      </DetailBox>

      <DetailBox>
        <SubtitleText>소개</SubtitleText>
        <IntroBox
          placeholder={
            userInfo.introduce ? userInfo.introduce : "자기 소개를 넣어주세요"
          }
        ></IntroBox>
      </DetailBox>
    </Container>
  );
};

export default Index;

const Rank = styled.i<{
  color: string;
}>`
  color: ${(props) => props.color};
  font-size: 25px;
`;

const RankBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const InputBox = styled.input`
  border: solid 2px var(--primary-color-light);
  padding: 0.5em 1em;
  border-radius: 1em;
`;

const IntroBox = styled.textarea`
  width: 100%;
  height: 50vh;
  margin-top: 1em;
  padding: 1em;
  border-radius: 6px;
  border: solid 2px var(--primary-color-light);
`;

const Icons = styled.div`
  width: 100%;
`;

const SubBox = styled.div`
  padding: 1em 0 0 0;

  & div {
    font-family: "NanumSquareNeoBold";
  }
`;

const DetailBox = styled.div`
  margin: 2em;
`;

const CampusBox = styled.div`
  margin: 2em;
`;

const Container = styled.div`
  font-family: "NanumSquareNeoLight";
  min-height: 100vh;
  padding-bottom: 5em;

  & .rank {
    display: flex;
    align-items: center;
    justify-content: flex-center;
    gap: 1.5em;
  }
`;

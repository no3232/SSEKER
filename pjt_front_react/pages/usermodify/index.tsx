import React, { useState, useEffect, ChangeEvent } from "react";
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
import { defaultUserInfo, sendInfo } from "../../modules/types/UserInfoTypes";
import { useRouter } from "next/router";

const ExampleUser: defaultUserInfo = {
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
    level: "",
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

const Rank: { [key: number]: string } = {
  0: "I",
  1: "II",
  2: "III",
  3: "IV",
  4: "V",
};

const Tier: { [key: number]: string } = {
  1: "Bronze",
  2: "Silver",
  3: "Gold",
  4: "Platinum",
  5: "Diamond",
  6: "Ruby",
  7: "Unrated",
};

const regionOption = {
  6: "전국",
  5: "서울",
  3: "대전",
  4: "부울경",
  1: "구미",
  2: "광주",
};

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [allSkills, setAllSkills] = useState<skillObject[]>([]);
  const [userInfo, setUserInfo] = useState<defaultUserInfo>(ExampleUser);
  const [selectRank, setSelectRank] = useState<number>(0);
  const [selectTier, setSelectTier] = useState<number>(0);
  const [lastList, setLastList] = useState<{ [key: number]: skillList[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [classOption, setClassOption] = useState<Object>({
    1: "반을 선택 해 주세요",
  });

  const [changeInfo, setChangeInfo] = useState<sendInfo>({
    campus: 0,
    part: 0,
    skill: [],
    github: "",
    blog: "",
    level: "",
    track: 0,
    language: [],
    introduce: "",
    email: "0",
    position: 0,
  });

  const path = `/userdetail/${userInfo.username}`;

  // 로컬 스토리지에서 유저 데이터 불러옴
  useEffect(() => {
    axios
      .get("https://ssekerapi.site/objects/skill-language")
      .then((res) => {
        const { data } = res;

        setAllSkills(data);
      })
      .catch((err) => console.log(err));

    setUserInfo(JSON.parse(localStorage.getItem("userinfo") || "{}"));
    setLoaded(true);
  }, []);

  useEffect(() => {
    setChangeInfo((prev) => {
      return {
        ...prev,
        campus: userInfo.campus.id,
        part: userInfo.part,
        skill: [],
        github: userInfo.github,
        blog: userInfo.blog,
        level: userInfo.level.level,
        track: userInfo.track.id,
        language: [],
        introduce: userInfo.introduce,
        email: userInfo.email,
        position: 0,
      };
    }); //바뀐 값이 적용되지 않음
  }, [userInfo]);

  console.log("바깥에서", changeInfo);

  useEffect(() => {
    setSkillList();
  }, [allSkills]);

  useEffect(() => {
    let skillTmp: number[] = [];

    for (let i in lastList) {
      const tmp: number[] = [];

      for (let j of lastList[i]) {
        if (j.selected) {
          tmp.push(j.id);
        }
      }

      if (i === "0") {
        setChangeInfo((prev) => {
          return { ...prev, language: tmp };
        });
      } else {
        skillTmp = skillTmp.concat(tmp);
      }
    }

    setChangeInfo((prev) => {
      return { ...prev, skill: skillTmp };
    });
  }, [lastList]);

  useEffect(() => {
    setChangeInfo((prev) => {
      return { ...prev, level: [Tier[selectTier], Rank[selectRank]].join(" ") };
    });
  }, [selectRank, selectTier]);

  // 랭크 수정 부분
  const rankHandler = (rank: number) => {
    setSelectRank(rank);
  };

  const tierHandler = (tier: number) => {
    setSelectTier(tier);
  };

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

    setChangeInfo((prev) => {
      return { ...prev, campus: Number(region), part: 1 };
    });
  };

  const getSignupClass = (classoption: number) => {
    setChangeInfo((prev) => {
      return { ...prev, part: classoption };
    });
  };

  const setSkillList = () => {
    const mySkills: {
      [key: number]: skillList[];
    } = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
    };

    //가지고 있는 스킬 title만 추출하기
    let mySkillList: string[] = [];
    for (let i = 0; i < userInfo.skill.length; i++) {
      mySkillList.push(userInfo.skill[i].title);
    }

    for (let i = 0; i < userInfo.language.length; i++) {
      mySkillList.push(userInfo.language[i].title);
    }

    const resetSkill: Set<number> = new Set();
    const resetLangs: number[] = [];

    for (const i in allSkills) {
      const SkillsCategory = parseInt(allSkills[i].category);
      const title = allSkills[i].title;

      if (mySkillList.includes(title)) {
        let info = userInfo.skill.filter((item: skillObject) => {
          resetSkill.add(item.id);
          return item.title === title;
        });

        if (info.length === 0) {
          info = userInfo.language.filter((item: skillObject) => {
            resetLangs.push(item.id);
            return item.title === title;
          });
        }

        switch (SkillsCategory) {
          case 0:
            mySkills[0].push({
              ...info[0],
              selected: true,
            });
            break;
          case 1:
            mySkills[1].push({
              ...info[0],
              selected: true,
            });
            break;
          case 2:
            mySkills[2].push({
              ...info[0],
              selected: true,
            });
            break;
          case 3:
            mySkills[3].push({
              ...info[0],
              selected: true,
            });
            break;
          case 4:
            mySkills[4].push({
              ...info[0],
              selected: true,
            });
            break;
        }
      } else {
        const info: skillObject = allSkills[i];
        switch (SkillsCategory) {
          case 0:
            mySkills[0].push({
              ...info,
              selected: false,
            });
            break;
          case 1:
            mySkills[1].push({
              ...info,
              selected: false,
            });
            break;
          case 2:
            mySkills[2].push({
              ...info,
              selected: false,
            });
            break;
          case 3:
            mySkills[3].push({
              ...info,
              selected: false,
            });
            break;
          case 4:
            mySkills[4].push({
              ...info,
              selected: false,
            });
            break;
        }
      }
    }

    setChangeInfo((prev) => {
      return {
        ...prev,
        language: [...resetLangs],
        skill: [...Array.from(resetSkill)],
      };
    });
    setLastList(mySkills);
  };

  const UpdateStackState = (stackId: 0, newState: boolean, type: number) => {
    if (stackId) {
      const tmp = lastList[type].map((s) => {
        if (s.id === stackId) {
          return {
            ...s,
            selected: newState,
          };
        } else {
          return s;
        }
      });

      setLastList({
        ...lastList,
        [type]: tmp,
      });
    }
  };

  const getInputData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    type: number
  ) => {
    const value = e.target.value;

    switch (type) {
      case 0:
        setChangeInfo((prev) => {
          return { ...prev, username: value };
        });
        break;
      case 1:
        setChangeInfo((prev) => {
          return { ...prev, github: value };
        });
        break;
      case 2:
        setChangeInfo((prev) => {
          return { ...prev, blog: value };
        });
        break;
      case 3:
        setChangeInfo((prev) => {
          return { ...prev, introduce: value };
        });
        break;
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <NanumSquareRegular />
      <NanumSquareBold />
      <ModifyHeader
        name={userInfo.username}
        path={path}
        nameHandler={getInputData}
      />
      <CampusBox>
        <SubtitleText className="title"> 소속캠퍼스</SubtitleText>
        <p> 지역</p>
        <Select
          title={userInfo.campus.title}
          options={regionOption}
          handler={getSignupRegion}
        />
        <p> 반</p>
        <Select
          title={changeInfo.part + "반"}
          options={classOption}
          handler={getSignupClass}
        />
      </CampusBox>
      <DetailBox>
        <SubtitleText className="title"> Skill</SubtitleText>
        <SubBox>
          <SubtitleText> 언어</SubtitleText>
          <Icons>
            <StackSelect
              mySkills={lastList[0]}
              type={0}
              UpdateStackState={UpdateStackState}
            />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText> 프론트엔드</SubtitleText>
          <Icons>
            <StackSelect
              mySkills={lastList[1]}
              type={1}
              UpdateStackState={UpdateStackState}
            />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText> 백엔드</SubtitleText>
          <Icons>
            <StackSelect
              mySkills={lastList[2]}
              type={2}
              UpdateStackState={UpdateStackState}
            />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText> UI / UX</SubtitleText>
          <Icons>
            <StackSelect
              mySkills={lastList[3]}
              type={3}
              UpdateStackState={UpdateStackState}
            />
          </Icons>
        </SubBox>
        <SubBox>
          <SubtitleText> Devops</SubtitleText>
          <Icons>
            <StackSelect
              mySkills={lastList[4]}
              type={4}
              UpdateStackState={UpdateStackState}
            />
          </Icons>
        </SubBox>
      </DetailBox>
      <DetailBox className="rank">
        <SubtitleText> 백준 랭크</SubtitleText>
        <Select title="티어 선택" options={Tier} handler={tierHandler} />
        {selectTier ? (
          <Select title="랭크 선택" options={Rank} handler={rankHandler} />
        ) : null}
      </DetailBox>
      <DetailBox className="rank">
        <SubtitleText> GitHub</SubtitleText>
        <InputBox
          placeholder={
            userInfo.github ? userInfo.github : "깃허브 주소를 입력해주세요"
          }
          onChange={(e) => getInputData(e, 1)}
        />
      </DetailBox>
      <DetailBox className="rank">
        <SubtitleText> Blog</SubtitleText>
        <InputBox
          placeholder={
            userInfo.blog ? userInfo.blog : "블로그 주소를 입력해주세요"
          }
          onChange={(e) => getInputData(e, 2)}
        />
      </DetailBox>
      <DetailBox>
        <SubtitleText> 소개</SubtitleText>
        <IntroBox
          placeholder={
            userInfo.introduce ? userInfo.introduce : "자기 소개를 넣어주세요"
          }
          onChange={(e) => getInputData(e, 3)}
        ></IntroBox>
      </DetailBox>
    </Container>
  );
};

export default Index;

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

import React, {
  useState,
  useEffect,
  ChangeEvent,
  MouseEventHandler,
} from "react";
import styled, { css } from "styled-components";
import axios from "axios";

import ModifyHeader from "../../component/ModifyHeader";
import SubtitleText from "../../common/SubtitleText";
import Select from "../../component/Select";
import StackSelect from "../../layout/StackSelect";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold";
import {
  skillList,
  skillObject,
  teamData,
  TeamMember,
} from "../../modules/types/dummy";
import { defaultUserInfo } from "../../modules/types/UserInfoTypes";
import { sendInfo } from "../../modules/types/TeamInfoTypes";
import { useRouter } from "next/router";
import { getKeyCookies } from "../../modules/cookie/keyCookies";
import {
  ExampleUser,
  regionOption,
  ExampleTeam,
  ExampleData,
} from "../../modules/list/dummy";
import { TeamInfo } from "../../modules/types/TeamInfoTypes";
import UserSearchBar from "../../component/userSearchBar";

const Index = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [allSkills, setAllSkills] = useState<skillObject[]>([]);
  const [userInfo, setUserInfo] = useState<defaultUserInfo>(ExampleUser);
  const [teamInfo, setTeamInfo] = useState<TeamInfo>(ExampleTeam);

  const [lastList, setLastList] = useState<{ [key: number]: skillList[] }>({
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [classOption, setClassOption] = useState<Object>({
    1: "반을 선택 해 주세요",
  });

  const [changeInfo, setChangeInfo] = useState<sendInfo>(ExampleData);

  const [participantList, setParticipantList] =
    useState<TeamMember[]>(Dummyparticipant);
  const [partObj, setPartObj] = useState<{ [key: number]: TeamMember[] }>({
    1: [],
    2: [],
    3: [],
    4: [],
  });

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
    const teamID = router.query.id;

    if (teamID !== undefined) {
      axios
        .get(`https://ssekerapi.site/projects/project/${teamID}`)
        .then((res) => {
          const { data } = res;
          const {
            campus,
            content,
            fixed_count,
            founder,
            id,
            part,
            participant,
            participant_count,
            skill,
            status,
            title,
          } = data;

          setTeamInfo(() => {
            return {
              campus: { ...campus },
              content: content,
              fixed_count: fixed_count,
              founder: { ...founder },
              id: id,
              part: part,
              participant: [...participant],
              participant_count: participant_count,
              skill: [...skill],
              status: { ...status },
              title: title,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    setChangeInfo((prev) => {
      return {
        ...prev,
        campus: teamInfo.campus.id,
        status: teamInfo.status.id,
        title: teamInfo.title,
        content: teamInfo.content,
        fixed_count: teamInfo.fixed_count,
      };
    });

    setSkillList();
  }, [teamInfo]);

  useEffect(() => {
    let skillTmp: number[] = [];

    for (let i in lastList) {
      const tmp: number[] = [];

      for (let j of lastList[i]) {
        if (j.selected) {
          tmp.push(j.id);
        }
      }

      skillTmp = skillTmp.concat(tmp);
    }

    setChangeInfo((prev) => {
      return { ...prev, skill: [...skillTmp] };
    });
  }, [lastList]);

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
    const teamSkills: {
      [key: number]: skillList[];
    } = {
      1: [],
      2: [],
      3: [],
      4: [],
    };

    //가지고 있는 스킬 title만 추출하기
    let teamSkillList: string[] = [];

    for (let i = 0; i < teamInfo.skill.length; i++) {
      teamSkillList.push(teamInfo.skill[i].title);
    }

    const resetSkill: Set<number> = new Set();

    for (const i in allSkills) {
      const SkillsCategory = parseInt(allSkills[i].category);
      const title = allSkills[i].title;

      if (teamSkillList.includes(title)) {
        let info = teamInfo.skill.filter((item: skillObject) => {
          resetSkill.add(item.id);
          return item.title === title;
        });

        switch (SkillsCategory) {
          case 1:
            teamSkills[1].push({
              ...info[0],
              selected: true,
            });
            break;
          case 2:
            teamSkills[2].push({
              ...info[0],
              selected: true,
            });
            break;
          case 3:
            teamSkills[3].push({
              ...info[0],
              selected: true,
            });
            break;
          case 4:
            teamSkills[4].push({
              ...info[0],
              selected: true,
            });
            break;
        }
      } else {
        const info: skillObject = allSkills[i];
        switch (SkillsCategory) {
          case 1:
            teamSkills[1].push({
              ...info,
              selected: false,
            });
            break;
          case 2:
            teamSkills[2].push({
              ...info,
              selected: false,
            });
            break;
          case 3:
            teamSkills[3].push({
              ...info,
              selected: false,
            });
            break;
          case 4:
            teamSkills[4].push({
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
        skill: [...Array.from(resetSkill)],
      };
    });

    setLastList(teamSkills);
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
          return { ...prev, title: value };
        });
      case 1:
        setChangeInfo((prev) => {
          return { ...prev, content: value };
        });
    }
  };

  const sendData: MouseEventHandler<HTMLElement> = async () => {
    const putMethod = await axios({
      method: "PUT",
      url: `https://ssekerapi.site/projects/project/${teamInfo.id}`,
      headers: {
        Authorization: `Token ${getKeyCookies("key")}`,
      },
      data: { ...changeInfo },
    })
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        console.log(err);
        alert("잘못된 형식입니다.");
      });
    const teamPList = participantList.map((person)=>{
      return `manager:${person.manager.id},skillcategory:${person.skillcategory.id}`
    })
    const sendTeamList = Object.assign({}, teamPList)
    const teamMethod = await axios({
      method: "POST",
      url: `https://ssekerapi.site/projects/${teamInfo.id}/participant`,
      headers: {
        Authorization: `Token ${getKeyCookies("key")}`,
      },
      data: sendTeamList,
    })
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        console.log(err);
        alert("잘못된 형식입니다.");
      });

    if (putMethod === 200 && teamMethod === 200) {
      await axios({
        method: "GET",
        url: `https://ssekerapi.site/accounts/${userInfo.id}`,
      })
        .then((res) => {
          const { data } = res;
          localStorage.setItem("userinfo", JSON.stringify(data));

          router.push(`/teamdetail/${teamInfo.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // 팀 리스트 추가 함수
  useEffect(() => {
    setPartObj((prev) => {
      const newObj: { [key: number]: TeamMember[] } = {
        1: [],
        2: [],
        3: [],
        4: [],
      };
      participantList.map((person) => {
        if (person.skillcategory.id === 1) {
          newObj[1].push(person);
        } else if (person.skillcategory.id === 2) {
          newObj[2].push(person);
        } else if (person.skillcategory.id === 3) {
          newObj[3].push(person);
        } else if (person.skillcategory.id === 4) {
          newObj[4].push(person);
        }
      });
      return newObj;
    });
  }, [participantList]);

  const selectHandler = (props: TeamMember) => {
    let overlap = false;

    participantList.map((person) => {
      if (person.manager.id === props.manager.id) {
        overlap = true;
      }
    });
    if (!overlap) {
      setParticipantList((prev) => {
        return [...prev, props];
      });
    } else {
      alert("이미 추가된 유저입니다.");
    }
  };
  const removeHandler = (props: TeamMember) => {
    console.log(props);
    setParticipantList((prev) => {
      return prev.filter((person) => {
        if (person.manager.id === props.manager.id) {
          return false;
        }
        return true;
      });
    });
  };
  return (
    <Container>
      <GlobalStyle />
      <NanumSquareRegular />
      <NanumSquareBold />

      <ModifyHeader
        name={teamInfo.title}
        nameHandler={getInputData}
        sendData={sendData}
      />
      <CampusBox>
        <SubtitleText className='title'> 소속캠퍼스</SubtitleText>
        <p>현재 속한 반을 기준으로 작성해주세요</p>
        <p> 지역</p>

        <Select
          title={teamInfo.campus.title}
          options={regionOption}
          handler={getSignupRegion}
        />
        <p> 반</p>

        <Select
          title={teamInfo.part + "반"}
          options={classOption}
          handler={getSignupClass}
        />
      </CampusBox>

      <DetailBox>
        <SubtitleText className='title'> Skill</SubtitleText>
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
      <DetailBox>
        <SubtitleText> 프론트엔드</SubtitleText>
        <UserSearchBar
          skillId={1}
          userList={partObj[1]}
          selectHandler={selectHandler}
          removeHandler={removeHandler}
        />
        <SubtitleText> 백엔드</SubtitleText>
        <UserSearchBar
          skillId={2}
          userList={partObj[2]}
          selectHandler={selectHandler}
          removeHandler={removeHandler}
        />
        <SubtitleText> DevOps</SubtitleText>
        <UserSearchBar
          skillId={3}
          userList={partObj[3]}
          selectHandler={selectHandler}
          removeHandler={removeHandler}
        />
        <SubtitleText> UI/UX</SubtitleText>
        <UserSearchBar
          skillId={4}
          userList={partObj[4]}
          selectHandler={selectHandler}
          removeHandler={removeHandler}
        />
      </DetailBox>
      <DetailBox>
        <SubtitleText> 소개</SubtitleText>
        <IntroBox
          placeholder={
            teamInfo.content ? teamInfo.content : "자기 소개를 넣어주세요"
          }
          onChange={(e) => getInputData(e, 2)}
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

const Dummyparticipant: Array<TeamMember> = [
  {
    id: 2,
    manager: {
      id: 2,
      username: "test4",
    },
    skillcategory: {
      id: 4,
      category: "Devops",
    },
  },
  {
    id: 3,
    manager: {
      id: 1,
      username: "test5",
    },
    skillcategory: {
      id: 1,
      category: "Frontend",
    },
  },
];

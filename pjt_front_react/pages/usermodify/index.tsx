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
import { defaultUserInfo } from "../../modules/types/UserInfoTypes";

const Index = () => {
    const [allSkills, setAllSkills] = useState<skillObject[]>([])
    const [userInfo, setUserInfo] = useState<defaultUserInfo>({
        id: 0,
        username: "",
        campus: {
            id: 0,
            title: "",
            partcount: 0
        },
        part: 0,
        skill: [],
        github: "",
        blog: "",
        level: {
            id: 0,
            BJlevel: "",
            color: ""
        },
        track: {
            id: 0,
            track: ""
        },
        language: [],
        email: "",
        introduce: ""
    })
    const [lastList, setLastList] = useState<{[key:number]:skillList[]}>({
        0:[],
        1:[],
        2:[],
        3:[],
        4:[]
    })
    const [languages, setLanguages] = useState<number[]>([])
    const [skills, setSkills] = useState<number[]>([])

    useEffect(() => {
        axios
            .get('https://ssekerapi.site/accounts/jay')
            .then((res) => {
                const {data} = res;

                setUserInfo(data);
            })
            .catch((err)=>console.log(err))

        axios.get('https://ssekerapi.site/objects/skill-language')
            .then((res) => {
                const {data} = res;

                setAllSkills(data)
            })
            .catch((err)=>console.log(err))
    }, [])

    useEffect(()=>{
        setSkillList()
    }, [allSkills])
    
    useEffect(()=> {
        let skillTmp:number[] = []

        for (let i in lastList) {
            const tmp = []

            for (let j of lastList[i]) {
                if(j.selected) {
                    tmp.push(j.id)
                }
            }

            if(i === "0") {
                setLanguages(tmp)
            } else {
                skillTmp = skillTmp.concat(tmp)
            }
        }

        setSkills(skillTmp)
    }, [lastList])

  // const [selectRank, setSelectRank] = useState<Boolean>(false);
  const test = ["I", "II", "III", "IV", "V"];
  const rank = [
    ["Unrated", "#222222"],
    ["Bronze", "#a94e00"],
    ["Silver", "#365471"],
    ["Gold", "#f4c46a"],
    ["Platinum", "#22e1a2"],
    ["Diamond", "#05b6fc"],
    ["Ruby", "#ff0766"],
  ];
  const regionOption = {
    6: "전국",
    5: "서울",
    3: "대전",
    4: "부울경",
    1: "구미",
    2: "광주",
  };
  const [signupRegion, setSignupRegion] = useState<number>();
  const [signupClass, setSignupClass] = useState<number>();
  const [classOption, setClassOption] = useState<Object>({
    1: "반을 선택 해 주세요",
  });

  const getSignupRegion = (region: number) => {
    if (region == 1 || region == 2 || region == 4) {
      console.log(21);
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
    setSignupRegion(region);
    console.log(classOption);
  };

  const getSignupClass = (classoption: number) => {
    // console.log(classoption)
    setSignupClass(classoption);
  };

  const rankoptions: JSX.Element[] = rank.map(
    (item: string[], index: number) => {
      return (
        <RankBox key={index}>
          <Rank className='bx bxs-crown' color={item[1]} /> {item[0]}
        </RankBox>
      )
    })

    // const BackjoonHandler = () => {
    //     setSelectRank(true);
    // }

    const setSkillList = () => {
        const mySkills:{[key:number]:skillList[]} = {
            0:[],
            1:[],
            2:[],
            3:[],
            4:[]
        }

        //가지고 있는 스킬 title만 추출하기
        let mySkillList:string[] = [];
        for (let i = 0; i < userInfo.skill.length; i++) {
            mySkillList.push(userInfo.skill[i].title)
        }
    
        for (let i = 0; i < userInfo.language.length; i++) {
            mySkillList.push(userInfo.language[i].title)
        }
    
        const resetSkill:Set<number> = new Set()
        const resetLangs:number[] = []

        for (const i in allSkills) {
    
            const SkillsCategory = parseInt(allSkills[i].category)
            const title = allSkills[i].title
            
            if (mySkillList.includes(title)) {
                let info = userInfo.skill.filter((item:skillObject)=> {
                    resetSkill.add(item.id)
                    return item.title === title
                })
    
                if (info.length === 0) {
                    info = userInfo.language.filter((item:skillObject)=> {
                        resetLangs.push(item.id)
                        return item.title === title
                    })
                }
    
                switch (SkillsCategory) {
                    case 0:
                        mySkills[0].push({...info[0], selected:true})
                        break;
                    case 1:
                        mySkills[1].push({...info[0], selected:true})
                        break;
                    case 2:
                        mySkills[2].push({...info[0], selected:true})
                        break;
                    case 3:
                        mySkills[3].push({...info[0], selected:true})
                        break;
                    case 4:
                        mySkills[4].push({...info[0], selected:true})
                        break;
                }
            } else {
                const info:skillObject = allSkills[i]
                switch (SkillsCategory) {
                    case 0:
                        mySkills[0].push({...info, selected:false})
                        break;
                    case 1:
                        mySkills[1].push({...info, selected:false})
                        break;
                    case 2:
                        mySkills[2].push({...info, selected:false})
                        break;
                    case 3:
                        mySkills[3].push({...info, selected:false})
                        break;
                    case 4:
                        mySkills[4].push({...info, selected:false})
                        break;
                }
            }

        }
    
        setLanguages(resetLangs)
        setSkills(Array.from(resetSkill))

        setLastList(mySkills)
    }

    console.log("-----")
    console.log(languages)
    console.log(skills)

    const UpdateStackState = (stackId:number, newState:boolean, type: number) => {
        if (stackId) {
            const tmp = lastList[type].map(s => {
                if (s.id === stackId) {
                    return {
                        ...s,
                        selected: newState
                    }
                } else 
                    return s;
                }
            )

            setLastList({...lastList, [type]:tmp})
        }
    }

  return (
    <Container>
      <GlobalStyle />
      <NanumSquareRegular />
      <NanumSquareBold />
      <ModifyHeader name={userInfo.username} />
      <CampusBox>
        <SubtitleText className='title'>매터모스트 아이디</SubtitleText>
        <InputBox placeholder={userInfo.email} />
      </CampusBox>
      <CampusBox>
        <SubtitleText className='title'>소속캠퍼스</SubtitleText>
        <p>반</p>
        <Select
          title='지역 선택'
          options={regionOption}
          handler={getSignupRegion}
        />
        <p>지역</p>
        <Select
          title='반 선택'
          options={classOption}
          handler={getSignupClass}
        />
      </CampusBox>
      <DetailBox>
        <SubtitleText className='title'>Skill</SubtitleText>
        <SubBox>
          <SubtitleText>언어</SubtitleText>

          <Icons>
              <StackSelect mySkills={lastList[0]} type={0} UpdateStackState={UpdateStackState} />
          </Icons>
        </SubBox>

        <SubBox>
          <SubtitleText>프론트엔드</SubtitleText>

                <Icons>
                    <StackSelect mySkills={lastList[1]} type={1} UpdateStackState={UpdateStackState} />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    <StackSelect mySkills={lastList[2]} type={2} UpdateStackState={UpdateStackState} />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    <StackSelect mySkills={lastList[3]} type={3} UpdateStackState={UpdateStackState}/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    <StackSelect mySkills={lastList[4]} type={4} UpdateStackState={UpdateStackState} />
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>백준 랭크</SubtitleText>

            {/* <Select title="티어 선택" options={rankoptions} handler={BackjoonHandler}/>
            {
                selectRank
                    ? <Select title="랭크 선택" options={test} handler={null}/>
                    : null
            } */}
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

export default Index

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

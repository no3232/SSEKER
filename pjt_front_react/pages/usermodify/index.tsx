import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import ModifyHeader from "../../component/ModifyHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";
import ClassSelect from "../../common/ClassSelect";
import Select from "../../component/Select";
import StackSelect from "../../layout/StackSelect";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold"
import { skillList, skillObject } from "../../modules/types/dummy";
import { skill } from "../../modules/StackIconDummy";
import { userInfo } from "../../modules/types/UserInfoTypes";

const index = () => {
    // const [userInfo, setUserInfo] = useState<userInfo>({
    //     id: 0,
    //     username: "",
    //     campus: {
    //         id: 0,
    //         title: "",
    //         partcount: 0
    //     },
    //     part: 0,
    //     skill: [],
    //     github: "",
    //     blog: "",
    //     level: {
    //         id: 0,
    //         level: "",
    //         color: ""
    //     },
    //     track: {
    //         id: 0,
    //         track: ""
    //     },
    //     langauge: [],
    //     email: "",
    //     introduce: ""
    // })

    // // const [selectRank, setSelectRank] = useState<Boolean>(false);
    // const test = ["I", "II", "III", "IV", "V"];
    // const rank = [
    //     [
    //         "Unrated", "#222222"
    //     ],
    //     [
    //         "Bronze", "#a94e00"
    //     ],
    //     [
    //         "Silver", "#365471"
    //     ],
    //     [
    //         "Gold", "#f4c46a"
    //     ],
    //     [
    //         "Platinum", "#22e1a2"
    //     ],
    //     [
    //         "Diamond", "#05b6fc"
    //     ],
    //     [
    //         "Ruby", "#ff0766"
    //     ]
    // ]

    // const rankoptions: JSX.Element[] = rank.map((item : string[], index:number) => {
    //     return <RankBox key={index}>
    //         <Rank className="bx bxs-crown" color={item[1]} /> {item[0]}
    //     </RankBox>
    // })

    // // const BackjoonHandler = () => {
    // //     setSelectRank(true);
    // // }

    // const mySkills:{[key:number]:skillList[]} = {
    //     1:[],
    //     2:[],
    //     3:[],
    //     4:[]
    // }

    // let mySkillList:string[] = []

    // for (let i = 0; i < userInfo.skill.length; i++) {
    //     mySkillList.push(userInfo.skill[i].title)
    // }

    // for (const i in skill) {
    //     const info = userInfo.skill.filter((item:skillObject)=> {
    //         return item.title === i
    //     })

    //     if (mySkillList.includes(i)) {
    //         switch (skill[i].category) {
    //             case 1:
    //                 mySkills[1].push({...info[0], selected:true})
    //                 break;
    //             case 2:
    //                 mySkills[2].push({...info[0], selected:true})
    //                 break;
    //             case 3:
    //                 mySkills[3].push({...info[0], selected:true})
    //                 break;
    //             case 4:
    //                 mySkills[4].push({...info[0], selected:true})
    //                 break;
    //         }
    //     } else {
    //         switch (skill[i].category) {
    //             case 1:
    //                 mySkills[1].push({...info[0], selected:false})
    //                 break;
    //             case 2:
    //                 mySkills[2].push({...info[0], selected:false})
    //                 break;
    //             case 3:
    //                 mySkills[3].push({...info[0], selected:false})
    //                 break;
    //             case 4:
    //                 mySkills[4].push({...info[0], selected:false})
    //                 break;
    //         }
    //     }
    // }

    // useEffect(() => {
    //     axios
    //         .get('https://ssekerapi.site/accounts/jay')
    //         .then((res) => {
    //             const {data} = res;

    //             setUserInfo(data);
    //         })
    // }, [])

    // console.log(mySkills)

    // return <Container>
    //     <GlobalStyle/>
    //     <NanumSquareRegular/>
    //     <NanumSquareBold/>
    //     <ModifyHeader name={userInfo.username}/>
    //     <CampusBox>
    //         <SubtitleText className="title">매터모스트 아이디</SubtitleText>
    //         <InputBox placeholder={userInfo.email} />
    //     </CampusBox>
    //     <CampusBox>
    //         <SubtitleText className="title">소속캠퍼스</SubtitleText>
    //         <ClassSelect/>
    //     </CampusBox>
    //     <DetailBox>
    //         <SubtitleText className="title">Skill</SubtitleText>
    //         <SubBox>
    //             <SubtitleText>언어</SubtitleText>

    //             <Icons>
    //                 {/* <StackSelect list={"langauge"} /> */}
    //             </Icons>
    //         </SubBox>

    //         <SubBox>
    //             <SubtitleText>프론트엔드</SubtitleText>

    //             <Icons>
    //                 <StackSelect list={"skills"} mySkills={mySkills} type={1} />
    //             </Icons>
    //         </SubBox>
    //         <SubBox>
    //             <SubtitleText>백엔드</SubtitleText>

    //             <Icons>
    //                 {/* <StackSelect list={"skills"} mySkills={mySkills} type={2} /> */}
    //             </Icons>
    //         </SubBox>
    //         <SubBox>
    //             <SubtitleText>UI/UX</SubtitleText>

    //             <Icons>
    //                 {/* <StackSelect /> */}
    //             </Icons>
    //         </SubBox>
    //         <SubBox>
    //             <SubtitleText>Devops</SubtitleText>

    //             <Icons>
    //                 {/* <StackSelect /> */}
    //             </Icons>
    //         </SubBox>
    //         <SubBox>
    //             <SubtitleText>참고</SubtitleText>

    //             <Icons>
    //                 {/* <StackSelect /> */}
    //             </Icons>
    //         </SubBox>
    //     </DetailBox>

    //     <DetailBox className="rank">
    //         <SubtitleText>백준 랭크</SubtitleText>

    //         {/* <Select title="티어 선택" options={rankoptions} handler={BackjoonHandler}/>
    //         {
    //             selectRank
    //                 ? <Select title="랭크 선택" options={test} handler={null}/>
    //                 : null
    //         } */}
    //     </DetailBox>

    //     <DetailBox className="rank">
    //         <SubtitleText>GitHub</SubtitleText>

    //         <InputBox placeholder={userInfo.github?userInfo.github:"깃허브 주소를 입력해주세요"} />
    //     </DetailBox>

    //     <DetailBox className="rank">
    //         <SubtitleText>Blog</SubtitleText>

    //         <InputBox placeholder={userInfo.blog?userInfo.blog:"블로그 주소를 입력해주세요"} />
    //     </DetailBox>

    //     <DetailBox>
    //         <SubtitleText>소개</SubtitleText>
    //         <IntroBox placeholder={userInfo.introduce?userInfo.introduce:'자기 소개를 넣어주세요'}></IntroBox>
    //     </DetailBox>
    // </Container>
}

export default index;

const Rank = styled.i < {
    color: string
} > `
    color: ${props => props.color};
    font-size: 25px;
`

const RankBox = styled.div `
    display: flex;
    align-items: center;
    gap: 1em;
`

const InputBox = styled.input `
    border: solid 2px var(--primary-color-light);
    padding: 0.5em 1em;
    border-radius: 1em;
`

const IntroBox = styled.textarea `
    width: 100%;
    height: 50vh;
    margin-top: 1em;
    padding: 1em;
    border-radius: 6px;
    border: solid 2px var(--primary-color-light);
`

const Icons = styled.div `
    width: 100%;
`

const SubBox = styled.div `
    padding: 1em 0 0 0;
    
    & div {
        font-family: 'NanumSquareNeoBold';
    }
`

const DetailBox = styled.div `
    margin: 2em;
`

const CampusBox = styled.div `
    margin: 2em;
`;

const Container = styled.div `
    font-family: 'NanumSquareNeoLight';
    min-height: 100vh;
    padding-bottom: 5em;

    & .rank {
        display: flex;
        align-items: center;
        justify-content: flex-center;
        gap: 1.5em;
    }
`
import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";

import DetailHeader from "../../component/DetailHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold"
import axios from "axios";
import {skillObject} from "../../modules/types/dummy";
import {UserInfoContext} from "../../modules/context/UserInfoContext";
import {useRouter} from 'next/router';

interface StackElement {
    "id" : number,
    "title" : string,
    "category" : number
}

const defaultUserState = {
    id: 0,
    username: "",
    name: "Ananymous",
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
};

const Index = () => {
    const router = useRouter();
    console.log(router.query)

    const [userInfo, setUserInfo] = useState(defaultUserState)
    useEffect(() => {
        // if (localStorage.getItem("userinfo")) {
        // setUserInfo(JSON.parse(localStorage.getItem("userinfo") || '{}')) }
        axios
            .get(`https://ssekerapi.site/accounts/${router.query.userid}`)
            .then((res) => {
                const {data} = res;
                console.log(data)
                setUserInfo(data);
            })
            .catch((err) => console.log(err));
    }, [router.query.userid])

    const skills = (category : string) => {
        if (userInfo.skill.length === 0) {
            return "설정된 스킬이 없습니다"
        } else {
            const lst = userInfo
                .skill
                .filter((item : skillObject) => {
                    return item.category == category
                })

            if (lst.length === 0) {
                return "설정된 스킬이 없습니다"
            } else {
                return lst.map(
                    (item : StackElement | any) => <StackIcon stack={item.title} key={item.id} clickable={false} textShow={true}/>
                )
            }
        }
    }

    const language = (userInfo.language.length === 0)
        ? "설정한 언어가 없습니다"
        : userInfo
            .language
            .map((item : StackElement | any) => {
                return <StackIcon stack={item.title} key={item.id} clickable={false} textShow={true}/>
            })

    return <Container>
        <GlobalStyle/>
        <NanumSquareRegular/>
        <NanumSquareBold/>
        <DetailHeader name={userInfo.name} mattermost={`${userInfo.email}`}/>
        <CampusBox>
            <SubtitleText className="title">소속캠퍼스</SubtitleText>
            <Campus>{userInfo.campus.title}</Campus>
            <Campus>{`${userInfo.campus.partcount}반`}</Campus>
        </CampusBox>
        <DetailBox>
            <SubtitleText className="title">Skill</SubtitleText>

            <SubBox>
                <SubtitleText>언어</SubtitleText>

                <Icons>
                    {language}
                </Icons>
            </SubBox>

            <SubBox>
                <SubtitleText>프론트엔드</SubtitleText>

                <Icons>
                    {skills("1")}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    {skills("2")}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    {skills("3")}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    {skills("4")}
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>백준 랭크</SubtitleText>

            {
                (userInfo.level === null || userInfo.level.id === 0)
                    ? <RankBox>
                            <Rank className="bx bxs-crown" color={"#000"}/>
                            <RankName>Unrated</RankName>
                        </RankBox>
                    : <RankBox>
                            <Rank className="bx bxs-crown" color={userInfo.level.color}/> {/* <RankName>{userInfo.level.level}</RankName> */}
                        </RankBox>
            }
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>GitHub</SubtitleText>

            <RankBox>
                <a href={userInfo.github}>
                    <StackIcon stack={"GitHub"} clickable={false} textShow={true}/>
                </a>
            </RankBox>
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>Blog</SubtitleText>

            <RankBox>
                <a href={userInfo.blog}>
                    <StackIcon stack={"Blog"} clickable={false} textShow={true}/>
                </a>
            </RankBox>
        </DetailBox>

        <DetailBox>
            <SubtitleText>소개</SubtitleText>
            <IntroBox>{
                    (userInfo.introduce === null)
                        ? "자기소개가 없습니다"
                        : userInfo.introduce
                }</IntroBox>
        </DetailBox>
    </Container>
}

export default Index;

const RankName = styled.span ``

const Rank = styled.i `
    color: ${props => props.color};
    font-size: 25px;
`

const RankBox = styled.span `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
`

const IntroBox = styled.div `
    margin-top: 1em;
    padding: 1em;
    border-radius: 6px;
    border: solid 2px var(--primary-color-light);
`

const Icons = styled.div `
    width: 100%;
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
`

const SubBox = styled.div `
    padding: 1em 0 0 0;
    
    & div {
        font-family: 'NanumSquareNeoBold';
    }
`

const Campus = styled.div `
    padding: 0.2em 1em;
    border-radius: 6px;
    border: solid 2px var(--primary-color-light);
    color: var(--primary-color-light);
    font-family: 'NanumSquareNeoBold';
`

const DetailBox = styled.div `
    margin: 2em;
`

const CampusBox = styled.div `
    display: flex;
    align-items: center;
    gap: 1.5em;
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
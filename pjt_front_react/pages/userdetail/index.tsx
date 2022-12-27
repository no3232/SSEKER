import React from "react";
import styled from "styled-components";

import DetailHeader from "../../component/DetailHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold"

interface StackElement {
    "id" : number,
    "title" : string,
    "category" : number
}

const test: StackElement[] = [
    {
        "id": 1,
        "title": "vuejs",
        "category": 1
    }, {
        "id": 2,
        "title": "react",
        "category": 1
    }, {
        "id": 3,
        "title": "reactnative",
        "category": 1
    }, {
        "id": 4,
        "title": "rust",
        "category": 1
    }, {
        "id": 5,
        "title": "spring",
        "category": 1
    }
]

const index = () => {
    const skills: JSX.Element[] = test.map(
        (item : StackElement) => <StackIcon stack={item.title} key={item.id} clickable={false}/>
    )

    return <Container>
        <GlobalStyle/>
        <NanumSquareRegular/>
        <NanumSquareBold/>
        <DetailHeader name={"user"} mattermost={"@idididid"}/>
        <CampusBox>
            <SubtitleText className="title">소속캠퍼스</SubtitleText>
            <Campus>구미</Campus>
            <Campus>2반</Campus>
        </CampusBox>
        <DetailBox>
            <SubtitleText className="title">Skill</SubtitleText>
            
            <SubBox>
                <SubtitleText>프론트엔드</SubtitleText>

                <Icons>
                    {skills}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    {skills}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    {skills}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    {skills}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>참고</SubtitleText>

                <Icons>
                    {skills}
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>백준 랭크</SubtitleText>

            <RankBox>
                <Rank className="bx bxs-crown" color="#ffcc00" />
                <RankName>골드</RankName>
            </RankBox>
        </DetailBox>

        <DetailBox>
            <SubtitleText>소개</SubtitleText>
            <IntroBox>타입스크립트...너무 내 인생을 힘들게 한다 뭐 이런 고난과 시련이 다 있냐 개씹스레기새끼...개쓰레기 언어...</IntroBox>
        </DetailBox>
    </Container>
}

export default index;

const RankName = styled.span``

const Rank = styled.i`
    color: ${props => props.color};
    font-size: 25px;
`

const RankBox = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
`

const IntroBox = styled.div`
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
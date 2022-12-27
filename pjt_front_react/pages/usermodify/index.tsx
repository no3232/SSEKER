import React from "react";
import styled from "styled-components";

import ModifyHeader from "../../component/ModifyHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold"
import ClassSelect from "../../common/ClassSelect";
import Select from "../../component/Select";

interface StackElement {
    "id" : number,
    "title" : string,
    "category" : number
}

const test: StackElement[] = [
    {
        "id": 1,
        "title": "vue",
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
        (item : StackElement) => <StackIcon stack={item.title} key={item.id}/>
    )

    return <Container>
        <GlobalStyle/>
        <NanumSquareRegular/>
        <NanumSquareBold/>
        <ModifyHeader />
        <CampusBox>
            <SubtitleText className="title">매터모스트 아이디</SubtitleText>
            <InputBox placeholder="@sseeker"/>
        </CampusBox>
        <CampusBox>
            <SubtitleText className="title">소속캠퍼스</SubtitleText>
            <ClassSelect />
        </CampusBox>
        <DetailBox>
            <SubtitleText className="title">Skill</SubtitleText>
            <SubBox>
                <SubtitleText>프론트엔드</SubtitleText>

                <Icons>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    {/* <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/> */}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    {/* <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/> */}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    {/* <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="typescript"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/> */}
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>참고</SubtitleText>

                <Icons>
                    {/* <StackIcon stack="react"/>
                    <StackIcon stack="javascript"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/>
                    <StackIcon stack="react"/> */}
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox className="rank">
            <SubtitleText>백준 랭크</SubtitleText>

            <Select />
        </DetailBox>

        <DetailBox>
            <SubtitleText>소개</SubtitleText>
            <IntroBox>타입스크립트...너무 내 인생을 힘들게 한다 뭐 이런 고난과 시련이 다 있냐 개씹스레기새끼...개쓰레기 언어...</IntroBox>
        </DetailBox>
    </Container>
}

export default index;

const InputBox = styled.input`
    border: solid 2px var(--primary-color-light);
    padding: 0.5em 1em;
    border-radius: 1em;
`

const IntroBox = styled.textarea`
    width: 100%;
    height: 50vh;
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
import React, {useState} from "react";
import styled from "styled-components";

import ModifyHeader from "../../component/ModifyHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";
import ClassSelect from "../../common/ClassSelect";
import Select from "../../component/Select";
import StackSelect from "../../layout/StackSelect";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold"

const index = () => {
    return <Container>
        <GlobalStyle/>
        <NanumSquareRegular/>
        <NanumSquareBold/>
        <ModifyHeader/>
        <CampusBox>
            <SubtitleText className="title">팀원 수</SubtitleText>
            <TeamNum>
                <InputBox placeholder="현재 팀원 수"/>/<InputBox placeholder="총 팀원 수"/>
            </TeamNum>
        </CampusBox>
        <CampusBox>
            <SubtitleText className="title">소속캠퍼스</SubtitleText>
            <ClassSelect/>
        </CampusBox>
        <DetailBox>
            <SubtitleText className="title">Skill</SubtitleText>
            <SubBox>
                <SubtitleText>프론트엔드</SubtitleText>

                <Icons>
                    <StackSelect/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    <StackSelect/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    <StackSelect/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    <StackSelect/>
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>참고</SubtitleText>

                <Icons>
                    <StackSelect/>
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox>
            <SubtitleText>팀원</SubtitleText>
        </DetailBox>

        <DetailBox>
            <SubtitleText>소개</SubtitleText>
            <IntroBox placeholder={"뭘 넣어야할까요"}></IntroBox>
        </DetailBox>
    </Container>
}

export default index;

const TeamNum = styled.div `
    display: flex;
    align-items:center;
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
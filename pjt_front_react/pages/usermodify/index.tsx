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

const index = () => {
    // const [selectRank, setSelectRank] = useState<Boolean>(false);
    const test = ["I", "II", "III", "IV", "V"];
    const rank = [
        [
            "Unrated", "#222222"
        ],
        [
            "Bronze", "#a94e00"
        ],
        [
            "Silver", "#365471"
        ],
        [
            "Gold", "#f4c46a"
        ],
        [
            "Platinum", "#22e1a2"
        ],
        [
            "Diamond", "#05b6fc"
        ],
        [
            "Ruby", "#ff0766"
        ]
    ]

    const rankoptions: JSX.Element[] = rank.map((item : string[], index:number) => {
        return <RankBox key={index}>
            <Rank className="bx bxs-crown" color={item[1]} /> {item[0]}
        </RankBox>
    })

    // const BackjoonHandler = () => {
    //     setSelectRank(true);
    // }

    return <Container>
        <GlobalStyle/>
        <NanumSquareRegular/>
        <NanumSquareBold/>
        <ModifyHeader/>
        <CampusBox>
            <SubtitleText className="title">매터모스트 아이디</SubtitleText>
            <InputBox placeholder="@sseeker"/>
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
                    <StackSelect />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>백엔드</SubtitleText>

                <Icons>
                    <StackSelect />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>UI/UX</SubtitleText>

                <Icons>
                    <StackSelect />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>Devops</SubtitleText>

                <Icons>
                    <StackSelect />
                </Icons>
            </SubBox>
            <SubBox>
                <SubtitleText>참고</SubtitleText>

                <Icons>
                    <StackSelect />
                </Icons>
            </SubBox>
        </DetailBox>

        <DetailBox className="rank">
            {/* <SubtitleText>백준 랭크</SubtitleText>

            <Select title="티어 선택" options={rankoptions} handler={BackjoonHandler}/>
            {
                selectRank
                    ? <Select title="랭크 선택" options={test} handler={null}/>
                    : null
            } */}
        </DetailBox>

        <DetailBox>
            <SubtitleText>소개</SubtitleText>
            <IntroBox placeholder={"뭘 넣어야할까요"}></IntroBox>
        </DetailBox>
    </Container>
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
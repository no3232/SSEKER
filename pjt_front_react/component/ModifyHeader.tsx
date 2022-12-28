import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import GmarketMedium from "../modules/fonts/GmarketSansMedium";
import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

const ModifyHeader = () => {
    const router = useRouter().pathname;

    return <TitleBox>
        <GmarketMedium/>
        <NanumSquareBold/>
        <ContentBox>
            <InputBox placeholder="이름을 입력하세요"/>

            <Link href={(router === "/usermodify")?"/userdetail":"/teamdetail"}>
                <Edit className="bx bx-check"/>
            </Link>
        </ContentBox>
    </TitleBox>
}

export default ModifyHeader;

const Edit = styled.i `
    font-size: 30px;

    &:hover {
        color: var(--primary-color-light);
        cursor: pointer;
    }
`

const InputBox = styled.input`
    border: solid 2px var(--primary-color);
    padding: 1em;
    border-radius: 20px;
`

const ContentBox = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & a {
        text-decoration: none;
        color: black;
    }
`

const TitleBox = styled.div `
    margin: 5em 0 2.5em 0;
    width: 100%;
    padding: 1em 2em;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
`
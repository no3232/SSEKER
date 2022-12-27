import React from "react";
import styled from "styled-components";

import GmarketMedium from "../modules/fonts/GmarketSansMedium";
import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

const ModifyHeader = () => {
    return <TitleBox>
        <GmarketMedium/>
        <NanumSquareBold/>
        <ContentBox>
            <InputBox placeholder="이름을 입력하세요"/>

            <Edit className="bx bx-check"/>
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
    border: none;
    padding: 1em;
    border-radius: 1em;
`

const ContentBox = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleBox = styled.div `
    margin-bottom: 2.5em;
    width: 100%;
    background: blue;
    padding: 1em 2em;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    background: rgb(22,67,243);
    color: var(--body-color);

    &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
        z-index: 11;
        transform: translate3d(0, 0, 0);      
    }
`
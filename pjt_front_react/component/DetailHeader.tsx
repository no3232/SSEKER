import React from "react";
import styled from "styled-components";

import GmarketMedium from "../modules/fonts/GmarketSansMedium";
import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

import {DetailHeaderType} from "../modules/types/dummy";

const DetailHeader = ({name, mattermost} : DetailHeaderType) => {
    return <TitleBox>
        <GmarketMedium/>
        <NanumSquareBold/>
        <ContentBox>
            <Info>
                <NameBox>
                    {name}
                </NameBox>
                <IdBox>
                    {mattermost}
                </IdBox>
            </Info>

            <Edit className="bx bxs-edit-alt"/>
        </ContentBox>
    </TitleBox>
}

export default DetailHeader;

const Edit = styled.i `
    font-size: 30px;

    &:hover {
        color: var(--primary-color-light);
        cursor: pointer;
    }
`

const IdBox = styled.span `
    font-size: 16px;
    color: var(--text-color-light);
    font-family: 'NanumSquareNeoBold';
`

const NameBox = styled.span `
    font-size: 25px;
    margin-right: 8px;
    font-family: 'GmarketSansMedium';
`

const Info = styled.span `
    display: flex;
    align-items: flex-end;
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
    padding: 2em;
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
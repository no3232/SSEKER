import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import GmarketMedium from "../modules/fonts/GmarketSansMedium";
import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

import {DetailHeaderType} from "../modules/types/dummy";
import Link from "next/link";

const DetailHeader = ({name, mattermost} : DetailHeaderType) => {
    const router = useRouter().pathname;

    return <TitleBox>
        <GmarketMedium/>
        <NanumSquareBold/>
        <ContentBox>
            <Info>
                <NameBox>
                    {(name.length === 0)?name:"anonymous"}
                </NameBox>
                {/* <IdBox>
                    {mattermost?mattermost:"anonymous"}
                </IdBox> */}
            </Info>

            <Link href={(router === "/userdetail")? "/usermodify":"/teammodify"}>
                <Edit className="bx bxs-edit-alt"/>
            </Link>
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
import React from "react";
import styled from "styled-components";

import { Stack } from "../modules/types/dummy";
import { list } from "../modules/StackIconDummy";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const Icon = ({stack}:Stack) => {
    return <IconBody color={list[stack].color}>
        <NanumSquareRegular />
        {list[stack].icon}
        <IconName>{list[stack].name}</IconName>
    </IconBody>
}

export default Icon;

const IconName = styled.div``

const IconBody = styled.div`
    background: ${props => props.color};
    height: 35px;
    min-width: 90px;
    width: fit-content;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: 'NanumSquareNeoRegular';
    font-size: 12px;

    & * {
        color: white;
    }

    & svg {
        height: 15px;
        fill: white;
    }
`
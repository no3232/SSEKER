import React from "react";
import styled from "styled-components";

import { Stack } from "../modules/types/dummy";
import { list } from "../modules/StackIconDummy";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const Icon = ({stack}:Stack) => {
    const stackType = list[stack];
    
    const StyleHandler = (event: any) => {
        event.target.classList.toggle('notClick');
    }

    return <IconBody className='notClick' onClick={StyleHandler} color={stackType.color}>
        <NanumSquareRegular />
        {stackType.icon}
        <IconName>{stackType.name}</IconName>
    </IconBody>
}

export default Icon;

const IconName = styled.div``

const IconBody = styled.span`
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
    cursor:pointer;

    & * {
        color: white;
    }

    & svg {
        height: 15px;
        fill: white;
    }

    &:hover {
        opacity: 1;
    }
`
import React from "react";
import styled from "styled-components";

import { Stack } from "../modules/types/dummy";
import { list } from "../modules/StackIconDummy";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const Icon = ({stack}:{stack:string}) => {
    const stackType = list[stack];

    // console.log(stackType)  //{name: 'react, color: '61AFB', icon: svg코드} 정상적으로 출력
    // console.log(stackType.color)  //TypeError: Cannot read properties of unefined(reading 'color');

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
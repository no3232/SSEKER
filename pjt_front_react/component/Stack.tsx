import React, {useState} from "react";
import styled from "styled-components";
import {language, skill} from "../modules/StackIconDummy";
import {StackAll} from "../modules/types/dummy";

const Stack = ({stack, UpdateStackState, list} : StackAll) => {
    const {id, title} = stack;
    const lst = (list==="langauge") ? language:skill;

    return <Body
        onClick={() => {
            UpdateStackState(id, false)
        }}
        color={lst[title].color}>
        {lst[title].icon}
        {title}
    </Body>
}

export default Stack;

const Body = styled.article < {
    color: string
} > `
    height: 35px;
    transition: all .3s ease-in-out;
    transition-delay: .1s;
    background: ${props => props.color};
    border-radius: 5px;
    color: var(--body-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 90px;
    width: fit-content;
    padding: 5px 10px;
    cursor: pointer;

    & svg {
        height: 15px;
        fill: white;
    }
`
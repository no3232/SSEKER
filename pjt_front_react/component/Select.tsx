import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";

import {Selection} from "../modules/types/dummy";

const Select = ({title, options, handler} : Selection) => {
    const [active, setActive] = useState(false);
    const [main, setMain] = useState(title);

    useEffect(() => {
        setMain(title)
    }, [title])

    const mainHandler = (item: any) => {
        setMain(options[item])
        if (typeof(handler) === "function")
            handler(item)
    }
    const opt: JSX.Element[] = Object.keys(options).map(
        (item) => {
            return<Elem isActive={active} onClick={() => {mainHandler(item)}} key={options[item]}>
            <SubElem></SubElem>
            {options[item]}
        </Elem>}
    )

    const dropDownHandler = () => {
        setActive(!active);
    }

    return <Box className="Select">
        <GlobalStyle/>
        <DropDown onClick={dropDownHandler}>
            {main}
            <LeftIcon className="arrow" isActive={active}/>
            <RightIcon className="arrow" isActive={active}/>

            <Items isActive={active}>
                {opt}
            </Items>
        </DropDown>
    </Box>
}

export default Select;

const SubElem = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--primary-color-light);
    z-index: -1;
    transform: rotate(180deg);
    transform-origin: right;
    transition: var(--trans-03);
`

const Elem = styled.span < {
    isActive: boolean
} > `
    position: relative;
    left: ${props => props.isActive
    ? '0'
    : '100%'};
    display: flex;
    font-size: 16px;
    padding: 8px 15px;
    color: var(--text-color);
    border-radius: 6px;
    z-index: 1;
    background: var(--body-color);
    overflow: hidden;
    transition: var(--trans-03);
    cursor: pointer;

    &:hover span {
        transform: rotate(0deg);
    }
`

const Items = styled.div < {
    isActive: boolean
} > `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    margin-top: 43px;
    overflow: hidden;
    visibility: ${props => props.isActive
    ? "visible"
    : "hidden"};
    transition: var(--trans-03);
    z-index: 2;
`

const RightIcon = styled.span < {
    isActive: boolean
} > `
transform: ${props => props.isActive
    ? "rotate(-135deg)"
    : "rotate(-45deg)"};
`

const LeftIcon = styled.span < {
    isActive: boolean
} > `
    left: 4px;
    transform: ${props => props.isActive
    ? "rotate(135deg)"
    : "rotate(45deg)"};
`

const DropDown = styled.div `
    position: relative;
    width: 40vw;
    height: 40px;
    padding: 20px 0;
    background: var(--body-color);
    border: solid 2px var(--primary-color-light);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    

    & .arrow {
        top: 2px;
        position: relative;
        display: inline-block;
        width: 10px;
        height: 3.5px;
        background: var(--primary-color-light);
        border-radius: 40px;
        transition: var(--trans-05);
    }    
`

const Box = styled.div `
    position: relative;
    height: fit-content;
`
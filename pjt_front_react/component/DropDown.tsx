import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { SkillInfoContext } from "../modules/context/SkillContext";
import {dropDown, skillList} from "../modules/types/dummy";

import Stack from "./Stack";
import StackSelector from "./StackSelector";

const DropDown = ({stacks, type} : dropDown) => {
    const [stackList, setStackList] = useState<skillList[]>([]);

    useEffect(()=>{
        setStackList(stacks[type])
    }, [stacks])

    const UpdateStackState = (stackId : number, newState : boolean) => {
        if (stackId) {
            setStackList(stackList => stackList.map(s => {
                if (s.id === stackId) 
                    return {
                        ...s,
                        selected: newState
                    }
                else 
                    return s;
                }
            ))
        }
    }
    
    const Stacks = stackList.map(s => {
        if (s.selected) {
            return <Stack
                stack={s}
                key={s.id}
                UpdateStackState={UpdateStackState}/>
        }
    })

    return <Body>
        <StackEl>
            {Stacks}
        </StackEl>
        <StackSelector
            stackListHandle={{
                stackList,
                UpdateStackState
            }}/>
    </Body>
}

export default DropDown;

const StackEl = styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`

const Body = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding-block: 1rem;
    z-index: 1;
    position: relative;
`
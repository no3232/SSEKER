import React, {useState} from "react";
import styled from "styled-components";
import {testElem} from "../modules/types/dummy";

import Stack from "./Stack";
import StackSelector from "./StackSelector";

const DropDown = ({stacks} : {
    stacks: testElem[]
}) => {
    const [stackList, setStackList] = useState(stacks);

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

    return <Body>
        <StackEl>
            {
                stackList.map(s => {
                    if (s.selected) {
                        return <Stack
                            stack={s}
                            key={s.id}
                            UpdateStackState={UpdateStackState}/>
                    }
                })
            }
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
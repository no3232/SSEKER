import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {dropDown, skillList} from "../modules/types/dummy";

import Stack from "./Stack";
import StackSelector from "./StackSelector";

const DropDown = ({stacks, UpdateStackState, type} : dropDown) => {
    const Stacks = () => {
        let returnList:any[] = []

        if (stacks.length !== 0) {
            returnList = stacks.map(s => {
                if (s.selected) {
                    return <Stack stack={s} key={s.id} UpdateStackState={UpdateStackState} type={type} />
                }
            })
        } else {
            returnList = []
        }

        return returnList
    }

    return <Body>
        <StackEl>
            {Stacks()}
        </StackEl>
        <StackSelector
            stackListHandle={{
                stacks,
                UpdateStackState,
                type
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
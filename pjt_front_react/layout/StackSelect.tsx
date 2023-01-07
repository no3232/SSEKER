import React from "react";
import styled from "styled-components";
import DropDown from "../component/DropDown";

import {stackSelect} from "../modules/types/dummy";

const StackSelect = ({mySkills, UpdateStackState, type} :stackSelect) => {
    return <Container>
        <DropDown stacks={mySkills} type={type} UpdateStackState={UpdateStackState}/>
    </Container>
}

export default StackSelect;

const Container = styled.div `
    width: 100%;
    padding: 0;
`
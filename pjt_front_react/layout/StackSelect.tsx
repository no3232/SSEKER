import React from "react";
import styled from "styled-components";
import DropDown from "../component/DropDown";

import {skillList, stackSelect} from "../modules/types/dummy";

const StackSelect = ({mySkills, type} :stackSelect) => {
    return <Container>
        <DropDown stacks={mySkills} type={type}/>
    </Container>
}

export default StackSelect;

const Container = styled.div `
    width: 100%;
    padding: 0;
`
import React from "react";
import styled from "styled-components";
import DropDown from "../component/DropDown";

import { testElem } from "../modules/types/dummy";

const test: testElem[] = [
    {
        id: 1,
        title: "vuejs",
        selected: false
    }, {
        id: 2,
        title: "react",
        selected: true
    }, {
        id: 3,
        title: "reactnative",
        selected: false
    }, {
        id: 4,
        title: "rust",
        selected: false
    }, {
        id: 5,
        title: "spring",
        selected: true
    },
    {
        id: 6,
        title: "vuejs",
        selected: false
    }, {
        id: 7,
        title: "react",
        selected: false
    }, {
        id: 8,
        title: "reactnative",
        selected: false
    }, {
        id: 9,
        title: "rust",
        selected: true
    }, {
        id: 10,
        title: "spring",
        selected: false
    },
    {
        id: 11,
        title: "vuejs",
        selected: false
    }, {
        id: 12,
        title: "react",
        selected: true
    }, {
        id: 13,
        title: "springboot",
        selected: false
    }, {
        id: 14,
        title: "rust",
        selected: false
    }, {
        id: 15,
        title: "spring",
        selected: true
    },
    {
        id: 16,
        title: "dart",
        selected: false
    }, {
        id: 17,
        title: "fastapi",
        selected: false
    }, {
        id: 18,
        title: "django",
        selected: false
    }, {
        id: 19,
        title: "rust",
        selected: true
    }, {
        id: 20,
        title: "flask",
        selected: false
    }
]

const StackSelect = () => {
    return <Container>
        <DropDown stacks={test} />
    </Container>
}

export default StackSelect;

const Container = styled.div`
    width: 100%;
    padding: 0;
`
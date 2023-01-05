import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import {testElem} from "../modules/types/dummy";

import StackListItem from "./StackListItem";

const StackSelector = ({stackListHandle, list} : {
    stackListHandle: any, list:string
}) => {
    const {stackList, UpdateStackState} = stackListHandle
    const [searchList, setSearchList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSearchList(stackList);
    }, [stackList]);

    const RemoveItem = (id : number) => {
        setSearchList(SearchList => SearchList.filter((x : testElem) => x.id !== id));
        if (searchInput !== "") {
            setSearchInput("");
        }
    }

    const Search = (value : any) => {
        setSearchInput(value);
        if (value) {
            setSearchList(stackList.filter((x : testElem) => {
                if (!x.selected) {
                    return x
                        .title
                        .toLocaleLowerCase()
                        .includes(value.toLocaleLowerCase())
                } else 
                    return false
            }))
        } else {
            setSearchList(stackList)
        }
    }

    return <SelectorBody open={isOpen}>
        <GlobalStyle />
        <InputSections open={isOpen}>
            <Icon className="bx bx-search"/>
            <Input
                onFocus={() => {
                    setIsOpen(true);
                }}
                value={searchInput}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    Search(e.target.value)
                }}
                placeholder="type at lest 3 letter"/>
            <CloseBtn
                open={isOpen}
                onClick={()=>{
                    setIsOpen(false);
                }}>
                <Icon className="bx bx-x"/>
            </CloseBtn>
        </InputSections>
        <List>
            {searchList.map((s: testElem) => {
                if(!s.selected) {
                    return <StackListItem
                        key={s.id}
                        list={list}
                        stack={s}
                        removeItem={RemoveItem}
                        UpdateStackState={UpdateStackState}
                    />
                }
            })}
        </List>
    </SelectorBody>
}

export default StackSelector;

const List = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: var(--primary-color-light);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    ::-webkit-xcrollbar-thumb:hover {
        backgroun: rgb(43, 43, 43);
    }
`

const Input = styled.input `
    all: unset;
    width:90%;
    flex: 1;
    font-size: 16px;
    font-weight: 600;
`

const CloseBtn = styled.span < {
    open: boolean
} > `
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--trans-03);
    cursor: pointer;
    opacity: ${props=>props.open?"1":"0"};

    & i {
        font-size: 2rem;
    }
`

const InputSections = styled.div < {
    open: boolean
} > `
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    gap: 0.5rem;
    transition: var(--trans-03);
    padding-bottom: ${props => props.open?"1rem":0};
    height: 2.5rem;

    > i {
        font-size: 1.5rem;
    }
`

const Icon = styled.i ``

const SelectorBody = styled.article < {
    open: boolean
} > `
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--text-color-light);
    padding: 1rem;
    gap: 1rem;
    border-radius: 10px; 
    transform: all .3s ease-in-out;
    height: ${props=>props.open ? '200px':'3.5rem'};
    overflow: hidden;
`
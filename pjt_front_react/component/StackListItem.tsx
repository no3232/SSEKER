import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { language, skill } from "../modules/StackIconDummy";
import {StackList} from "../modules/types/dummy";

const StackListItem = ({stack, removeItem, UpdateStackState, type} : StackList) => {
    const {id, title} = stack;
    const [visible, setVisible] = useState(false);
    const ItemRef = useRef(null !);

    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting === true) 
            setVisible(true);
        else 
            setVisible(false);
        }
    , {threshold: [0]})

    useEffect(() => {
        observer.observe(ItemRef.current);
        return() => {
            observer.disconnect();
        }
    }, [stack])

    const AddStack = () => {
        UpdateStackState(id, true, type);
        removeItem(id);
    }

    return <ListItem visible={visible} color={skill[title].color} ref={ItemRef} onClick={AddStack}>
        {skill[title].icon}
        {title}
    </ListItem>
}

export default StackListItem;

const ListItem = styled.article<{visible:boolean, color:string}> `
    height: 35px;
    transition: all .3s ease-in-out;
    transition-delay: .1s;
    background: ${props=>props.color};
    border-radius: 5px;
    color: var(--body-color);
    transform: translateY(${props => props.visible?'0': '50%'});
    opacity: ${props => props.visible?"1":"0"};
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
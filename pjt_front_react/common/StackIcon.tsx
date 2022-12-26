import React from "react";
import styled from "styled-components";

import { Stack } from "../modules/types/dummy";
import { list } from "../modules/StackIconDummy";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const Icon = (props: Stack) => {
  const StyleHandler = (event: any) => {
    event.stopPropagation();
    event.target.classList.toggle("notClick");
  };
  const NoneHandler = () => {
    return ;
  }

  return (
    <IconBody
      className={props.clickable ? 'notClick' : ''}
      onClick={props.clickable ? StyleHandler : NoneHandler}
      color={list[props.stack].color}
    >
      <NanumSquareRegular />
      <IconImg>{list[props.stack].icon}</IconImg>
      <IconName>{list[props.stack].name}</IconName>
    </IconBody>
  );
};

export default Icon;

const IconImg = styled.div`
  display: flex;
  pointer-events: none;
`;

const IconName = styled.div`
  display: flex;
  pointer-events: none;
`;

const IconBody = styled.div`
  background: ${(props) => props.color};
  height: 35px;
  min-width: 90px;
  width: fit-content;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "NanumSquareNeoRegular";
  font-size: 12px;
  border-radius: 10px;
  margin: 4px;

  & * {
    color: white;
  }

  & svg {
    height: 15px;
    fill: white;
  }
`;

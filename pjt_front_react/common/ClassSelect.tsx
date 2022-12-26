import { useState } from "react";
import styled, { css } from "styled-components";

import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

import ClassButtonTypes from '../modules/types/classSelectButton'

const ClassSelect = () => {
  const [selectedClass, setSelectedClass] = useState("");

  const clickClass = (event: any) => {
    
    if (selectedClass === event.target.value) {
      setSelectedClass("");
      return;
    }
    setSelectedClass(event.target.value);
    return;
  };

  return (
    <ClassSelectStyle>
      <NanumSquareRegular />
      <ClassUl>
        <ClassLi>
          <ClassButton
            selected={selectedClass === "서울"}
            onClick={clickClass}
            value='서울'
          >
            서울
          </ClassButton>
        </ClassLi>
        <ClassLi>
          <ClassButton
            selected={selectedClass === "대전"}
            onClick={clickClass}
            value='대전'
          >
            대전
          </ClassButton>
        </ClassLi>
        <ClassLi>
          <ClassButton
            selected={selectedClass === "구미"}
            onClick={clickClass}
            value='구미'
          >
            구미
          </ClassButton>
        </ClassLi>
        <ClassLi>
          <ClassButton
            selected={selectedClass === "부울경"}
            onClick={clickClass}
            value='부울경'
          >
            부울경
          </ClassButton>
        </ClassLi>
        <ClassLi>
          <ClassButton
            selected={selectedClass === "광주"}
            onClick={clickClass}
            value='광주'
          >
            광주
          </ClassButton>
        </ClassLi>
      </ClassUl>
      {selectedClass && (<ClassSelectOption name='' id=''>
        <ClassOption value='1'>1반</ClassOption>
        <ClassOption value='2'>2반</ClassOption>
        {selectedClass === "서울" && seoulClass}
      </ClassSelectOption>)}
    </ClassSelectStyle>
  );
};

export default ClassSelect;

const ClassSelectStyle = styled.div`
  font-size: 12px;
  font-family: NanumSquareNeoRegular;
`;

const ClassUl = styled.ul`
  display: flex;
  align-content: space-between;
  list-style: none;
`;
const ClassLi = styled.li`
  display: flex;
  
`;

const ClassButton = styled.button<ClassButtonTypes>`
  border: solid 1px #0062ff;
  background-color: white;
  border-radius: 5px;
  color: #0062ff;
  font-family: 'NanumSquareNeoRegular';
  padding : 10px;
  margin: 2px;
  &:hover {
    border: solid 1px white;
      background-color: blue;
      color: white;
  }
  ${(props) =>
    props.selected &&
    css`
      border: solid 1px white;
      background-color: #0062ff;
      color: white;
      &:hover {
        border: solid 1px white;
        background-color: #0062ff;
        color: white;
      }
    `}
    
  }
  
`;

const ClassSelectOption = styled.select`
  display: flex;
`;
const ClassOption = styled.option``;
const seoulClass = (
  <>
    <ClassOption value='3'>3반</ClassOption>
    <ClassOption value='4'>4반</ClassOption>
    <ClassOption value='5'>5반</ClassOption>
    <ClassOption value='6'>6반</ClassOption>
  </>
);

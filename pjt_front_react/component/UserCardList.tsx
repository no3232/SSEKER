import styled from "styled-components";

import UserListCard from "./UserListCard";
import { listCardTypes, skillObject } from "../modules/types/dummy";

const iconList = [
  "android",
  "angular",
  "c",
  "cplusplus",
  "dart",
  "django",
  "docker",
  "express",
  "fastapi",
  "figma",
  "flask",
  "flutter",
  "git",
  "go",
  "javascript",
  "kotlin",
  "linux",
  "mysql",
  "python",
  "react",
  "reactnative",
  "rust",
  "spring",
  "springboot",
  "svelte",
  "swift",
  "typescript",
  "vuejs",
  "xd",
];

const UserCardList = (props: listCardTypes) => {
  // console.log(props)
  const ListCards = Object.values(props).map((item) => {
    // const FilterStack = item.skill.filter((skill: skillObject) => {
    //   if (iconList.includes(skill.title.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // });
    // const stack = FilterStack.map((skill: skillObject)=>{
    //   return skill.title.toLowerCase()
    // })
    // console.log(item)
    return (
      <UserListCard key={item.id} id={item.id} title={item.name} stack={item.skill} part={item.part} class={item.campus.title} username={item.username}/>
    );
  });

  return <ListStyle>{ListCards}</ListStyle>;
};

export default UserCardList;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0px 15px;
`;

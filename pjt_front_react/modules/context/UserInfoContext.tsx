import React, { useState } from "react";

import { ContextUserInfoTypes } from "../types/dummy";

// export const KeyContext = React.createContext({
//   key: ''
// });

// const defaultKeyState = {
//   key: ''
// };

export const UserInfoContext = React.createContext<ContextUserInfoTypes>({
  id: 0,
  username: "",
  campus: { id: 0, campus: "", partcount: 0 },
  part: 0,
  skill: { id: 0, title: "", category: "" },
  github: "",
  blog: "",
  level: { id: 0, BJlevel: "" },
  track: { id: 0, track: "" },
  language: { id: 0, language: "" },
  email: "",
  introduce: "",
  addUser: (userinfo: any) => {},
  removeUser: () => {},
  // addKey: (key: string) => {},
  // removeKey: () => {}
});

const defaultUserState = {
  id: 0,
  username: "",
  campus: { id: 0, campus: "", partcount: 0 },
  part: 0,
  skill: { id: 0, title: "", category: "" },
  github: "",
  blog: "",
  level: { id: 0, BJlevel: "" },
  track: { id: 0, track: "" },
  language: { id: 0, language: "" },
  email: "",
  introduce: "",
};

export const UserInfoProvider = (props: any) => {
  const [userInfoState, setUserInfoState] = useState(defaultUserState);
  // const [keyInfoState, setKeyInfoState] = useState(defaultKeyState);

  const addUserHandler = (userinfo: any) => {
    if (userinfo.id !== userInfoState.id) {
      setUserInfoState(userinfo);
    }
  };
  const removeUserHandler = () => {
    setUserInfoState(defaultUserState)
  };

  // const addKeyHandler = (key: string) => {
  //   setKeyInfoState({key: key})
  // }

  // const removeKeyHandler = () => {
  //   setKeyInfoState(defaultKeyState)
  // }

  // const keyinfo =  {
  //   key: keyInfoState.key
  // }

  const userinfo: ContextUserInfoTypes = {
    id: userInfoState.id,
    username: userInfoState.username,
    campus: userInfoState.campus,
    part: userInfoState.part,
    skill: userInfoState.skill,
    github: userInfoState.github,
    blog: userInfoState.blog,
    level: userInfoState.level,
    track: userInfoState.track,
    language: userInfoState.language,
    email: userInfoState.email,
    introduce: userInfoState.introduce,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    // addKey: addKeyHandler,
    // removeKey: removeKeyHandler
  };

  return (
    <UserInfoContext.Provider value={userinfo}>
      {props.children}
    </UserInfoContext.Provider>
  );
};
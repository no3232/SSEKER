export interface Props {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch < React.SetStateAction<boolean> >;
}

export interface MenuActive {
    menuOpen: boolean;
}

export interface Stack {
    stack: string;
    clickable: boolean;
    textShow: boolean;
}

export interface DetailHeaderType {
    name: string;
    mattermost: string;
}

export interface iconList {
    name: string;
    color: string;
    icon: JSX.Element;
    category: number
}

export interface languageList {
    name: string;
    color: string;
    icon: JSX.Element;
}

export interface Selection {
    title: string;
    options: any;
    handler: any;
}

export interface testElem {
    id: number;
    title: string;
    selected: boolean;
}

export interface StackAll {
    stack: testElem;
    UpdateStackState: Function;
    type: number
}

export interface StackList {
    stack: testElem;
    removeItem: Function;
    type: number
    UpdateStackState: Function;
}

export interface campusObject {
    id: number;
    campus: string;
    partcount: number;
}

export interface trackObject {
    id: number;
    track: string;
}

export interface languageObject {
    id: number;
    language: string;
}

export interface BJlevelObject {
    id: number;
    BJlevel: string;
}

export interface skillObject {
    id: number;
    title: string;
    category: string;
}

export interface skillList {
    id: number;
    title: string;
    category: string;
    selected: boolean
}

export interface dropDown {
    stacks: skillList[]
    type: number
    UpdateStackState: Function
}

export interface stackSelect {
    mySkills: skillList[]
    type: number
    UpdateStackState: Function;
}

export interface userData {
    id: number;
    username: string;
    campus: campusObject;
    part: number;
    skill: skillObject;
    track: trackObject;
}

export interface teamData {
  id: number;
  title: string;
  skill: skillObject[];
  fixed_count: number;
  prticipant_count: number;
  status: number;
  campus: campusObject;
  part: number;
}

export interface listCardTypes {
    data: userData | teamData;
}

export interface EachUserCardTypes {
  id: number;
  title: string;
  stack: string[];
  part: number;
  class: string;
  username: string;
}

export interface EachTeamCardTypes {
  id: number;
  title: string;
  stack: string[];
  part: number;
  class: string;
  fixedcount: number;
  participant: number;
  status: number;
}

export interface ContextUserInfoTypes {
    id: number;
    username: string;
    campus: campusObject;
    part: number;
    skill: skillObject;
    github: string;
    blog: string;
    level: BJlevelObject;
    track: trackObject;
    language: languageObject;
    email: string;
    introduce: string;
    addUser: Function;
    removeUser: Function;
}
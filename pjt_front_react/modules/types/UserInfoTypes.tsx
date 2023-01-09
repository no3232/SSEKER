import {skillObject} from "./dummy";

export interface campusInfo {
    id: number;
    title: string;
    partcount: number;
}

export interface level {
    id: number;
    BJlevel: string;
    color: string;
}

export interface level2 {
    id: number;
    level: string;
    color: string;
}

export interface track {
    id: number;
    track: string;
}

export interface userInfo {
    id: number;
    username: string;
    campus: campusInfo;
    part: number;
    skill: skillObject[];
    github: string;
    blog: string;
    level: level;
    track: track;
    language: skillObject[];
    email: string;
    introduce: string;
    addUser: Function;
    removeUser: Function;
}

export interface defaultUserInfo {
    id: number;
    username: string;
    campus: campusInfo;
    part: number;
    skill: skillObject[];
    github: string;
    blog: string;
    level: level2;
    track: track;
    language: skillObject[];
    email: string;
    introduce: string;
    position: {
        id: number,
        category: string
      },
}

export interface detailUserInfo {
    id: number,
    username:string,
    name: string,
    campus: campusInfo,
    part: number,
    skill: skillObject[],
    github: string,
    blog: string,
    level: level2,
    track: track,
    language: skillObject[],
    email: string,
    introduce: string,
    position: {
      id: number,
      category: string
    },
}

export interface sendInfo {
    campus: number|null,
    part: number|null,
    skill: number[]|null,
    github: string|null,
    blog: string|null,
    level: number|null,
    track: number|null,
    language: number[]|null,
    introduce: string|null,
    email: string|null,
    position: number|null
}
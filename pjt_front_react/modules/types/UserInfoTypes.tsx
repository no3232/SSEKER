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
    level: level,
    track: track,
    language: skillObject[],
    email: string,
    introduce: string
}

export interface sendInfo {
    campus: number,
    part: number,
    skill: number[],
    github: string,
    blog: string,
    level: string,
    track: number,
    language: number[],
    introduce: string,
    email: string,
    position: number
}
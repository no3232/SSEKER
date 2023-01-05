import { skillObject } from "./dummy";

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
    level: level;
    track: track;
    language: skillObject[];
    email: string;
    introduce: string;
}
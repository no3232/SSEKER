export interface Props {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuActive {
    menuOpen: boolean,
}

export interface Stack {
    stack: string
}

export interface iconList {
    name: string,
    color: string,
    icon: HTMLElement
}

export interface icon {
    [index: string]: iconList,
    android:iconList,
    angular:iconList,
    c:iconList,
    cplusplus:iconList,
    dart:iconList,
    django:iconList,
    docker:iconList,
    express:iconList,
    fastapi:iconList,
    figma:iconList,
    flask:iconList,
    flutter:iconList,
    git:iconList,
    go:iconList,
    javascript:iconList,
    kotlin:iconList,
    linux:iconList,
    mysql:iconList,
    python:iconList,
    react:iconList,
    reactnative:iconList,
    rust:iconList,
    spring:iconList,
    springboot:iconList,
    svelte:iconList,
    swift:iconList,
    typescript:iconList,
    vuejs:iconList,
    xd:iconList
}
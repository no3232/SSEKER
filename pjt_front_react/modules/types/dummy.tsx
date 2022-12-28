export interface Props {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuActive {
    menuOpen: boolean,
}

export interface Stack {
    stack: string,
    clickable: boolean,
}

export interface DetailHeaderType {
    name: string,
    mattermost: string
}

export interface iconList {
    name: string,
    color: string,
    icon: JSX.Element
}

export interface Selection {
    title: string,
    options: any[],
    handler: any
}

export interface testElem {
    id: number,
    title: string,
    selected: boolean
}

export interface StackAll {
    stack: testElem,
    UpdateStackState: any
}

export interface StackList {
    stack: testElem,
    removeItem: any,
    UpdateStackState: any
}
export interface Props {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuActive {
    menuOpen: boolean,
}
import type { AppProps } from "next/app";
import { useState } from 'react';

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from '../common/Menu';
import MenuBox from '../component/MenuBox';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <Menu  menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <MenuBox menuOpen = {menuOpen} />
      <Component {...pageProps} />
    </>
  );
}

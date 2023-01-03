import type { AppProps } from "next/app";
import { useState } from "react";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from "../common/Menu";
import MenuBox from "../component/MenuBox";
import { KeyInfoProvider } from "../modules/context/KeyContext";
import { UserInfoProvider } from "../modules/context/UserInfoContext";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuBox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <UserInfoProvider>
        <KeyInfoProvider>
          <Component {...pageProps} />
        </KeyInfoProvider>
      </UserInfoProvider>
    </>
  );
}

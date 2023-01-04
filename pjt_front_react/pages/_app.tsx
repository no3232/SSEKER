import type { AppProps } from "next/app";
import { useContext, useState } from "react";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from "../common/Menu";
import MenuBox from "../component/MenuBox";
import { KeyInfoProvider } from "../modules/context/KeyContext";
import { UserInfoContext, UserInfoProvider } from "../modules/context/UserInfoContext";
import { getKeyCookies } from '../modules/cookie/keyCookies';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const ctxUserinfo = useContext(UserInfoContext)

  // if (getKeyCookies("key") !== undefined) {
  //   axios({
  //     method: "GET",
  //     url: "https://ssekerapi.site/dj-accounts/user/",
  //     headers: {
  //       Authorization: `Token ${getKeyCookies("key")}`,
  //     },
  //   })
  //   .then(response => {
  //     console.log(response.data.username)
  //     const id = response.data.username
  //     axios({
  //     method: "GET",
  //     url: `https://ssekerapi.site/accounts/${id}`,
  //   })
  //     .then((response) => {
  //       ctxUserinfo.addUser(response.data)
  //       console.log(ctxUserinfo)
  //       return
  //     })
  //   })
  //   }
  

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

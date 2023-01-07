import type { AppProps } from "next/app";
import { useContext, useEffect, useState } from "react";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from "../common/Menu";
import MenuBox from "../component/MenuBox";
import { UserInfoContext, UserInfoProvider } from "../modules/context/UserInfoContext";
import { getKeyCookies } from '../modules/cookie/keyCookies';
import axios from 'axios';
import Router from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const ctxUserinfo = useContext(UserInfoContext)
  const router = Router;


  if (getKeyCookies("key") !== undefined) {
    let key = ""
    axios({
      method: "GET",
      url: "https://ssekerapi.site/dj-accounts/user/",
      headers: {
        Authorization: `Token ${getKeyCookies("key")}`,
      },
    })
    .then(response => {
      key = response.data.username
      axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/${key}`,
    })
      .then(async (response) => {
        localStorage.setItem("userinfo", JSON.stringify(response.data))
        // console.log(JSON.parse(localStorage.getItem("userinfo") || '{}'))
        return
      })
    })
    }
  

  return (
    <>
      <GlobalStyle />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuBox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <UserInfoProvider>

          <Component {...pageProps} />
        
      </UserInfoProvider>
    </>
  );
}
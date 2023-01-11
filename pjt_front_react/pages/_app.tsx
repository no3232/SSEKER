import type { AppProps } from "next/app";
import { useContext, useEffect, useState } from "react";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from "../common/Menu";
import MenuBox from "../component/MenuBox";

import { getKeyCookies, removeKeyCookies } from "../modules/cookie/keyCookies";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { Cookies } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const path = useRouter().pathname;
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    if (getKeyCookies("key") !== undefined) {
      let key = "";
      axios({
        method: "GET",
        url: "https://ssekerapi.site/dj-accounts/user/",
        headers: {
          Authorization: `Token ${getKeyCookies("key")}`,
        },
      }).then((response) => {
        key = response.data.pk;
        axios({
          method: "GET",
          url: `https://ssekerapi.site/accounts/${key}`,
        }).then(async (response) => {
          localStorage.setItem("userinfo", JSON.stringify(response.data));
          // console.log(JSON.parse(localStorage.getItem("userinfo") || '{}'))
        });
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {path === "/login" ||
      path === "/signup" ||
      path === "/" ||
      path === "/signup/ssafyinfo" ||
      path === "/signup/skillinfo" ? null : (
        <div>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MenuBox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}

      <Component {...pageProps} />
    </>
  );
}

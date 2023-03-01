import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import Menu from "../common/Menu";
import MenuBox from "../component/MenuBox";

import { getKeyCookies } from "../modules/cookie/keyCookies";
import axios from "axios";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const path = useRouter().pathname;
  
  useEffect(() => {
    if (getKeyCookies("key") !== undefined) {
      let key = "";
      axios({
        method: "GET",
        url: "http:/sseker.com:8000/dj-accounts/user/",
        headers: {
          Authorization: `Token ${getKeyCookies("key")}`,
        },
      }).then((response) => {
        key = response.data.pk;
        axios({
          method: "GET",
          url: `http:/sseker.com:8000/accounts/${key}`,
        }).then(async (response) => {
          localStorage.setItem("userinfo", JSON.stringify(response.data));
          // console.log(JSON.parse(localStorage.getItem("userinfo") || '{}'))
        });
      });
    }
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <NanumSquareRegular />
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
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: 'NanumSquareNeoRegular';
`
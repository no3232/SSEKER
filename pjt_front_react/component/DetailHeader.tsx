import React from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";

import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

import { DetailHeaderType } from "../modules/types/dummy";
import Link from "next/link";

const DetailHeader = ({ name, isUser, id }: DetailHeaderType) => {
  const router = useRouter().pathname.split("/")[1];

  const goModify = () => {
    if (router === "userdetail") {
      Router.push({
        pathname: "/usermodify",
      });
    } else {
      Router.push({
        pathname: "/teammodify",
        query: { id: id },
      });
    }
  };

  return (
    <TitleBox>
      <NanumSquareBold />
      <ContentBox>
        <Info>
          <NameBox>{name.length === 0 ? "anonymous" : name}</NameBox>
        </Info>

        {isUser ? <Edit className="bx bxs-edit-alt" onClick={goModify} /> : null}
      </ContentBox>
    </TitleBox>
  );
};

export default DetailHeader;

const Edit = styled.i`
  font-size: 35px;

  &:hover {
    color: var(--primary-color-light);
    cursor: pointer;
  }
`;

const IdBox = styled.span`
  font-size: 16px;
  color: var(--text-color-light);
  font-family: "NanumSquareNeoBold";
`;

const NameBox = styled.span`
  font-size: 25px;
  margin-right: 8px;
  font-family: "GmarketSansMedium";
`;

const Info = styled.span`
  display: flex;
  align-items: flex-end;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: black;
  }
`;

const TitleBox = styled.div`
  margin: 5em 0 2.5em 0;
  width: 100%;
  padding: 1em 2em;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

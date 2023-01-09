import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DetailHeader from "../../component/DetailHeader";
import SubtitleText from "../../common/SubtitleText";
import StackIcon from "../../common/StackIcon";

import GlobalStyle from "../../modules/GlobalStyle/GlobalStyle";
import NanumSquareRegular from "../../modules/fonts/NanumSquareNeoRegular";
import NanumSquareBold from "../../modules/fonts/NanumSquareNeoBold";
import axios from "axios";
import { skillObject } from "../../modules/types/dummy";
import { useRouter } from "next/router";

interface StackElement {
  id: number;
  title: string;
  category: number;
}

const defaultTeamState = {
  campus: { id: 0, title: "", partcount: 0 },
  content: "",
  fixed_count: 1,
  founder: { id: 0, username: "" },
  id: 0,
  part: 0,
  participant: [],
  participant_count: 0,
  skill: [],
  status: { id: 0, status: "" },
  title: "",
};

const Index = () => {
  const router = useRouter();

  const [teamInfo, setTeamInfo] = useState(defaultTeamState);

  useEffect(() => {
    if (router.query.teamid !== undefined) {
      axios
        .get(`https://ssekerapi.site/projects/project/${router.query.teamid}`)
        .then((res) => {
          const { data } = res;
          setTeamInfo(data);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query.teamid]);

  const skills = (category: string) => {
    if (teamInfo.skill.length === 0) {
      return "설정된 스킬이 없습니다";
    } else {
      const lst = teamInfo.skill.filter((item: skillObject) => {
        return item.category == category;
      });

      if (lst.length === 0) {
        return "설정된 스킬이 없습니다";
      } else {
        return lst.map((item: StackElement | any) => (
          <StackIcon
            stack={item.title}
            key={item.id}
            clickable={false}
            textShow={true}
          />
        ));
      }
    }
  };

  const isUser = true;

  return (
    <Container>
      <GlobalStyle />
      <NanumSquareRegular />
      <NanumSquareBold />
      <DetailHeader name={teamInfo.title} isUser={isUser} id={teamInfo.id} />
      <CampusBox>
        <SubtitleText className="title">소속캠퍼스</SubtitleText>
        <Campus>{teamInfo.campus.title}</Campus>
        <Campus>{`${teamInfo.campus.partcount}반`}</Campus>
      </CampusBox>
      <DetailBox>
        <SubtitleText className="title">Skill</SubtitleText>

        <SubBox>
          <SubtitleText>프론트엔드</SubtitleText>

          <Icons>{skills("1")}</Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>백엔드</SubtitleText>

          <Icons>{skills("2")}</Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>UI/UX</SubtitleText>

          <Icons>{skills("3")}</Icons>
        </SubBox>
        <SubBox>
          <SubtitleText>Devops</SubtitleText>

          <Icons>{skills("4")}</Icons>
        </SubBox>
      </DetailBox>

      <DetailBox>
        <SubtitleText>소개</SubtitleText>
        <IntroBox>
          {teamInfo.content === null
            ? "설정된 자기소개가 없습니다"
            : teamInfo.content}
        </IntroBox>
      </DetailBox>
    </Container>
  );
};

export default Index;

const RankName = styled.span``;

const Rank = styled.i`
  color: ${(props) => props.color};
  font-size: 25px;
`;

const RankBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
`;

const IntroBox = styled.div`
  margin-top: 1em;
  padding: 1em;
  border-radius: 6px;
  border: solid 2px var(--primary-color-light);
`;

const Icons = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const SubBox = styled.div`
  padding: 1em 0 0 0;

  & div {
    font-family: "NanumSquareNeoBold";
  }
`;

const Campus = styled.div`
  padding: 0.2em 1em;
  border-radius: 6px;
  border: solid 2px var(--primary-color-light);
  color: var(--primary-color-light);
  font-family: "NanumSquareNeoBold";
`;

const DetailBox = styled.div`
  margin: 2em;
`;

const CampusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  margin: 2em;
`;

const Container = styled.div`
  font-family: "NanumSquareNeoLight";
  min-height: 100vh;
  padding-bottom: 5em;

  & .rank {
    display: flex;
    align-items: center;
    justify-content: flex-center;
    gap: 1.5em;
  }
`;

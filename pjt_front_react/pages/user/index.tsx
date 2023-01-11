import styled from "styled-components";
import axios from "axios";

import TitleText from "../../common/TitleText";
import UserCardList from "../../component/UserCardList";
import SearchBar from "../../component/SearchBar";
import { useEffect, useState, useCallback } from "react";
import {
  listCardTypes,
  skillList,
  skillObject,
} from "../../modules/types/dummy";
import SubtitleText from "../../common/SubtitleText";
import StackSelect from "../../layout/StackSelect";
import Select from "../../component/Select";
import { defaultUserInfo } from "../../modules/types/UserInfoTypes";
import { getKeyCookies } from "../../modules/cookie/keyCookies";
import { ExampleUser } from "../../modules/list/dummy";
import Router from "next/router";

const UserListPage = () => {
  const [userList, setUserList] = useState<listCardTypes[] | any>([]);
  const [pageNum, setPageNum] = useState<{ [key: string]: number }>({
    page: 1,
    totalPage: 1,
  });
  const [target, setTarget] = useState<Element | null>(null);
  // 필터 스테이트
  const [filterOpen, setFilterOpen] = useState(false);
  const [languages, setLanguages] = useState<number[]>([]);
  const [skills, setSkills] = useState<number[]>([]);
  const [userInfo, setUserInfo] = useState<defaultUserInfo>(ExampleUser);
  const [signupRegion, setSignupRegion] = useState<string>("");
  const [signupClass, setSignupClass] = useState<string>("");

  // 유저가 로그인 했냐...?
  const router = Router;
  useEffect(() => {
    if (getKeyCookies("key") === undefined) {
      router.push("/login");
    } else {
      setUserInfo(JSON.parse(localStorage.getItem("userinfo") || "{}"));
    }
  }, []);

  // 로그인은 했는데 캠퍼스 설정이 안되있다
  useEffect(() => {
    if (userInfo.campus !== undefined || userInfo.part !== undefined) {
      setSignupRegion(userInfo.campus.id.toString());
      setSignupClass(userInfo.part.toString());
    } else {
      setSignupRegion("6");
      setSignupClass("");
    }
  }, [userInfo]);

  // 인피니티 스크롤
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/?count=${pageNum.page}&campus=${signupRegion}&part=${signupClass}&skills=${skills}`,
    }).then((response) => {
      if (response.status === 200) {
        setUserList((prev: any) => {
          if (response.data.peoples.length > 0) {
            const peopleList = Object.values(response.data.peoples);
            return [...prev, ...peopleList];
          }
          return [...prev];
        });
        if (pageNum.page <= pageNum.totalPage) {
          setPageNum((prev) => ({
            ...prev,
            totalPage: Math.ceil(response.data.peoples_count / 20),
          }));
        }
      }
    });
  }, [pageNum.page]);

  // 필터링
  useEffect(() => {
    setPageNum({
      page: 1,
      totalPage: 1,
    });

    axios({
      method: "GET",
      url: `https://ssekerapi.site/accounts/?count=${pageNum.page}&campus=${signupRegion}&part=${signupClass}&skills=${skills}`,
    }).then((response) => {
      if (response.status === 200) {
        setUserList([]);
        setUserList((prev: any) => {
          if (response.data.peoples.length > 0) {
            const peopleList = Object.values(response.data.peoples);
            return [...peopleList];
          }

          return [...prev];
        });

        setPageNum((prev) => ({
          page: 1,
          totalPage: Math.ceil(response.data.peoples_count / 20),
        }));
      }
    });
  }, [skills, signupRegion, signupClass]);

  // 인피니티 스크롤 스크롤링
  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setPageNum((prev) => {
          if (prev.totalPage > prev.page) {
            return {
              ...prev,
              page: prev.page + 1,
            };
          }
          return prev;
        });
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0,
      root: null,
    });

    target && observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target]);

  const openFilter = () => {
    setFilterOpen((prevState: boolean) => !prevState);
  };

  // 필터 부분

  const [allSkills, setAllSkills] = useState<skillObject[]>([]);
  useEffect(() => {
    // 스킬 오브젝트 불러오기
    axios
      .get("https://ssekerapi.site/objects/skill-language")
      .then((res) => {
        const { data } = res;

        setAllSkills(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setSkillList();
  }, [allSkills]);

  const [lastList, setLastList] = useState<{ [key: number]: skillList[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const setSkillList = () => {
    const mySkills: { [key: number]: skillList[] } = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
    };

    //가지고 있는 스킬 title만 추출하기

    for (const i in allSkills) {
      const SkillsCategory = parseInt(allSkills[i].category);
      const info: skillObject = allSkills[i];
      switch (SkillsCategory) {
        case 0:
          mySkills[0].push({ ...info, selected: false });
          break;
        case 1:
          mySkills[1].push({ ...info, selected: false });
          break;
        case 2:
          mySkills[2].push({ ...info, selected: false });
          break;
        case 3:
          mySkills[3].push({ ...info, selected: false });
          break;
        case 4:
          mySkills[4].push({ ...info, selected: false });
          break;
      }
    }

    setLastList(mySkills);
  };

  const UpdateStackState = (
    stackId: number,
    newState: boolean,
    type: number
  ) => {
    if (stackId) {
      const tmp = lastList[type].map((s) => {
        if (s.id === stackId) {
          return {
            ...s,
            selected: newState,
          };
        } else {
          return s;
        }
      });

      setLastList({ ...lastList, [type]: tmp });
    }
  };

  useEffect(() => {
    let skillTmp: number[] = [];
    for (let i in lastList) {
      const tmp = [];

      for (let j of lastList[i]) {
        if (j.selected) {
          tmp.push(j.id);
        }
      }

      if (i === "0") {
        setLanguages(tmp);
      } else {
        skillTmp = skillTmp.concat(tmp);
      }
    }

    setSkills(skillTmp);
  }, [lastList]);

  // 캠퍼스 별 필터링
  const regionOption: { [key: number]: string } = {
    6: "전국",
    5: "서울",
    3: "대전",
    4: "부울경",
    1: "구미",
    2: "광주",
  };
  const [classOption, setClassOption] = useState<Object>({
    1: "반을 선택 해 주세요",
  });

  const getSignupRegion = (region: number) => {
    if (region == 1 || region == 2 || region == 4) {
      setClassOption({ 1: "공통 1반", 2: "공통 2반" });
      setSignupClass("1");
    } else if (region == 3) {
      setClassOption({ 1: "공통 1반", 2: "공통 2반", 3: "공통 3반" });
      setSignupClass("1");
    } else if (region == 5) {
      setClassOption({
        1: "공통 1반",
        2: "공통 2반",
        3: "공통 3반",
        4: "공통 4반",
        5: "공통 5반",
        6: "공통 6반",
      });
      setSignupClass("1");
    } else if (region == 6) {
      setClassOption({ "": "전국" });
      setSignupClass("");
    }

    setSignupRegion(region.toString());
    // console.log(classOption);
  };

  const getSignupClass = (classoption: number) => {
    // console.log(classoption)
    setSignupClass(classoption.toString());
  };

  return (
    <UserBox>
      <TitleBox>
        <TitleText>팀원을 찾고 싶어요!</TitleText>
      </TitleBox>
      <SearchBar />
      <FilterBox>
        {filterOpen ? (
          <i className='bx bx-x' onClick={openFilter}></i>
        ) : (
          <i className='bx bx-filter' onClick={openFilter}></i>
        )}
      </FilterBox>
      {filterOpen && (
        <DetailBox>
          <SubtitleText className='title'>소속캠퍼스</SubtitleText>
          <RegionBox>
            <div>
              <p>지역</p>
              <Select
                title={regionOption[parseInt(signupRegion)]}
                options={regionOption}
                handler={getSignupRegion}
              />
            </div>
            <div>
              <p>반</p>
              <Select
                title={signupClass + "반"}
                options={classOption}
                handler={getSignupClass}
              />
            </div>
          </RegionBox>

          <SubtitleText className='title'>Skill</SubtitleText>
          {/* <SubBox>
            <SubtitleText>언어</SubtitleText>

            <Icons>
              <StackSelect
                mySkills={lastList[0]}
                type={0}
                UpdateStackState={UpdateStackState}
              />
            </Icons>
          </SubBox> */}

          <SubBox>
            <SubtitleText>프론트엔드</SubtitleText>

            <Icons>
              <StackSelect
                mySkills={lastList[1]}
                type={1}
                UpdateStackState={UpdateStackState}
              />
            </Icons>
          </SubBox>
          <SubBox>
            <SubtitleText>백엔드</SubtitleText>

            <Icons>
              <StackSelect
                mySkills={lastList[2]}
                type={2}
                UpdateStackState={UpdateStackState}
              />
            </Icons>
          </SubBox>
          <SubBox>
            <SubtitleText>UI/UX</SubtitleText>

            <Icons>
              <StackSelect
                mySkills={lastList[3]}
                type={3}
                UpdateStackState={UpdateStackState}
              />
            </Icons>
          </SubBox>
          <SubBox>
            <SubtitleText>Devops</SubtitleText>

            <Icons>
              <StackSelect
                mySkills={lastList[4]}
                type={4}
                UpdateStackState={UpdateStackState}
              />
            </Icons>
          </SubBox>
        </DetailBox>
      )}
      {userList.length > 0 ? (
        <UserCardList {...userList} />
      ) : (
        <SubtitleText>데이터가 없습니다</SubtitleText>
      )}
      <Spinner ref={setTarget}></Spinner>
    </UserBox>
  );
};

export default UserListPage;

const RegionBox = styled.div`
  display: flex;
  > div {
    width: 50%;
    padding: 10px;
  }
`;

const DetailBox = styled.div`
  margin: 2em;
  background-color: #e0edff;
  border-radius: 8px;
  padding: 24px 20px;
  transition: var(--trans-03);
`;

const SubBox = styled.div`
  padding: 1em 0 0 0;

  & div {
    font-family: "NanumSquareNeoBold";
  }
`;

const Icons = styled.div`
  width: 100%;
`;

const UserBox = styled.div`
  margin-top: 42px;
`;

const TitleBox = styled.div`
  display: flex;
  height: 56px;
  align-item: center;
  margin-left: 15px;
`;

const FilterOption = styled.div`
  margin: 8px 15px;
  display: none;
`;

const FilterBox = styled.div`
  text-align: end;
  margin-right: 15px;
  margin-bottom: 8px;
  > i {
    font-size: 32px;
  }
`;

const Spinner = styled.div`
  height: 100px;
`;

const DUMMY_LIST = [
  {
    stack: ["dart", "flask", "react", "vuejs"],
    title: "1카드 제목입니다.",
    status: "3/6",
    id: 1,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "2카드 제목입니다.",
    status: "6/6",
    id: 2,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "3카드 제목입니다.",
    status: "4/6",
    id: 3,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "4카드 제목입니다.",
    status: "3/6",
    id: 4,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "5카드 제목입니다.",
    status: "6/6",
    id: 5,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "6카드 제목입니다.",
    status: "4/6",
    id: 6,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "7카드 제목입니다.",
    status: "3/6",
    id: 7,
  },
  {
    stack: ["spring", "react", "vuejs"],
    title: "8카드 제목입니다.",
    status: "6/6",
    id: 8,
  },
  {
    stack: ["django", "python", "react", "vuejs"],
    title: "9카드 제목입니다.",
    status: "4/6",
    id: 9,
  },
];

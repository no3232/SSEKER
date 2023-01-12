import { defaultUserInfo, detailUserInfo } from "../types/UserInfoTypes";
import { sendInfo } from "../types/TeamInfoTypes";

export const defaultUserState: detailUserInfo = {
    id: 0,
    username: "",
    name: "Ananymous",
    campus: {
      id: 0,
      title: "",
      partcount: 0,
    },
    part: 0,
    skill: [],
    github: "",
    blog: "",
    level: {
      id: 0,
      level: "",
      color: "",
    },
    track: {
      id: 0,
      track: "",
    },
    language: [],
    email: "",
    introduce: "",
    position: {
      id: 0,
      category: ""
    },
  };

export const ExampleUser: defaultUserInfo = {
  id: 0,
  username: "",
  campus: {
    id: 6,
    title: "",
    partcount: 0,
  },
  name: "",
  part: 0,
  skill: [],
  github: "",
  blog: "",
  level: {
    id: 0,
    level: "",
    color: "",
  },
  track: {
    id: 0,
    track: "",
  },
  language: [],
  email: "",
  introduce: "",
  position: {
    id: 5,
    category: "",
  },
};

export const Rank: { [key: number]: string } = {
  0: "I",
  1: "II",
  2: "III",
  3: "IV",
  4: "V",
};

export const Tier: { [key: number]: string } = {
  1: "Bronze",
  2: "Silver",
  3: "Gold",
  4: "Platinum",
  5: "Diamond",
  6: "Ruby",
  7: "Unrated",
};

export const regionOption = {
  6: "전국",
  5: "서울",
  3: "대전",
  4: "부울경",
  1: "구미",
  2: "광주",
};

export const positionOption = {
  1: "프론트엔드",
  2: "백엔드",
  3: "UI/UX",
  4: "DevOps",
  5: "선택 안함",
};

export const ExampleTeam = {
  campus: {
    id: 0,
    partcount: 0,
    title: ""
  },
  content: "",
  fixed_count: 6,
  founder : {
    id: 0,
    username: ""
  },
  id: 0,
  part: 0,
  participant: [],
  participant_count: 0,
  skill: [],
  status: {
    id: 2,
    status: ""
  },
  title: "",
}

export const ExampleData:sendInfo = {
  campus: 0,
  status: 2,
  title: "",
  content: "",
  skill: [],
  fixed_count: 6
}
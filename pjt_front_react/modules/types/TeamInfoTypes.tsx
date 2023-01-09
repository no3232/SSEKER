import { skillObject } from "./dummy"
import { campusInfo } from "./UserInfoTypes"

interface Founder {
  id: number,
  username: string
}

interface skillCategory {
  id: number,
  category: string
}

interface Member {
  id: number,
  username: string,
  part: number,
  skillCategory: skillCategory
  project: number[]
}

interface Status {
  id: number,
  status: string
}

export interface TeamInfo {
    campus: campusInfo,
    content: string,
    fixed_count: number,
    founder : Founder
    id: number,
    part: number
    participant: Member[],
    participant_count: number,
    skill: skillObject[],
    status: Status,
    title: string,
}

export interface sendInfo {
  campus: number,
  status: number,
  title: string,
  content: string,
  skill: Array<number>,
  fixed_count: number
}
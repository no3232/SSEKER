import React, {createContext, useContext} from "react";
import {skillList, skillObject} from "../types/dummy";
import axios from "axios";

export const myStack = (skills : skillObject[]) => {

    console.log(skills)
    
    const userSkill = skills
    const mySkills: {
        [key: number]: skillList[]
    } = {
        1: [],
        2: [],
        3: [],
        4: []
    }

    const allSkills:any = () => {
        axios
            .get('https://ssekerapi.site/objects/')
            .then((res) => {
                const {data} = res;
                return data
            })
            .catch((err) => console.log(err))
        }

    let mySkillList: string[] = []

    for (let i = 0; i < userSkill.length; i++) {
        mySkillList.push(userSkill[i].title)
    }

    for (const i in allSkills) {
        const SkillsCategory = parseInt(allSkills[i].category)

        if (mySkillList.includes(i)) {
            const info = userSkill
                .filter((item : skillObject) => {
                    return item.title === i
                })

            switch (SkillsCategory) {
                case 1:
                    mySkills[1].push({
                        ...info[0],
                        selected: true
                    })
                    break;
                case 2:
                    mySkills[2].push({
                        ...info[0],
                        selected: true
                    })
                    break;
                case 3:
                    mySkills[3].push({
                        ...info[0],
                        selected: true
                    })
                    break;
                case 4:
                    mySkills[4].push({
                        ...info[0],
                        selected: true
                    })
                    break;
            }
        } else {
            const info: skillObject = allSkills[i]
            switch (SkillsCategory) {
                case 1:
                    mySkills[1].push({
                        ...info,
                        selected: false
                    })
                    break;
                case 2:
                    mySkills[2].push({
                        ...info,
                        selected: false
                    })
                    break;
                case 3:
                    mySkills[3].push({
                        ...info,
                        selected: false
                    })
                    break;
                case 4:
                    mySkills[4].push({
                        ...info,
                        selected: false
                    })
                    break;
            }
        }
    }

    return mySkills
}

export const SkillInfoContext = createContext < {[key: number]: skillList[]} > ([])
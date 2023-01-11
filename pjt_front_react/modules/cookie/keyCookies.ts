import { Cookies } from 'react-cookie';

const cookies = new Cookies()

export const setKeyCookies = (key: string, value: string, option?: any) => {
  return cookies.set(key, value, { path: '/' })
}

export const getKeyCookies = (key:string) => {
  return cookies.get(key)
}

export const removeKeyCookies = (key:string) => {
  cookies.remove(key, { path: '/' })
}
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

export const setKeyCookies = (key: string, value: string, option?: any) => {
  return cookies.set(key, value, {...option})
}

export const getKeyCookies = (key:string) => {
  return cookies.get(key)
}
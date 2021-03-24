import Cookies from 'js-cookie'
// import store from '../store/'

const TokenKey = 'user-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

// token的有效期为1天
export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
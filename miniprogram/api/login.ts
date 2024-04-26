import { TokenData, VerificationCode } from 'typings/login';
import http from '../service/request';

// 获取验证码
export function FetchCode(params: string) {
  return http<VerificationCode>({ url: `/code`, method: "GET", data: { mobile: params } })
}

// 登录
export function FetchLogin(params: object) {
  return http<TokenData>({ url: `/login`, method: "POST", data: params })
}
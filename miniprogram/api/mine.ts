import { UserData } from 'typings/mine';
import http from '../service/request';

export function FetchMineInfo() {
  return http<UserData>({ url: `/userInfo`, method: "GET" })
}
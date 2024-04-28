import { UserDataDetails } from '../../typings/HouseInfo';
import http from '../service/request';

export function FetchHouseInfo(params: string) {
  return http<UserDataDetails>({ url: `/room/${params}`, method: "GET" })
}
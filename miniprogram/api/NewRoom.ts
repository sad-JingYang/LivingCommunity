import http from '../service/request';

export function FetchNewRoom(params: any) {
  return http({ url: `/room`, method: 'POST', data: { ...params } })
}
import http from '../service/request';

// 修改个人资料
export function FetchPutInfo(params: any) {
  return http({ url: `/userInfo`, method: 'PUT', data: params })
}
// api/home.ts
import http from '../service/request';
import { DataItem } from '../../typings/home';

// 社区公告列表
export function FetchCommunityAnnouncement() {
  return http<DataItem[]>({ url: '/announcement', method: "GET" });
}
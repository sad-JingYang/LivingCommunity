// api/home.ts
import http from '../service/request';
import { DataItem, NotificationData } from '../../typings/home';

// 社区公告列表
export function FetchCommunityAnnouncement() {
  return http<DataItem[]>({ url: '/announcement', method: "GET" });
}

export function FetchDetails(Id: string | undefined) {
  return http<NotificationData>({ url: `/announcement/${Id}`, method: "GET" });
}
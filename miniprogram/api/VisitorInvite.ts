import { DataItem } from "typings/VisitorInvite";
import http from "../service/request";

export function FetchMyHouse() {
  return http<DataItem[]>({ url: `/house`, method: "GET" });
}

export function FetchAddVisitor(params: any) {
  return http({ url: `/visitor`, method: "POST", data: { ...params } });
}

// 访客列表
export function getVisitor(data: {
  current: string
  pageSize: string
}) {
  return http({ url: '/visitor', method: "GET", data })
}

// 邀请详情
export function getVisitorD(val: string) {
  return http({ url: `/visitor/${val}`, method: "GET" })
}
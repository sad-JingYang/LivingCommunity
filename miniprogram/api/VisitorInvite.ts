import { DataItem } from "typings/VisitorInvite";
import http from "../service/request";

export function FetchMyHouse() {
  return http<DataItem[]>({ url: `/house`, method: "GET" });
}

export function FetchAddVisitor(params: any) {
  return http({ url: `/visitor`, method: "POST", data: { ...params } });
}
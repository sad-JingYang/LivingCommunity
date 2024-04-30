import http from './../service/request';

export function FetchRepair(params: object) {
  return http({ url: `/repair`, method: "GET", data: params })
}

// 审核通过的房屋
export function getHouse() {
  return http({ url: `/house`, method: "GET" })
}

// 维修项目 repairItem
export function getRepairItem() {
  return http({ url: `/repairItem`, method: "GET" })
}

// 新增报修
export function setRepair(params) {
  return http({ url: '/repair', method: "POST", data: params })
}

// 报修详情
export function getRepairD(val: string) {
  return http({ url: `/repair/${val}`, method: "GET" });
}
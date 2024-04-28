import { DataItem } from "../../../typings/house";
import { FetchMyRoom } from "../../api/House"

// pages/House/index.ts
Page({
  data: {
    HouseList: [] as DataItem[]
  },
  onLoad() { },
  onReady() { },
  onShow() {
    this.GetMyHouse();
  },
  onHide() { },
  // 获取我的房屋信息
  async GetMyHouse(): Promise<void> {
    const res = await FetchMyRoom();
    this.setData({
      HouseList: res.data
    })
  }
})
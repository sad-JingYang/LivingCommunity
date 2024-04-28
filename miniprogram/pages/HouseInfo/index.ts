import { UserDataDetails } from "../../../typings/HouseInfo";
import { FetchHouseInfo } from "../../api/HouseInfo";

// pages/RoomInfo/index.ts
Page({
  data: {
    InfoId: '',
    HouseInfo: {} as UserDataDetails
  },
  onLoad(options) {
    this.setData({
      InfoId: options.Id
    })
  },
  onReady() { },
  onShow() {
    this.GetInfo()
  },
  onHide() { },
  async GetInfo(): Promise<void> {
    const res = await FetchHouseInfo(this.data.InfoId);
    this.setData({
      HouseInfo: res.data
    })
  }
})
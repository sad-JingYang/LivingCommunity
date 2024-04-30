import { FetchRepair } from "../../api/repair";

// pages/repair/repair.ts
Page({
  data: {
    repairList: [], // 维修列表数据
    statusMap: {
      0: {
        label: "已取消",
        className: "cancel",
      },
      1: {
        label: "受理中",
        className: "info",
      },
      2: {
        label: "上门中",
        className: "success",
      },
      3: {
        label: "已完成",
        className: "complete",
      },
    }
  },
  onShow() {
    this.getRepairList();
  },
  repair(e: Object) {
    wx.setStorageSync('repair', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "/pages/addRepaire/index"
    })
  },
  async getRepairList() {
    // 调用接口获取维修列表
    const res = await FetchRepair({
      current: 1, // 当前页面
      pageSize: 10, // 每页多少条数据
    });
    console.log(res)
    this.setData({
      repairList: res.data.rows,
    });
  },
  addRepair() {
    wx.navigateTo({
      url: "/pages/addRepaire/index",
    });
  }
});
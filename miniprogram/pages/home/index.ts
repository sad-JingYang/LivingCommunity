// index.ts
import { FetchCommunityAnnouncement } from '../../api/home';
import { DataItem } from '../../../typings/home';

Page({
  data: {
    announcement: [] as DataItem[]
  },
  onLoad() {
    this.GetAnnouncement();
  },
  onReady() { },
  // 获取社区公告列表
  async GetAnnouncement() {
    const { data: res } = await FetchCommunityAnnouncement();
    this.setData({
      announcement: res
    })
  },
  // JumpPage
  JumpPage(name: Object): void {
    const UrlName = name.currentTarget.dataset.name;
    if (UrlName === 'house') {
      wx.navigateTo({
        url: '/pages/House/index'
      })
    }
  }
})

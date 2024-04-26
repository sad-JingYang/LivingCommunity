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
    console.log(this.data.announcement);
  }
})

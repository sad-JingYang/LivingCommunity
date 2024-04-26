// pages/bulletin/index.ts
import { NotificationData } from 'typings/home';
import { FetchDetails } from '../../api/home';
Page({
  data: {
    ItemData: {} as NotificationData
  },
  onLoad(ev) {
    let Id = ev.Id;
    this.GetBulletinDetails(Id);
  }, 
  async GetBulletinDetails(Id: string | undefined): Promise<void> {
    const { data: res } = await FetchDetails(Id);
    this.setData({
      ItemData: res
    })
  }
})
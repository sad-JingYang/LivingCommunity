import { UserData } from "typings/mine";
import { FetchMineInfo } from "../../api/mine";

// pages/mine/index.ts
Page({
  data: {
    UserInfo: {
      avatar: '../../assets/house.png',
      nickName: '浪浪山',
      id: ''
    } as UserData
  },
  onLoad() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.navigateTo({
        url: '/pages/Login/index'
      })
      return;
    }
  },
  onShow() {
    this.GetInfo()
  },
  JumpPage(url: Object) {
    let Url = url.currentTarget.dataset.url;
    if (Url === 'perfect') {
      const avatar = this.data.UserInfo.avatar;
      const nickName = this.data.UserInfo.nickName;
      wx.getStorage({
        key: 'token',
        success(res) {
          console.log(res);
          wx.navigateTo({
            url: `/pages/perfect/perfect?avatar=${avatar}&nickName=${nickName}`
          })
        },
        fail(err) {
          console.log(err);
          wx.navigateTo({
            url: '/pages/Login/index'
          })
        }
      })
    }
  },
  async GetInfo(): Promise<void> {
    const { data: res } = await FetchMineInfo();
    if (!res) return;
    if (!res.avatar && !res.nickName) return;
    this.setData({
      UserInfo: res
    })
  }
})
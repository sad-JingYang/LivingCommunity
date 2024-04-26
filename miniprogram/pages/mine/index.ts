// pages/mine/index.ts
Page({
  data: {},
  onLoad() { },
  JumpPage(url: Object) {
    let Url = url.currentTarget.dataset.url;
    if (Url === 'perfect') {
      wx.getStorage({
        key: 'UserInfo',
        success(res) {
          console.log(res);
          wx.navigateTo({
            url: '/pages/Login/index'
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
  }
})
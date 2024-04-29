// pages/community/room/room.ts
Page({
  data: {
    title: ''
  },
  onLoad(options) {
    this.setData({
      title: options.title
    });
  },
  JumpPage() {
    wx.navigateTo({ url: '/pages/community/NewRoom/NewRoom' })
  }
})
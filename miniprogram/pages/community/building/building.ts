// pages/community/building/building.ts
Page({
  data: {
    title: ''
  },
  onLoad(options) {
    this.setData({
      title: options.title
    })
  },
  JumpPage(Item) {
    const title = Item.target.dataset.title;
    wx.navigateTo({ url: `/pages/community/room/room?title=${title}` })
  }
})
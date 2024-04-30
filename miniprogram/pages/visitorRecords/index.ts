import { getVisitor } from '../../api/VisitorInvite'

Page({
  data: {
    housesList: []
  },
  add() {
    wx.navigateTo({
      url: '/pages/Visitor/index'
    })
  },
  async getHousesList() {
    const res = await getVisitor({
      current: '1',
      pageSize: '10'
    })
    this.setData({
      housesList: res.data.rows
    })
  },
  visitor(e) {
    console.log(3,e);
    
    if (e.currentTarget.dataset.status === 1) {
      wx.navigateTo({
        url: `/pages/code/code?id=${e.currentTarget.dataset.id}`
      })
    } else {
      wx.showToast({
        title: '通行证已经失效！',
        icon: 'none'
      })
    }
  },
  onLoad() {
    this.getHousesList()
  }
})
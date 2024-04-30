import { getHouse, getRepairItem, setRepair, getRepairD } from '../../api/repair'

Page({
  data: {
    newData: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type: string, value: string) {
      if (type === 'year') {
        return value
      }
      if (type === 'month') {
        return value
      }
      return value
    },
    popup: false,
    popupId: 1,
    popupTitle: '',
    popupList: [],
    houses: '请选择房屋信息',
    repairItem: '',
    housesList: [],
    repairItemList: [],
    repairBody: {
      id: '',
      houseId: '',
      repairItemId: '',
      mobile: '',
      appointment: '',
      description: '',
      attachment: [] as { id: string, url: string }[]
    }
  },
  async getHouseList() {
    const res = await getHouse()
    this.setData({
      housesList: res.data
    })
  },
  async getRepairItemList() {
    const res = await getRepairItem()
    this.setData({
      repairItemList: res.data
    })
  },
  clickHouses() {
    this.setData({
      popup: true,
      popupId: 1,
      popupTitle: '选择报修房屋',
      popupList: this.data.housesList
    })
  },
  clickRepair() {
    this.setData({
      popup: true,
      popupId: 0,
      popupTitle: '选择维修项目',
      popupList: this.data.repairItemList
    })
  },
  housesTap(e: { target: { dataset: { name: string, id: string } } }) {
    if (this.data.popupId) {
      this.setData({
        houses: e.target.dataset.name,
        'repairBody.houseId': e.target.dataset.id
      })
    } else {
      this.setData({
        repairItem: e.target.dataset.name,
        'repairBody.repairItemId': e.target.dataset.id
      })
    }
    this.popupClose()
  },
  popupClose() {
    this.setData({
      popup: false,
    })
  },
  setPhone(e: { detail: { value: string } }) {
    this.setData({
      'repairBody.mobile': e.detail.value
    })
  },
  clickData() {
    this.setData({
      newData: true
    })
  },
  newDataClose() {
    this.setData({
      newData: false
    })
  },
  onConfirm(e: { detail: number }) {
    this.setData({
      'repairBody.appointment': new Date(e.detail).toISOString().split('T')[0]
    })
    this.newDataClose()
  },
  setDescription(e: { detail: { value: string } }) {
    this.setData({
      'repairBody.description': e.detail.value
    })
  },
  afterRead(event: { detail: { file: any } }) {
    const Token = wx.getStorageSync('token')
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://live-api.itheima.net/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      header: {
        Authorization: `Bearer ${Token.token}`
      },
      formData: { user: 'test' },
      success: (res) => {
        const fileList = this.data.repairBody.attachment.concat()
        // 上传完成需要更新 fileList
        fileList.push(JSON.parse(res.data).data);
        this.setData({
          'repairBody.attachment': fileList
        });
      },
    });
  },
  deleteFile(e: { detail: { index: number } }) {
    const fileList = this.data.repairBody.attachment.concat()
    fileList.splice(e.detail.index, 1)
    this.setData({
      'repairBody.attachment': fileList
    })
  },
  async judge() {
    const pattern = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    if (this.data.repairBody.houseId === '') {
      wx.showToast({
        title: '请选择房屋信息！',
        icon: 'none'
      })
      return
    }
    if (this.data.repairBody.repairItemId === '') {
      wx.showToast({
        title: '请选择维修项目！',
        icon: 'none'
      })
      return
    }
    if (!pattern.test(this.data.repairBody.mobile)) {
      wx.showToast({
        title: '请填写正确的手机号码！',
        icon: 'none'
      })
      return
    }
    if (this.data.repairBody.appointment === '') {
      wx.showToast({
        title: '请选择预约日期！',
        icon: 'none'
      })
      return
    }
    if (this.data.repairBody.description === '') {
      wx.showToast({
        title: '请填写问题描述！',
        icon: 'none'
      })
      return
    }
    const res = await setRepair(this.data.repairBody)
    console.log(res.code === 10000);
    if (res.code === 10000) {
      this.setData({
        repairBody: {
          id: '',
          houseId: '',
          repairItemId: '',
          mobile: '',
          appointment: '',
          description: '',
          attachment: [] as { id: string, url: string }[]
        }
      })
      wx.navigateBack()
    }
  },
  onLoad() {
    this.getHouseList()
    this.getRepairItemList()
    const repair = wx.getStorageSync('repair')
    if (repair) {
      getRepairD(repair).then(res => {
        this.setData({
          repairBody: res.data,
          repairItem: res.data.repairItemName,
          houses: res.data.houseInfo
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    wx.removeStorageSync('repair')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
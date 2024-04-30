import { getVisitorD } from '../../api/VisitorInvite'
Page({
  data: {
    codeData: {
      id: '',
      houseInfo: '',
      url: '',
      validTime: 0,
      encryptedData: ''
    },
    time: ''
  },
  onLoad() {
    const id = this.options.id
    getVisitorD(id as string).then(res => {
      this.getTime(res.data.validTime)
      this.Interval()
      this.setData({
        codeData: res.data
      })
    })
  },
  getTime(time: any) {
    let s = Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60)
    let m = Math.floor(time / 60 % 60) < 10 ? '0' + Math.floor(time / 60 % 60) : Math.floor(time / 60 % 60)
    let h = Math.floor(time / 60 / 60) < 10 ? '0' + Math.floor(time / 60 / 60) : Math.floor(time / 60 / 60)
    this.setData({
      time: `${h}:${m}:${s}`
    })
  },
  Interval() {
    const interval = setInterval(() => {
      this.setData({
        'codeData.validTime': this.data.codeData.validTime - 1
      })
      this.getTime(this.data.codeData.validTime)
      if (this.data.codeData.validTime <= 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
})
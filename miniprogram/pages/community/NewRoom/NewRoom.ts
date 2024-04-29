import { FetchNewRoom } from "../../../api/NewRoom";

// pages/community/NewRoom/NewRoom.ts
Page({
  data: {
    SelectedHouse: '新府花园小区1栋701',
    radio: '1',
    mobile: '18790196513',
    visitorName: '李有田',
    idcardFrontUrl: '',
    idcardBackUrl: ''
  },
  // 实时更新
  NameChange(e: Object) {
    this.setData({
      visitorName: e.detail.value
    })
  },
  mobileChange(e: Object) {
    this.setData({
      mobile: e.detail.value
    })
  },
  async PostNewRoom(): Promise<void> {
    const res = await FetchNewRoom({
      point: '翻斗花园',
      building: '1号楼',
      room: '1024',
      name: this.data.visitorName,
      gender: parseInt(this.data.radio),
      mobile: this.data.mobile,
      idcardFrontUrl: this.data.idcardFrontUrl,
      idcardBackUrl: this.data.idcardBackUrl
    });
    console.log(res);
    wx.navigateBack()
  },
  async PostPortrait(e: any) {
    const Token = wx.getStorageSync('token');
    // console.log(Token.token);
    // console.log(e)
    // 1、用户选择图片
    const res = await wx.chooseMedia({
      count: 1,
      mediaType: ['image'], // 可以选择的文件类型
      sizeType: ['compressed'], // 选择到的图片进行压缩
    })
    console.log(res);
    // 2、上传到服务器
    wx.uploadFile({
      filePath: res.tempFiles[0].tempFilePath,
      name: 'file',
      url: 'https://live-api.itheima.net/upload',
      header: {
        Authorization: 'Bearer ' + Token.token,
      },
      success: (res) => {
        // console.log(res)
        const { code, data } = JSON.parse(res.data)
        if (code !== 10000) {
          wx.showToast({ title: '上传失败' })
          return;
        }
        // 成功
        this.setData({
          // 通过自定义属性直接存储到data数据里面去
          [e.mark.type]: data.url
        })
      }
    })
  }
})
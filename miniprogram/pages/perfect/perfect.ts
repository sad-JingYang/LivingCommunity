import { FetchPutInfo } from "../../api/EditInfo";

// pages/perfect/perfect.ts
Page({
  data: {
    avatar: '',
    nickName: ''
  },
  handleNickName(eve: Object) {
    this.setData({
      nickName: eve.detail.value
    })
  },
  async EditInfo() {
    const { data: res } = await FetchPutInfo({
      nickName: this.data.nickName,
      avatar: this.data.avatar
    });
    console.log(res);
  },
  onChooseavatar() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        // 选择成功
        const tempFiles = res.tempFiles;
        // 获取选择的文件路径
        const filePath = tempFiles[0].path;
        // 将文件路径赋值给 data 中的 avatar
        this.setData({
          avatar: filePath
        });
      }
    })
  },
  onLoad(options) {
    this.setData({
      avatar: options.avatar
    })
    this.setData({
      nickName: options.nickName
    })
  },
  onUnload() {
    this.EditInfo();
  }
})
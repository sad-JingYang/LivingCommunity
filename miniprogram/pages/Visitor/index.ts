// pages/Visitor/index.ts
Page({
  data: {
    show: false,
    actions: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
    radio: '1',
    popupShow: false
  },
  onLoad() { },
  onShow() { },
  onHide() { },
  onClose() {
    this.setData({ show: false });
  },
  onSelect() {
    this.setData({ show: true });
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  // POPUP
  showPopup() {    
    this.setData({ popupShow: true });
  },
  ClosePopup() {
    this.setData({ popupShow: false });
  }
})
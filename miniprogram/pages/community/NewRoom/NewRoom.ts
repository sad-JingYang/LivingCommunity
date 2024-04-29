// pages/community/NewRoom/NewRoom.ts
Page({
  data: {
    SelectedHouse: '新府花园小区1栋701',
    radio: '1',
    mobile: '18790196513',
    visitorName: '李有田'
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
  PostPortrait() {
    console.log(1);
  }
})
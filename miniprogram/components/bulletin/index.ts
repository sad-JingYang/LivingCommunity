// components/bulletin/index.ts
Component({
  properties: {
    announcement: {
      type: Array as ArrayConstructor,
      value: [],
    }
  },
  data: {},
  methods: {
    // 跳转页面
    JumpPage(event) {
      let Id = event.currentTarget.dataset.index;

      wx.navigateTo({
        url: `/pages/BulletinDetails/index?Id=${Id}`
      })
    }
  }
})
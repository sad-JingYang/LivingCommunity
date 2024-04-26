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
      console.log(event);
      
      wx.navigateTo({
        url: '/pages/BulletinDetails/index'
      })
    }
  }
})
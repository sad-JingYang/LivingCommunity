// app.ts
App({
  globalData: {},
  routerGuard: {
    beforeEach(to, from, next) {
      // 在进入页面之前执行的逻辑
      console.log('before each');
      const token = wx.getStorageSync("token")
      console.log(token);

      // 判断是否满足访问条件：token
      if (!token) {
        wx.navigateTo({
          url: '/pages/Login/index'
        });
      } else {
        next();
      }
    },
    afterEach(to, from) {
      // 在离开页面之后执行的逻辑
      console.log('after each');
    }
  },
  onLaunch() { }
})
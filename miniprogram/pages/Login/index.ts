// pages/perfect/index.ts
Page({
  data: {
    num: 10,
    time: null as number | null,
    title: '获取验证码',
    mobile: '18790196513',
    code: ''
  },
  onLoad() { },
  onReady() { },
  // 获取验证码

  // 倒计时
  DownTimes() {
    if (!this.data.time) {
      this.setData({
        num: this.data.num - 1,
        title: `${this.data.num}秒后重新获取`
      });
      const intervalId = setInterval(() => {
        if (this.data.num == 0) {
          clearInterval(this.data.time!);
          this.setData({
            num: 60,
            time: null,
            title: '获取验证码'
          });
        } else {
          this.setData({
            num: this.data.num - 1,
            title: `${this.data.num}秒后重新获取`
          });
        }
      }, 1000);
      this.setData({
        time: intervalId,
      });
    }
  }
})
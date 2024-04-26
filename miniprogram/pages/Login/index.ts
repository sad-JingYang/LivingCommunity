import { FetchCode, FetchLogin } from "../../api/login";

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
  async GetCode(): Promise<void> {
    const { data: res } = await FetchCode(this.data.mobile);
    console.log(res.code);
    // 给用户提示
    wx.showToast({
      title: res.code,
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 2000    //持续时间为 2秒
    });
    this.DownTimes();
  },
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
  },
  // 赋值phone
  modelphone(ev: Object): void {
    this.setData({
      mobile: ev.detail.value
    })
  },
  // 赋值code
  modelcode(ev: Object): void {
    this.setData({
      code: ev.detail.value
    })
  },
  // 登录
  async Login(): Promise<void> {
    const { data: res } = await FetchLogin({
      mobile: this.data.mobile,
      code: this.data.code
    });
    wx.setStorage({
      key: "token",
      data: res
    })
    wx.showToast({
      title: '登录成功！',
      icon: 'none',
      duration: 2000
    })
    wx.navigateBack({
      delta: 1
    });
  }
})
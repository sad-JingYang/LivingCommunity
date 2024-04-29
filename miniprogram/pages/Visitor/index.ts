import { DataItem } from "typings/VisitorInvite";
import { FetchAddVisitor, FetchMyHouse } from "../../api/VisitorInvite";

// pages/Visitor/index.ts
Page({
  data: {
    HouseAll: [] as DataItem[],
    show: false,
    actions: [] as DataItem[],
    SelectedHouse: '',
    popupShow: false,
    // picker time
    maxDate: new Date(2024, 3, 29).getTime(), // 4月
    minDate: new Date(2024, 4, 1).getTime(),  // 5月
    radio: '1',
    yubase: '请选择预约日期',
    currentDate: '',
    visitroName: '',
    mobile: '',
    HouseId: ''
  },
  onLoad() { },
  onShow() {
    this.GetMyHouse()
  },
  onHide() { },
  onClose() {
    this.setData({ show: false });
  },
  onSelect(event: any) {
    const { name } = event.detail;
    if (name) {
      const selectedHouse = this.data.HouseAll.find(ele => ele.name === name);
      if (selectedHouse) {
        const { id } = selectedHouse;
        console.log(selectedHouse);
        this.setData({
          SelectedHouse: name,
          HouseId: id
        });
        return;
      }
    }
    this.setData({ show: true });
  },
  onChange(event: any) {
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
  },
  // 获取我的房屋信息
  async GetMyHouse(): Promise<void> {
    const res = await FetchMyHouse();
    // 全部信息
    this.setData({
      HouseAll: res.data
    });
    // Select
    const actions = res.data.map(item => ({ name: item.name }));
    this.setData({
      actions: actions
    })
  },
  // picker
  ConfirmPicker(eve: any): void {
    console.log('Confirm', eve.detail);
    // currentDate: this.formatDate(new Date(e.detail))
    this.setData({ popupShow: false, currentDate: this.formatDate(new Date(eve.detail)) })
    console.log(this.data.currentDate);
  },
  // 事件格式化
  formatDate(timestamp: any) {
    // 创建一个新的 Date 对象，以毫秒数形式传入时间戳
    var date = new Date(timestamp);

    // 获取年、月、日
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 月份是从 0 开始的，所以要加 1
    var day = date.getDate();

    // 将月份和日期格式化为两位数的字符串
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    // 返回格式化后的日期字符串
    return year + '年' + month + '月' + day + '日';
  },
  // 表单信息同步
  NameChange(e: Object): void {
    this.setData({
      visitroName: e.detail.value
    });
  },
  MobileChange(e: Object): void {
    this.setData({
      mobile: e.detail.value
    });
  },
  async FetchAddVisitor(): Promise<void> {
    const visitDate = this.data.currentDate.replace(/年|月/g, "-").replace(/日/, "");
    const res = await FetchAddVisitor({
      houseId: this.data.HouseId,
      name: this.data.visitroName,
      gender: Number(this.data.radio),
      mobile: this.data.mobile,
      visitDate: visitDate
    });
    wx.reLaunch({
      url: '/pages/home/index'
    })
  }
})
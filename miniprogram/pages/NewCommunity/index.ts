// pages/NewCommunity/index.ts
// 导入腾讯位置服务
import QQMap from '../../utils/qqmap'

Page({
  data: {
    points: [
      {
        id: "8554926561532954649",
        title: "弥陀寺路1号院",
        _distance: 317.89
      },
      {
        id: "15629574721652404270",
        title: "环城西路小区",
        _distance: 323.51
      },
      {
        id: "13619793273356353624",
        title: "弥陀寺路小区",
        _distance: 325.71
      },
      {
        id: "8327934606648353202",
        title: "环城西路50号小区",
        _distance: 331.19
      },
      {
        id: "11463353513023667874",
        title: "安吉路26号院",
        _distance: 344.84
      }
    ],
    address: []
  },
  onLoad() {
    // 获取用户经纬度
    // this.getLoaction();
  },
  async getLoaction() {
    // 调用小和序 API 获取用户位置
    const { latitude, longitude } = await wx.getLocation()
    // 获取周边小区
    this.getPoint(latitude, longitude)
  },
  getPoint(latitude, longitude) {
    // 逆地址解析（根据经纬度来获取地址）
    QQMap.reverseGeocoder({
      location: [latitude, longitude].join(','),
      success: ({ result: { address } }) => {
        // 数据数据
        this.setData({ address: address });
      },
    })

    // search 是实现地点搜索功能的方法
    QQMap.search({
      keyword: '住宅小区', //搜索关键词
      location: [latitude, longitude].join(','), //设置周边搜索中心点
      page_size: 5,
      success: (result) => {
        // 过滤掉多余的数据
        const points = result.data.map(({ id, title, _distance }) => {
          return { id, title, _distance }
        })
        // 渲染数据
        this.setData({ points: points });
      }
    })
  },
  // JumpPage
  JumpPage(): void {
    wx.navigateTo({url:'/pages/community/building/building'})
  }
})
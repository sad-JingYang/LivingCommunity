// 请求配置的接口，包含请求的URL、方法和可选的数据
interface RequestConfig {
  url: string;
  method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
  data?: any;
}

/**
 * 接口返回的最外层的类型约束
 * T代表的是具体返回的数据类型约束
 * */
type Data<T> = {
  code: number;
  message: string;
  data: T;
};

// 接口请求基地址
const baseUrl: string = 'https://live-api.itheima.net';

export default function request<T>(config: RequestConfig): Promise<Data<T>> {
  return new Promise((resolve) => {
    wx.request({
      url: baseUrl + config.url,
      method: config.method,
      data: config.data,
      success: (res: any) => {
        const response: Data<T> = { code: res.statusCode, message: "Success", data: res.data.data };
        resolve(response);
      },
      fail: (err: any) => {
        console.log(err);
      }
    })
  })
}
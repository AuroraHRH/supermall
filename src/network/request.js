// 1.如果你需要封装多个实例，不要写成export default 这种导出方式，这种导出方式只会导出一个实例
// 2.考虑拓展性

import axios from "axios";

export function request(config){
  // 这里本身的返回值其实返回的就是一个promise，所以不用再return一个promise
    const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  
  })

  // 2.1 axios拦截器
  // 拦截请求
  instance.interceptors.request.use(config => {
    return config
  },err => {
    // 发送失败到这
    // console.log(err);
  });
    // 拦截响应
      // 2.2响应拦截
      instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data

      },err => {
        console.log(err);
      }
      )

  // 3.发送真正的网络请求
  return instance(config)
}

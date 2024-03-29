//**所有请求 js文件 */ 
import axios from 'axios'
import store from "@/store/store.js";
import { updateAppLoading } from '@/store/action.js';
axios.defaults.baseURL = 'http://localhost:3666';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*
url请求地址
method请求方法
params请求入参
*/
const requestApi = ({
  url,
  method = 'get',
  params
}) => {
  switch (method) {
    case 'post':
      return axios.post(url, {
        params
      })
    case 'get':
      return axios.get(url,
        params
      )
    default:
      break;
  }

}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let appLoading = store.getState().appLoading;
  if (appLoading && appLoading !== "loading") {
    store.dispatch(updateAppLoading('loading'))
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  let appLoading = store.getState().appLoading;
  if (appLoading && appLoading !== "loading") {
    store.dispatch(updateAppLoading('loading'))
  }
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  let appLoading = store.getState().appLoading;
  if (appLoading && appLoading !== "noloading") {
    store.dispatch(updateAppLoading('noloading'))
  }
  // 对响应数据做点什么
  if (response.status === 200 && response.data) return response.data;

}, function (error) {
  let appLoading = store.getState().appLoading;
  if (appLoading && appLoading !== "noloading") {
    store.dispatch(updateAppLoading('noloading'))
  }
  // 对响应错误做点什么
  return Promise.reject(error);
});
// ----------------------------这是分割线----------------------------
const queryRecommendVideo = (params) => {
  return requestApi({
    url: '/recommend/video',
    method: 'get',
    params
  })
}
export { queryRecommendVideo }
import axios from 'axios';
import qs from 'qs';
import store from '../store';
import $router from '@/router/';

function fillUrl(config) {
  // config.url = config.url.trim().replace(/^\/*/, '')
  config.url = config.url.trim()
  return config
}

function rebuildSendData(config) {
  config.headers['Content-Type'] = 'application/json'
  let data = config.data;
  if (!data || typeof data != 'object') {
    return config;
  }
  console.log('object')
  return config
}

function getUserToken(config) {
  let token = store.state.TOKEN
  console.log(token)
  if (token) {
    config.headers.token = token
  } 
  // else {
  //   token = localStorage.getItem('MerChantAuth');
  //   token && (config.headers.MerChantAuth = token);
  // }
  return config
}

// function getMerchantId(config) {
//   let merchantId = store.state.adminInfo.merchantId
//   if (merchantId) {
//     config.data.merchantId = merchantId
//   } else {
//     merchantId = localStorage.getItem('merchantId');
//     merchantId && (config.data.merchantId = merchantId);
//   }
//   return config
// }

const axiosConfig = {
  timeout: 5 * 60000,
}

const interceptors = {
  request(config) {
    config = fillUrl(config);
    config = rebuildSendData(config);
    config = getUserToken(config)
    // Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
    return config;
  },
  requestError(error) {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  },
  response(res) {
    const ret = res.data;
    // const { result } = ret;
    // let loadingInstance = Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
    // loadingInstance.close();
    return ret
  },
  responseError(error) {
    // let loadingInstance = Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
    // loadingInstance.close();
    console.log(error.response)
    if (error.response) {
      if (error.response.status == 511) {
        // $router.replace({ name: 'login' });
        $router.push({name: '/'})
      }
      // Message({
      //   message: error.response.data,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    } else {
      // Message({
      //   message: '请检查网络再重新连接',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    }
    return Promise.reject(error)
  },
}

const http = {};
const axiosInstance = axios.create(axiosConfig);
axiosInstance.interceptors.request.use(interceptors.request, interceptors.requestError);
axiosInstance.interceptors.response.use(interceptors.response, interceptors.responseError);

const _request = function (config) {
  return axiosInstance(config);
}

http.get = function ({ url, params = {}, noLoading = false }) {
  return _request({
    url,
    params,
    noLoading
  })
}

http.post = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'POST',
    data,
    noLoading
  })
}

http.postJson = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'POST',
    data,
    noLoading
  })
}

http.putForm = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'PUT',
    data: qs.stringify(data),
    noLoading
  })
}

http.putJson = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'PUT',
    data,
    noLoading
  })
}

http.delete = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'DELETE',
    data: qs.stringify(data),
    noLoading
  })
}

http.deleteJson = function ({ url, data = {}, noLoading = false }) {
  return _request({
    url,
    method: 'DELETE',
    data,
    noLoading
  })
}

http.setHeader = function (headers = {}) {
  axiosInstance.defaults.headers = Object.assign({}, axiosInstance.defaults.headers, headers);
}

http.request = function (config = {}) {
  return _request(config);
}

// 文件上传
http.upload = function (config = {}) {
  const _axios = axios.create(axiosConfig);
  _axios.interceptors.request.use(interceptors.request, interceptors.requestError);
  _axios.interceptors.response.use(interceptors.response, interceptors.responseError);
  return _axios.request(config);
}


export default http;
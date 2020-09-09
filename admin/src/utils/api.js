import http from '@/utils/http';

const basUrl = "http://192.168.50.157:8000/api/admin"

const api = {
  // 
  home(params) {
    return http.get({
      url: `${basUrl}/home`,
      params,
    });
  },
  // 保存文章
  saveArticle(data) {
    return http.post({
      url: `${basUrl}/saveArticle`,
      data,
    });
  },
  // 注册
  register(data) {
    return http.post({
      url: `${basUrl}/register`,
      data,
    });
  },
  // 登陆
  login(data) {
    return http.post({
      url: `${basUrl}/login`,
      data,
    });
  },
}

export default api;
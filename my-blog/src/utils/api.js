import http from '@/utils/http';

const basUrl = "http://192.168.50.157:8000/api"

const api = {
  // 登陆
  login(data) {
    return http.post({
      url: `${basUrl}/admin/login`,
      data,
    });
  },
  // 获取文章
  article(data) {
    return http.post({
      url: `${basUrl}/blog/article`,
      data,
    });
  },
}

export default api;
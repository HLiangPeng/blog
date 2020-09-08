import http from '@/utils/http';

const basUrl = "http://192.168.50.157:8000/"

const api = {
  // 
  home(params) {
    return http.get({
      url: `${basUrl}api/home`,
      params,
    });
  },
  // 保存文章
  saveArticle(data) {
    return http.post({
      url: `${basUrl}api/admin/saveArticle`,
      data,
    });
  },
}

export default api;
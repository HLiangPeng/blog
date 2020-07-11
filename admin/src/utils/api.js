import request from './request'


export default {
	getArticleList(query) {
		return request({
			url: '/blog/list',
			method: 'get',
			params: query
		})
	}
}
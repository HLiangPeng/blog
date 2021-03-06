const utils = {
	//转义方法
	escape2Html: (str) => {
		str = str.replace(/<img/gi, '<img style="max-width:100%;height:auto" ');
		return str;
	},
	// 手机号码验证
	checkPhone: (phone) => {
		if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
			return false;
		} else {
			return true
		}
	},
	// 邮箱验证
	checkEmail: (email) => {
		if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))) {
			return false;
		} else {
			return true
		}
	},
	// 时间戳转换
	time: (time) => {
		const date = new Date(time)
		const Y = date.getFullYear() + '-';
		const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
		return Y + M + D
	},
	//判断字符是否为空的方法
	isEmpty: (obj) => {
		if (typeof obj == "undefined" || obj == null || obj == "") {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = utils

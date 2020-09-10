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
	},
	// 中文文艺日期
	timeZh(time){
		let year = time.slice(0,4),
		month = time.slice(5,7),
		day = time.slice(8,10),
		monthArr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		return monthArr[month-1] + ' ' + day + ', ' + year
	}
}

module.exports = utils

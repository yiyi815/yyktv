	// //接口域名
	// const PRE_CORE_URL = "https://test-api.meiktv.com/";
	// const PRE_HD_URL = "https://hd-test.meiktv.com";
	// const PRE_STORE_URL = "https://store.api.pre.meiktv.com";
	//
	// const PRO_CORE_URL = "https://api.meiktv.com";
	// const PRO_HD_URL = "https://hd.meiktv.com";
	// const PRO_STORE_URL = "https://store.api.meiktv.com";
	//
    // var MEIKTV_URL = PRE_CORE_URL;
	// var MEIKTV_HD_URL = PRE_HD_URL;
	// var MEIKTV_STORE_URL = PRE_STORE_URL;
	// var href = window.location.href;
	// // console.log("href:"+href)
	// if (href.indexOf("//www.meiktv.com") != -1) {
	// 	MEIKTV_URL = PRO_CORE_URL;
	// 	MEIKTV_HD_URL = PRO_HD_URL;
	// 	MEIKTV_STORE_URL = PRO_STORE_URL;
	// } else {
	// 	MEIKTV_URL = PRE_CORE_URL;
	// 	MEIKTV_HD_URL = PRE_HD_URL;
	// 	MEIKTV_STORE_URL = PRE_STORE_URL;
	// }
	//
	// /**
	//  * 封装请求
	//  * @param {*} type 请求方式
	//  * @param {*} url 请求地址
	//  * @param {*} dataSend 参数
	//  * @param {*} cb 回调函数
	//  */
	// var myAjax = function (type, url, dataSend, cb) {
	// 	$.ajax({
	// 		type: type,
	// 		url: url,
	// 		data: dataSend,
	// 		async: true,
	// 		success: function (data) {
	// 			if (data.code == 200) {
	// 				cb(data)
	// 			} else {
	//
	// 			}
	// 		},
	// 		error: function () {
	//
	// 		}
	// 	});
	// }
	//
	// /**
	//  * 封装请求
	//  * @param {*} type 请求方式
	//  * @param {*} url 请求地址
	//  * @param {*} dataSend 参数
	//  * @param {*} callback 回调函数
	//  */
	// var request = function (type, url, data, callback) {
	// 	$.ajax({
	// 		type: type,
	// 		url: url,
	// 		data: data,
	// 		// async: true,
	// 		success: function (res) {
	// 			if (res.code == 200) {
	// 				callback && callback(res);
	// 			} else {
	//
	// 			}
	// 		},
	// 		error: function () {
	//
	// 		}
	// 	});
	// }

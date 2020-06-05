const base_url = 'http://localhost:8020';
export default (params) => {
	uni.showLoading({
		title: '加载中...'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + params.url,
			method: params.method || 'GET',
			data: params.data || {},
			success: (res) => {
				if (res.resCode !== 0) {
					return uni.showToast({
						title: res.resDes || '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (error) => {
				uni.showToast({
					title: '请求接口失败'
				});
				reject(error)
			}
		})
	})
}

import http from './request'
const message = {
    loading: false,
    errMsg: false,
    total: true
}
export default function fetch  (opt, fetchOpt =message ){
    const {loading, errMsg, total} = fetchOpt
    if(loading) {
        uni.showLoading({title: '加载中...'})
    }
    return http.requset(opt, opt.method).then(res => {
        // 处理业务code
        if(loading) {
            uni.hideLoading()
        }
        return res
    }).catch(err => {
         console.log(err)
        // 处理网络请求页
          if(loading) {
              uni.hideLoading()
          }
		if(errMsg) {
			return err
		}else {
			if(total) {

				uni.showToast({title: err.data.message})
			}
		}
    })

}

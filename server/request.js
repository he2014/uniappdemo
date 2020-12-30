class Request {
  requset(options={}, method='GET') {
     return new Promise((resolve, reject) =>{
         uni.request({
             ...options,
             method,
             dataType: 'json',
             success(res) {
                 const {statusCode} = res
                 if((statusCode >= 200 && statusCode<300) || statusCode === 304 ) {
                     resolve(res)
                 }else {
                     reject(res)
                 }
             },
             fail(res) {
                 reject(res)
             }
         })
     } )
 }
}
export default new Request()

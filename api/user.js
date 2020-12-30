import  http from '../server'
export const  getDetail  =data => {
    return http({
        url: 'http://222.128.31.239/yuliao/admin/manager/admin/activity/static/list',
        data,
    }, {
        total: true,
        loading: true
    })
}

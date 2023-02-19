import request from '@/utils/request'
import qs from 'qs'

export function getList(list) {
    const data = qs.stringify(list)
    return request({
        url: '/mock/listApi',
        method: 'post',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data
    })
}
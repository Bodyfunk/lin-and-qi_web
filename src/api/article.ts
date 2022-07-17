import request from '../utils/https'


// 获取文章列表
export function getArticleList(query) {
    return request({
        url: '/articles',
        method: 'get',
        params: query
    })
}

//获取文章详情
export function getArticleInfo(cate, title) {
    return request({
        url: '/article/' + cate + '/' + title,
        method: 'get',
    })
}
import axios  from "axios";

const baseurl ="http://localhost:3000";

//封装获取轮播图的api 调用例子：/banner，/banner？type=2  type=0，1，2，3
export function getBanner(type=0){
    return axios.get(`${baseurl}/banner?type=${type}`);
}

//对外抛出
// export default {getBanner};

//封装获取歌单列表的api 调用例子：/personalized?limit=${limit}`
export function getMusic(limit=10){
    return axios.get(`${baseurl}/personalized?limit=${limit}`);
}

// 歌单详情
export function getMusiclist(id){
    return axios.get(`${baseurl}/playlist/detail?id=${id}`);
}
// 封装获取歌词api
export function getLyric(id){
    return axios.get(`${baseurl}/lyric?id=${id}`);
}
//搜索接口
export function searchMusic(keywords){
    return axios.get(`${baseurl}/search?keywords=${keywords}`);
}
//对外抛出
export default {getBanner,getMusic,getMusiclist,getLyric,searchMusic};
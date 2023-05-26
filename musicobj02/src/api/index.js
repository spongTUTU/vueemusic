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

//对外抛出
export default {getBanner,getMusic};
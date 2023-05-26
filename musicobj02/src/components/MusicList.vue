<template>
    <div class="icon2">
        <!-- music列表musiclist -->
        <div class="icon2-top">
            <div class="icon2-top-left">
                发现好歌单
            </div>
            <router-link to="/gedan" class="icon2-top-right">
                <button>查看更多</button>
            </router-link>
            <router-view></router-view>
        </div>
        <div class="icon2-bottom">
            <div class="icon2-2" v-for="(item, index) in arr2" :key="index">
                <div class="icon2-top2" style="position:relative;">
                    <img :src="item.picUrl" />
                    <div class="tet" style="position: absolute;top:0;right:0;color: white;font-size: 0.28rem;margin-right: 10px;margin-top: 10px;">
                        ▶️{{item.trackCount}}万
                    </div>
                </div>
                <div class="icon2-bottom2">
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getMlist} from "@/api/index.js"
export default {
    name: "musiclist",
    data() {
        return {
            arr2:[
                {picUrl:"https://www.yxsx.cn/uploadfile/202207/b85d96c7abee0a5.jpg",name:"不要轻信视频中的广告，谨防上当受骗! 如果无",trackCount:1},
                {picUrl:"https://img.zcool.cn/community/01b48c6052b9b411013fb117fd75c0.jpg@2o.jpg",name:"不要轻信视频中的广告，谨防上当受骗! 如果无",trackCount:1},
                {picUrl:"https://img.phb123.com/uploads/allimg/210309/58-210309162S0-51.png",name:"不要轻信视频中的广告，谨防上当受骗! 如果无",trackCount:2}
            ]
        }
    },
    async mounted(){ //async...await 异步ajax请求函数 //替换假数据
        var res=await getMlist(100);
        // this.arr2=res.data.result;
        // this.arr2[0]=res.data.result[0];
        for(var i=0;i<3;i++){
            this.arr2[i]=res.data.result[i];
        }
        console.log(res);
    }
}
</script>
<style lang="less">
.icon2{
    margin-top: 30px;
    width: 98%;
    margin: 0 auto;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    .icon2-top{
    width:98%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    }
    .icon2-top-left{
    width: 30%;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
    }
    .icon2-top-right{
    width: 25%;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .icon2-bottom{
    width: 100%;
    height: 175px;
    display: flex;
    justify-content: space-around;
    }
    .icon2-2{
    width:30%;
    height:175px;
    }
    .icon2-top2{
    width:100%;
    height:120px;
    border-radius: 10px;
    }
    .icon2-bottom2{
    margin-top: 10px;
    width:100%;
    height:40px;
    font-size: 12px;
    color: #999;
    }
    img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    /* object-fit: cover;
    object-position: 50% 20%; */
    }
}
</style>
<template>
    <div id="swipercom">
        <!-- 轮播图swipercom -->
        <div class="swiper-container" id="swiperIndex">
            <!-- 加载图片 -->
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgs.imges" :key="index">
                    <img :src="item.pic" alt="" >
                </div>    
            </div>
            <!-- 小圆点切换分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import "swiper/css/swiper.css"
import Swiper from "swiper"
// @指的是项目目录 src
import {getBanner} from "@/api/index.js"
import { onMounted , onUpdated, reactive} from "vue"
export default{
    name:"swipercom",
    setup(){
        const imgs=reactive({
            imges:[]
        })
         onMounted(async()=>{ //iew与model绑定成功之后
            var res=await getBanner(1);
            imgs.imges=res.data.banners;
            console.log(res);
        })
        onUpdated(()=>{
            var myswiper=new Swiper("#swiperIndex",{
            //autoplay:true,//自动播放
            loop:true,//循环模式
            //分页器
            pagination:{
                el:".swiper-pagination",
                clickable:true//分页小圆点可以点击
            }
        })
        })
        return {imgs}
    }
}
</script>

<style lang="less">
    #swipercom{
        width: 7.5rem;
    #swiperIndex.swiper-container{
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        
        .swiper-slide img{
            width: 100%;
        }
        .swiper-pagination-bullet-active{
            background-color: orangered;
        }
    
    }
    }
</style>
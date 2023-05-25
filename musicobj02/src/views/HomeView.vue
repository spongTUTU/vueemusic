<template>
  <div class="home">
   <!-- 头部导航 -->
   <top-nav></top-nav>
   <!-- 轮播图 -->
   <swiper-com></swiper-com>
   <!-- icon列表 -->
   <icon-list></icon-list>
   <!-- music列表 -->
   <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
//通过import去引入组件  impor 自定义组件名 form '需要引入的组件'
import HelloWorld from '@/components/HelloWorld.vue'
import topNav from '@/components/TopNav.vue'
import swiperCom from '@/components/SwiperCom.vue'
import musicList from '@/components/MusicList.vue'
import iconList from '@/components/IconList.vue'

export default {
  name: 'HomeView',
  // 在component中自定义完组件名字
  components: {
    HelloWorld,
    topNav,
    swiperCom,
    musicList,
    iconList
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#d1{
  width: 3rem;
  height: 3rem;
  background: skyblue;
  font-size: 0.3rem;
}
</style>


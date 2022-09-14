<template>
   <tab-bar>
       <tab-bar-item path="/home" activeColor="skyblue">
        <!-- 关于路径取别名 在webpack.base.config.js文件中修改 -->
        <img slot ="item-icon" src="~assets/img/tabbar/shouye.png" alt="">
        <img slot ="item-icon-active" src="~assets/img/tabbar/shouye_net.png" alt="">
        <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path="/category" activeColor="skyblue">
        <img slot ="item-icon" src="~assets/img/tabbar/fenlei.png" alt="">
        <img slot ="item-icon-active" src="~assets/img/tabbar/fenlei_net.png" alt="">
        <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path="/cart" activeColor="skyblue">
        <img slot ="item-icon" src="~assets/img/tabbar/shop.png" alt="">
        <img slot ="item-icon-active" src="~assets/img/tabbar/shop_net.png" alt="">
        <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="/profile" activeColor="skyblue">
        <img slot ="item-icon" src="~assets/img/tabbar/wode.png" alt="">
        <img slot ="item-icon-active" src="~assets/img/tabbar/wode_net.png" alt="">
        <div slot="item-text">我的</div>
       </tab-bar-item>
    </tab-bar>
</template>

<script>

  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'

  export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
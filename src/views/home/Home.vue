<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物中心</div></nav-bar>
    <!-- 将以下的轮播图抽成以个独立的组件储存在childComps -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from '@/components/content/tabControl/TabControl';
  import GoodsListItem from '@/components/content/goods/GoodsListItem';

  import HomeSwiper from './chiildComps/HomeSwiper';
  import RecommendView from './chiildComps/RecommendView';
  import FeatureView from './chiildComps/FeatureView';

  import{getHomeMultidata,getHomeGoods} from "network/home";
import GoodsList from '@/components/content/goods/GoodsList.vue';
  // import Swiper from 'components/common/swiper/Swiper'
  // import Swiper from 'components/common/swiper/SwiperItem'
  // 以上两行注释掉，因为使用了统一导出的对象index.js所以可以写成下面一行的方式
  export default{
    name:"Home",
    components:{
    NavBar,
    TabControl,
    GoodsListItem,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList
},
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          // 存储三组数据，还有对应的页码
          'pop': { page:0, list: []},
          'new': { page:0, list: []},
          'sell':{ page:0, list: []}
        }
      }
    },
    created(){
     // 在这created()需要注意内存回收,所以一般不写数据到这里面，而写到methods里面
    // 1、请求多个数据
      this.getHomeMultidata()
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods:{
          //  这里一般只写一些逻辑
      getHomeMultidata(){
        getHomeMultidata().then(res => {

        // res被回收，而res指向的data对象，在没有被再指向其它的变量时也会被回收，data数据会被销毁，所以这里需要再指向result才会存起来
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        // 页码第一次请求的数据，后面如果再请求可以页码+1，方便此方法复用
        const page =this.goods[type].page +1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
      })
      }
    }
  }
  // 函数调用 ->压入函数栈中（保存函数调用过程中所有的变量）
  // 函数调用结束 ->弹出函数栈（释放函数中的所有变量）
</script>
  
<style scoped>
  #home{
    padding-top: 43px;
  }
  .home-nav{
    background-color:skyblue;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    /* z-index 脱离文档流程度 */
  }
  .tab-control{
    /* 吸顶效果 */
    position: sticky;
    top: 44px;
    z-index:9;
  }
</style>
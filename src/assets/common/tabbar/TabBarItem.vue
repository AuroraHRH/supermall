<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 插槽放在div里面 -->
    <!-- 这样的封装方式，可以方便自己只是替换插槽内容，而前面的isActive不被更改 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 不建议下面注释的这2行代码这样写 -->
    <!-- <slot v-if="!isActive" name="item-icon"></slot> -->
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <slot v-else name="item-icon-active"></slot> -->
    <div :style="activeStyle"><slot name="item-text">我的</slot></div>
    
    </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'green'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        // console.log(this.$route);
        // 进行￥route路径和当前路径比较出来，路径一样true，路径不一样false
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
        console.log('itemClick');
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>
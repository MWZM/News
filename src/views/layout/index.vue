<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to='/'>
        <i slot="icon" class="iconfont iconshouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to='/QA'>
        <i slot="icon" class="iconfont iconwenda"></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item to='/video'>
        <i slot="icon" class="iconfont iconshipin"></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item to='/my'>
        <i slot="icon" class="iconfont iconwode"></i>
        <span v-if="$store.state.user">我的</span>
        <span v-else>未登录</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 40px;
}
</style>

<template>
  <div class="home">
    <div class="nav-bar" title="标题">
      <van-button slot="title"
      class="nav-bar-btn"
      size="small"
      round
      icon="search"
      >
      <!-- <van-icon name="search" /> -->
      搜索</van-button>
    </div>

    <van-tabs v-model="active" animated swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: #3195F9;
  height: 97px;
  text-align: center;
  line-height: 80px;
}
.van-nav-bar__title {
  max-width: 100%!important;
}
.nav-bar-btn {
  background-color: #5AAAFA;
  width: 555px;
  height: 64px;
  border: 0;
  color: #ffffff;
  .van-icon::before {
    font-size: 15px;
  }
}
</style>

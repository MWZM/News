<template>
  <div class="home">
    <div class="nav-bar" title="标题">
      <van-button slot="title"
      class="nav-bar-btn"
      size="small"
      round
      icon="search"
      to="/search"
      >搜索</van-button>
    </div>

    <van-tabs v-model="active" animated swipeable class="tabs">
      <van-tab :title="item.name" v-for="(item, index) in ChannelsInfo" :key="index">
        <Articlelist :channels='item'></Articlelist>
      </van-tab>
      <div slot="nav-right" class="lasttab">123</div>
      <div slot="nav-right" class="hamburgerbtn" @click="hamburgerbtn">
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- 点击右侧汉堡按钮展示的弹出层 -->
    <van-popup
    v-model="show"
    position="right"
    :style="{ height: '100%', width: '100%' }"
    closeable
    close-icon-position="top-left"
    >
    <SelectChannel></SelectChannel>
    </van-popup>
  </div>
</template>

<script>
import { getChannels } from '@/api/my.js'
import Articlelist from '../home/Articlelist/article-list'
import SelectChannel from '../../components/SelectChannel'
export default {
  name: 'homeIndex',
  components: {
    Articlelist,
    SelectChannel
  },
  data () {
    return {
      active: 0, // 控制默认显示 tabs 显示第几个
      ChannelsInfo: [], // 用于存储页面刚加载时获取到的频道信息
      show: false // 控制弹出层的显示与隐藏
    }
  },
  created () {
    // 获取全部频道信息函数
    this.getChannels()
  },
  methods: {
    // 获取到所有频道信息
    async getChannels () {
      try {
        const { data } = await getChannels()
        this.ChannelsInfo = data.data.channels
        console.log(data.data.channels)
      } catch (err) {
        console.log(err)
      }
    },
    // 汉堡按钮，点击显示频道按钮信息
    hamburgerbtn () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #3195F9;
  height: 97px;
  text-align: center;
  line-height: 70px;
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
  .van-icon {
    font-size: 30px;
  }
}
// 设置频道按钮的样式
/deep/ .tabs {
  .van-tab {
    border-bottom: 1px solid#EDEFF3;
    border-right: 1px solid #EDEFF3;
    width: 190px;
    height: 80px;
  }
  .van-tabs__nav--line {
    padding-bottom: 0;
  }
  .van-tabs__line {
    bottom: 0;
  }
  .lasttab {
    width: 80px;
    height: 80px;
    opacity: 0;
  }
  .van-tabs__wrap {
    padding-top: 100px;
  }
}
.hamburgerbtn {
  position: fixed;
  right: 0;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  opacity: 0.8;
  text-align: center;
  line-height: 80px;
}
</style>

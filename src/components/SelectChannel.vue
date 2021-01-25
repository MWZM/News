<template>
  <!-- 编辑频道页面 -->
  <div class="channelbox">
    <div class="mychannel">
      <span>我的频道</span>
      <van-button size='mini' round class="btn" @click="togglebtn">
        <div slot="default" v-show="!flag">编辑</div>
        <div slot="default" v-show="flag">完成</div>
      </van-button>
    </div>
    <!-- 用户频道部分 -->
    <van-grid gutter='10'>
      <van-grid-item :key="item.id" v-for="item in userChannels" :text="item.name">
        <i slot="icon" class="iconfont iconguanbi1" v-show="flag"></i>
      </van-grid-item>
    </van-grid>
    <!-- 下方推荐频道部分 -->
    <van-divider>频道推荐</van-divider>
    <van-grid gutter='10'>
      <van-grid-item :key="item.id" v-for="item in allChannels" :text="item.name" />
    </van-grid>
  </div>
</template>

<script>
// 导入获取数据的接口
import { getChannels, getAllChannels } from '../api/my'
export default {
  name: 'SeleChannelIndex',
  data () {
    return {
      userChannels: [], // 存储用户频道
      allChannels: [], // 存储全部频道
      flag: false // 点击编辑按钮控制关闭图标的显示与隐藏
    }
  },
  created () {
    this.getuserchannels() // 获取用用户频道函数
    this.getAllChannels() // 获取全部频道函数
  },
  methods: {
    // 获取用户频道
    async getuserchannels () {
      const { data } = await getChannels()
      this.userChannels = data.data.channels
    },
    // 获取全部频道
    async getAllChannels () {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    },
    // 点击编辑按钮切换编辑状态
    togglebtn () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="less" scoped>
.channelbox {
  padding: 100px 20px 20px;
  [class*=van-hairline]::after {
    border: unset
  }
}
/deep/.van-grid-item__content {
  background-color: #F3F5F5;
}
// 我的频道部分
.mychannel {
  display: flex;
  justify-content: space-between;
  height: 80px;
  font-size: 40px;
  padding: 0 20px;
  .btn {
    color: #FA8787;
    border: 1px solid #FA8787;
  }
}
/deep/.iconfont {
  position: absolute;
  top: -45px;
  left: 55px;
  font-size: 35px;
}
</style>

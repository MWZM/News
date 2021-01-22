<template>
  <div>
    <!-- 顶部背景图 -->
    <div class="van-nav-bar" v-if="$store.state.user">
      <!-- 放头像的盒子 -->
      <div class="login">
        <div class="header">
          <!-- 图片的组件 -->
          <van-image
          class="loginimg"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"/>
          <span class="text1">黑马老色批</span>
        </div>
        <!-- 编辑按钮 -->
        <div>
          <van-button round size="mini" class="editbtn">编辑按钮</van-button>
        </div>
      </div>
      <!-- 用户点赞数和粉丝页 -->
      <div class="userstar">
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
    <div class="van-nav-bar" v-else>
      <div class="notLogin">
        <div class="header" @click="login=$router.push('/login')">
          <img class="imgs" src="~@/assets/mobile.png" alt="">
          <span class="text">登陆 / 注册</span>
        </div>
      </div>
    </div>
      <van-grid :column-num="2">
        <van-grid-item  text="文字" />
        <van-grid-item  text="文字" />
      </van-grid>
    <div class="van-bar">
      <van-cell title="消息通知" />
      <van-cell title="小智同学" />
    </div>
    <div class="logout" @click="logout" v-if="$store.state.user">退出登录</div>
  </div>
</template>

<script>
import { getUserInfo } from '../../api/submit'
export default {
  name: 'myIndex',
  created () {
    // 获取用户列表信息
    this.getUserInfo()
  },
  data () {
    return {
    }
  },
  methods: {
    // 获取用户列表信息
    async getUserInfo () {
      try {
        const { data } = await getUserInfo()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    // 退出登陆
    logout () {
      // 退出登陆弹框
      this.$dialog.confirm({
        title: '标题',
        message: '是否退出登录？'
      }).then(() => {
        this.$store.commit('setToken', null)
        this.$router.push('/login')
        // on confirm
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  height: 360px;
  background: url('~@/assets/banner.png') no-repeat;
  background-size: cover;
  .userstar {
    display: flex;
    height: 130px;
    background-color: aqua;
    justify-content: space-around;
  }
}
.notLogin {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text {
      font-size: 34px;
      margin-top: 5px;
      color: #ffffff;
    }
    .imgs {
      margin-top: 110px;
      width: 132px;
      height: 132px;
    }
  }
}
.login {
  height: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text1 {
    font-size: 32px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-top: 76px;
    margin-left: 32px;
  }
  .loginimg {
    width: 132px;
    height: 132px;
    background-color: #ffffff;
    border-radius: 50%;
    margin-right: 15px;
    overflow: hidden;
  }
}
.editbtn {
  margin-right: 25px;
  margin-top: 76px;
}
.van-grid {
  height: 130px;
  display: flex;
}
.van-bar {
  margin-top: 15px;
}
.logout {
  height: 105px;
  font-size: 25px;
  text-align: center;
  line-height: 105px;
  margin-top: 15px;
  background-color: #ffffff;
  color: #D86262;
}
</style>

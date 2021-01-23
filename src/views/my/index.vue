<template>
  <div>
    <!-- 顶部背景图 -->
    <!-- 这是登陆后的头部 -->
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
        <div class="info">
          <div>1</div>
          <div>头条</div>
        </div>
        <div class="info">
          <div>1</div>
          <div>关注</div>
        </div>
        <div class="info">
          <div>1</div>
          <div>粉丝</div>
        </div>
        <div class="info">
          <div>1</div>
          <div>获赞</div>
        </div>
      </div>
    </div>
    <!-- 这是未登陆的盒子 -->
    <div class="van-nav-bar" v-else>
      <div class="notLogin">
        <div class="header" @click="login=$router.push('/login')">
          <img class="imgs" src="~@/assets/mobile.png" alt="">
          <span class="text">登陆 / 注册</span>
        </div>
      </div>
    </div>
      <van-grid :column-num="2">
        <van-grid-item  text="收藏" icon='star-o' class="star"/>
        <van-grid-item  text="历史" icon='clock-o' class="history"/>
      </van-grid>
      <!-- 消息通知和小智头同学部分 -->
    <div class="van-bar">
      <van-cell title="消息通知" />
      <van-cell title="小智同学" />
    </div>
    <!-- 退出登录按钮，这也是进行按需渲染的 -->
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
    align-items: center;
    justify-content: space-around;
    .info {
      color: #ffffff;
      font-size: 30px;
    }
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
.star {
  color: #EB5253;
}
.history {
  color: #FF9D1D;
}
</style>

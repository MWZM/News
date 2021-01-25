<template>
  <div>
    <div class="login-head">
      <van-icon name="arrow-left" class="icon" @click="back"/>登录</div>
    <van-form @submit="onSubmit" ref="LoginForm">
      <van-field
          v-model="userInfo.mobile"
          name="mobile"
          placeholder="请输入用户名"
          :rules="Formrules.mobile">
        <i slot="left-icon" class="iconfont iconshouji"></i>
      </van-field>
      <van-field
          v-model="userInfo.code"
          name="验证码"
          placeholder="请输入验证码"
          :rules="Formrules.code">
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>
        <template #button>
          <van-count-down :time="1000*2" format="sss" v-if="ShowOrHide" @finish='ShowOrHide=false'/>
          <van-button v-else size="small" color='#ECECEC' class="notebtn" native-type="button" @click="CheckCode">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit" class="btn">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, SMScode } from '@/api/submit.js'
export default {
  name: 'loginIndex',
  data () {
    return {
      userInfo: {
        mobile: '13619219935',
        code: '246810'
      },
      Formrules: {
        mobile: [{ required: true, message: '请填写用户名' }, { pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '手机号格式不正确' }],
        code: [{ required: true, message: '请填写用户名' }, { pattern: /^\d{6}$/, message: '验证码格式不正确' }]
      },
      ShowOrHide: false
    }
  },
  methods: {
    // 登陆点击按钮
    async onSubmit () {
      this.$toast.loading({
        message: '登陆中...',
        forbidClick: true
      })
      try {
        const res = await login(this.userInfo)
        this.$toast.success('登陆成功')
        console.log('成功', res.data.data)
        this.$store.commit('setToken', res.data.data)
        this.$router.push('/my')
      } catch (err) {
        // console.log('登陆失败', err)
        if (err.response.status === 400) {
          this.$toast.fail('登陆失败')
        } else {
          this.$toast.fail('登陆失败，请稍后重试')
        }
      }
    },
    // 发送验证码点击按钮
    async CheckCode () {
      // console.log(this.$refs.LoginForm)
      this.$refs.LoginForm.validate('mobile')
      try {
        this.ShowOrHide = true
        await SMScode(this.userInfo.mobile)
        // console.log(res)
        this.$toast.success('验证码已发送，请注意查收')
      } catch (err) {
        // console.log(err)
        if (err.response.status === 429) {
          return this.$toast.fail('操作过于频繁，请稍后重试')
        } else {
          return this.$toast.fail('发送失败，请稍后重试')
        }
      }
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.login-head {
  width: 750px;
  height: 130px;
  background-color: #3195F9;
  color: aliceblue;
  text-align: center;
  line-height: 130px;
  font-size: 32px;
  .icon {
    position: absolute;
    left: 20px;
    top: 50px;
  }
}
.iconfont {
  font-size: 32px;
}
.notebtn {
  border-radius: 35px;
  color: #656565!important;
}
.btn {
  margin: 50px 0;
}
</style>

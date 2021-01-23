<template>
  <div class="articlebody">
    <!-- 下拉刷新功能 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" finished-text='刷新成功' loading-text='加载中'>
        <!-- 文章列表部分 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Article :articleList='item' v-for="(item, index) in list" :key="index"></Article>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleList } from '@/api/my'
import Article from '../../../components/article.vue'
export default {
  name: 'articlelistIndex',
  props: {
    channels: {
      type: Object,
      required: true
    }
  },
  components: {
    Article
  },
  data () {
    return {
      timestamp: '',
      list: [], // 用来存储获取到的文章数据
      loading: false, // 控制 加载中 显示与否
      finished: false, // 如果数据全部加载完成则会将 finish 转换为 false
      refreshing: false
    }
  },
  created () {
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      // 发送ajax请求
      // 下拉刷新
      // if (this.refreshing) {
      //   const { data } = await getArticleList({
      //     channel_id: this.channels.id,
      //     timestamp: this.timestamp || Date.now(),
      //     with_top: 0
      //   })
      //   const { results } = data.data
      //   this.list.unshift(...results)
      //   this.refreshing = false
      //   console.log(data.data, 'data')
      // }
      try {
        const { data } = await getArticleList({
          channel_id: this.channels.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 0
        })
        // console.log(data)
        const { results } = data.data
        console.log(results)
        this.list.push(...results)
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (err) {
        console.log(err)
      }
    },
    async onRefresh () {
      try {
        const { data } = await getArticleList({
          channel_id: this.channels.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 0
        })
        const { results } = data.data
        this.list.unshift(...results)
        this.refreshing = false
        console.log(data.data, 'data')
        // 关闭loading状态
        this.loading = false
      } catch (err) {
        console.log(err)
        this.loading = false
        this.$toast.fail('刷新失败')
      }
      // 清空列表数据
      // this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      // this.loading = true
      // this.onLoad()
      // console.log(this.refreshing)
    }
  }
}
</script>

<style lang="less" scoped>
.articlebody {
  padding-bottom: 100px;
  // height: 100vh;
  height: calc(100vh - 174px);
  overflow-y: auto;
}
</style>

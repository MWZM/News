<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in list" :key="index" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import { SearchResult } from '../../../api/search'
export default {
  name: 'SearchResult',
  props: {
    SearchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [], // 存储获取到的搜索结果的数据
      loading: false,
      finished: false,
      pages: 1, // 页数
      per_pages: 20 // 每次获取多少条数据
    }
  },
  methods: {
    // 加载获取搜索到的结果
    async onLoad () {
      try {
        const { data } = await SearchResult({
          page: this.pages,
          per_page: this.per_pages,
          q: this.SearchText
        })
        const { results } = data.data
        this.list = results
        console.log(data.data.results)
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (results.length) {
          this.pages++
        } else {
          this.finished = true
        }
      } catch (err) {
        this.$toast('获取数据失败')
        this.loading = false
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>

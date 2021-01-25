<template>
  <div>
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="flag=false"
      />
    </form>
     <!-- 搜索结果 -->
    <SearchResult
    v-if="flag"
    :SearchText='searchText'
    ></SearchResult>
    <!-- 联想搜索 -->
    <SearchAssocite
    v-else-if="searchText"
    :SearchText='searchText'
    @searchResult='onSearch'
    />
    <!-- 搜索历史 -->
    <SearchHistory v-else></SearchHistory>
  </div>
</template>

<script>
import SearchAssocite from './components/search-associate'
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
export default {
  name: 'SearchIndex',
  components: {
    SearchAssocite,
    SearchHistory,
    SearchResult
  },
  data () {
    return {
      searchText: '', // 搜索文本
      flag: false // 设置搜索结果的显示与隐藏
    }
  },
  methods: {
    // 搜索事件
    onSearch (item) {
      this.searchText = item
      console.log(item)
      this.flag = true
    },
    // 取消事件
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
</style>

<template>
  <div>
    <van-cell-group>
      <!-- 搜索历史标题部分 -->
      <van-cell title="搜索历史">
        <div slot="right-icon">
          <van-icon name="delete-o" />
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {},
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>

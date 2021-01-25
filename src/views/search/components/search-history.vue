<template>
  <div>
    <van-cell-group>
      <!-- 搜索历史标题部分 -->
      <van-cell title="搜索历史">
        <div slot="right-icon" @click="flag=false" v-if="flag">
          <van-icon name="delete-o"/>
        </div>
        <!-- 全部删除按钮 -->
        <div v-else>
          <span @click="delAllHistory">全部删除 </span>
          <span @click="flag=true">完成</span>
        </div>
      </van-cell>
      <van-cell :key="index" v-for="(item, index) in History" :title="item" @click="delThisHistory(item, index)">
        <div slot="right-icon">
          <van-icon name="close" v-show="!flag"/>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    History: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      flag: true // 进行删除按钮的显示与隐藏
    }
  },
  methods: {
    // 删除单个历史数据
    delThisHistory (item, index) {
      if (this.flag) {
        this.$emit('search', item)
      } else {
        this.History.splice(index, 1)
      }
    },
    // 删除全部历史数据
    delAllHistory () {
      this.History.splice(0)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

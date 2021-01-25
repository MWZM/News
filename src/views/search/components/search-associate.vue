<template>
  <div>
    <van-cell-group>
      <van-cell :key="index"
      v-for="(item, index) in AssociateList"
      icon="search"
      @click="$emit('searchResult', item)"
      >
        <div slot="title" v-html='Highlight(item, SearchText)'>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { SearchAssociate } from '../../../api/search'
import { debounce } from 'lodash' // 按需导入 lodash 为搜索框做防抖处理

export default {
  name: 'SearchAssocite',
  props: {
    SearchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      AssociateList: [] // 存储联想结果数据
    }
  },
  watch: {
    SearchText: {
      handler: debounce(function (val) {
        this.Associate(val)
      }, 200),
      immediate: true
    }
  },
  methods: {
    // 联想搜索函数
    async Associate (val) {
      try {
        const { data } = await SearchAssociate(val)
        this.AssociateList = data.data.options
        console.log(data.data.options)
      } catch (err) {
        this.$toast('搜索失败，请稍后重试')
      }
    },
    // 关键字高亮
    Highlight (item, keywords) {
      const reg = new RegExp(keywords, 'ig')
      return item.replace(reg, `<span class='KeywordsColor'>${keywords}</span>`)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.KeywordsColor {
  color: skyblue;
}
</style>

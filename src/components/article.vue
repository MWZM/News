<template>
  <div>
    <!-- 渲染没有图片的文章 -->
    <van-cell-group v-if="articleList.cover.type===0" class="typezero">
      <van-cell :title="articleList.title" class="van-multi-ellipsis--l2">
        <!-- 设置下方描述信息 -->
        <div slot="label">
          <span class="text">{{articleList.aut_name}}</span>
          <span class="text">{{articleList.collect_count}} 评论</span>
          <span class="text">{{articleList.pubdate | Revisiontime}}</span>
        </div>
      </van-cell>
    </van-cell-group>
    <!-- 渲染只有一张图片的文章 -->
    <van-cell-group v-if="articleList.cover.type===1" class="typeone">
      <van-cell :title="articleList.title" class="van-multi-ellipsis--l2">
        <!-- 设置插槽，插入右侧图片 -->
        <div slot="default" class="imgsbox">
          <van-image :src="articleList.cover.images[0]" class="img" />
        </div>
        <div slot="label" class="lableinfo">
          <span class="text">{{articleList.aut_name}}</span>
          <span class="text">{{articleList.collect_count}} 评论</span>
          <span class="text">{{articleList.pubdate | Revisiontime}}</span>
        </div>
      </van-cell>
    </van-cell-group>
    <!-- 渲染有三张图片的文章 -->
    <van-cell-group v-if="articleList.cover.type===3" class="typethree">
      <van-cell :title="articleList.title" class="van-multi-ellipsis--l2">
        <!-- 设置三张图片的插槽 -->
        <div slot="label" class="imgbox">
          <van-image
          fit="cover"
          class="imgs"
          :key="index"
          v-for="(item, index) in articleList.cover.images"
          :src="item" />
        </div>
        <div slot="label" class="lableinfo">
          <span class="text">{{articleList.aut_name}}</span>
          <span class="text">{{articleList.collect_count}} 评论</span>
          <span class="text">{{articleList.pubdate | Revisiontime}}</span>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import '../components/day'
export default {
  name: 'ArticleIndex',
  props: {
    articleList: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
// 设置没有图片时下面的描述信息
.typezero {
  .text {
    margin: 5px;
  }
}
// 设置只有一张图片时下方的描述信息
/deep/ .typeone {
  .van-cell__title {
    flex: unset;
    width: 70%;
  }
  .text {
    margin: 5px;
  }
  .lableinfo {
    margin-top: 130px;
  }
  .imgsbox {
    width: 200px;
    height: 200px;
  }
  .img {
    width: 100%;
    height: 100%;
  }
}
// 设置有三张图片时，下方的描述信息
.typethree {
  .imgbox {
    display: flex;
    justify-content: space-around;
    height: 200px;
  }
  .imgs {
    box-sizing: border-box;
    margin: 12px;
    width: 100%;
    height: 100%;
  }
  .text {
    margin: 5px;
  }
  .lableinfo {
    margin-top: 20px;
  }
}
</style>

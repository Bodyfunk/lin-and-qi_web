<template>
  <div class="main">
    <div class="articleCardList" v-if="articleCardList">
      <div v-for="item in articleCardList" :key="item.title" class="hover-Bulge">
        <article-card :articleInfo="item">
        </article-card>
      </div>
    </div>
    <div class="aside"></div>
  </div>
</template>

<script setup lang="ts">
import { userInfo } from '../../store/userInfo'
import articleCard from './component/articleCard.vue'
import { getArticleList } from '../../api/article'
import { ref } from 'vue-demi'

const store = userInfo()

const articleCardList = ref([])
//假数据
// articleCardList.value = [
//   {
//     banner:
//       'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660626683&t=a2d872398e38cd9a70ca79b3bd461219',
//     title: 'demo',
//     publisher: 'aaayi',
//     category: 'go',
//     summary:
//       'czcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwqewqewqczcxzcxddsadsadwq',
//   },
// ]

const getList = () => {
  getArticleList().then((res) => {
    console.log(res)
    articleCardList.value = res.items
  })
}
getList()
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin: 20px;
}

.articleCardList {
  flex: 1;
}

.hover-Bulge {
  transition: all 0.3s;
  border-radius: 10px;
}
.hover-Bulge:hover {
  box-shadow: 0 8px 10px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -3px);
}

.aside {
  width: 200px;
  background-color: aqua;
  height: 100%;
}
</style>
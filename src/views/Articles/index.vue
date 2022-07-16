<template>
  <div class="articleCardList" v-if="articleCardList">
    <div v-for="item in articleCardList" :key="item.title" class="hover-Bulge">
      <article-card :articleInfo="item">
      </article-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userInfo } from '../../store/userInfo'
import articleCard from './component/articleCard.vue'
import { getArticleList } from '../../api/article'
import { ref } from 'vue-demi'

const store = userInfo()

const articleCardList = ref([])

const getList = () => {
  getArticleList().then((res) => {
    console.log(res)
    articleCardList.value = res.items
  })
}
getList()
</script>

<style lang="scss" scoped>
.hover-Bulge {
  transition: all 0.3s;
  border-radius: 10px;
}
.hover-Bulge:hover {
  box-shadow: 0 8px 10px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -3px);
}
</style>
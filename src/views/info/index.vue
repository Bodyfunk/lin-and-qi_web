<template>
  <div class="info-main">
    <div v-html="articleContent" class="entry-content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue-demi'
import { useRoute } from 'vue-router'
import { getArticleInfo } from '../../api/article'

const articleContent = ref({})
const route = useRoute()
const query = route.query

const getInfo = () => {
  getArticleInfo(query.cate, query.title).then((res) => {
    articleContent.value = res
  })
}
getInfo()
</script>

<style scoped>
</style>
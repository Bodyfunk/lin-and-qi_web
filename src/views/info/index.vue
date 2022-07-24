<template>
  <div class="layout">
    <div class="left">
      <div class="fixed-catalogue">目录</div>
    </div>
    <div class="middle">
      <div class="info-main">
        <div v-if="loading">loading</div>
        <div v-else v-html="articleContent" class="entry-content"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue-demi'
import { useRoute } from 'vue-router'
import { getArticleInfo } from '../../api/article'

const loading = ref(true)
const articleContent = ref({})
const route = useRoute()
const query = route.query

const getInfo = () => {
  getArticleInfo(query.cate, query.title).then((res) => {
    loading.value = false
    articleContent.value = res
  })
}
getInfo()

const getH2 = () => {}
</script>

<style scoped lang="scss">
.info-main {
  padding: 50px 80px;
  margin-bottom: 50px;
  border-radius: 50px;
  background: linear-gradient(45deg, #e6e6e6, #ffffff);
  box-shadow: 15px -15px 30px #d9d9d9, -15px 15px 30px #ffffff;
}

.layout {
  display: flex;

  .left {
    flex: 1;
  }

  .middle {
    width: 50%;
  }

  .right {
    flex: 1;
  }
}

.fixed-catalogue {
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 99;
}

.comment-container {
  height: 200px;
}
</style>
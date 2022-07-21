<template>
  <div class="info-main">
    <div v-if="loading">loading</div>
    <div v-else v-html="articleContent" class="entry-content"></div>
  </div>
  <!-- <div class="comment-container"></div> -->
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { useRoute } from "vue-router";
import { getArticleInfo } from "../../api/article";

const loading = ref(true);
const articleContent = ref({});
const route = useRoute();
const query = route.query;

const getInfo = () => {
  getArticleInfo(query.cate, query.title).then((res) => {
    loading.value = false;
    articleContent.value = res;
  });
};
getInfo();
</script>

<style scoped>
.info-main {
  padding: 50px 80px;
  margin-bottom: 50px;
  border-radius: 50px;
  background: linear-gradient(45deg, #e6e6e6, #ffffff);
  box-shadow: 15px -15px 30px #d9d9d9, -15px 15px 30px #ffffff;
}

.comment-container {
  height: 200px;
}
</style>
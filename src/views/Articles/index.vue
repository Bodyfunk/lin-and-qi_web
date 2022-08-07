<template>
  <div class="layout">
    <div class="left">
    </div>
    <div class="middle">
      <div class="articleCardList" v-if="articleCardList">
        <div v-for="item in articleCardList" :key="item.title" class="hover-Bulge">
          <article-card :articleInfo="item">
          </article-card>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="classification">

      </div>
      <div class="calendar">

      </div>
      <div class="time-line">
        <el-timeline>
          <el-timeline-item v-for="(article, index) in articleCardList" :key="index" :timestamp="article.pubTime">
            {{article.title}}
          </el-timeline-item>
        </el-timeline>
      </div>
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
const query = ref({
  calendar: undefined,
})

const getList = () => {
  getArticleList(query).then((res) => {
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

.calendar {
}

.time-line {
  padding: 10px 20px;
}
</style>
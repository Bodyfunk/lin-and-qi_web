<template>
  <div class="layout">
    <div class="left">
      <div class="fixed-catalogue">
        <strong style="font-size: 18px;">导航目录:</strong>
        <ul class="catalogue-box">
          <li v-for="item in catalogueList" :key="item.title">
            <a :href="'#'+item.id"><span :style="'margin-left:'+(4*item.level)+'px;'">{{item.title}}</span> </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="middle">
      <div class="info-main">
        <div v-if="loading">loading</div>
        <div v-else v-html="articleContent" class="entry-content" id="previewer"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue-demi'
import { useRoute } from 'vue-router'
import { getArticleInfo } from '../../api/article'
// import Catalogue from './component/catalogue.vue'

interface CatalogueItem {
  id: string
  key: string
  title: string
  level: number
}

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

const catalogueList = ref<CatalogueItem[]>()
const getArticleNode = () => {
  //拿到文章内容的节点
  let parent = document.getElementById('previewer')
  //拿到文章里面的h1-h6标签
  let doms: NodeListOf<Element> | undefined =
    parent?.querySelectorAll('h1,h2,h3,h4,h5,h6')
  let hEles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  //结果集
  let catalogue: CatalogueItem[] = []
  let index = 0
  if (doms && doms.length > 0) {
    doms?.forEach((el) => {
      let nodeText = el.innerHTML.replace(/<\/?[^>]+>/g, '')
      nodeText = nodeText.replace(/&nbsp;/gi, '').replace(/:|：/, '')
      let name = el.nodeName.toLowerCase()
      if (hEles.includes(name)) {
        index++
        let id = `catalogue_${index}`
        // 为当前节点添加id
        el.setAttribute('id', id)
        let level = name.replace('h', '')
        catalogue.push({
          id: id,
          key: name,
          title: nodeText,
          level: Number(level),
        })
      }
    })
  }
  return catalogue
}

onMounted(() => {
  if (document.getElementById('previewer')) {
    catalogueList.value = getArticleNode()
  }
})

watch(articleContent, () => {
  nextTick(() => {
    catalogueList.value = getArticleNode()
  })
})
</script>

<style scoped lang="scss">
.info-main {
  padding: 50px 80px;
  margin-bottom: 50px;
  border-radius: 10px;
  background: linear-gradient(45deg, #e6e6e6, #ffffff);
  box-shadow: 6px -6px 12px #d9d9d9, -5px 5px 10px #ffffff;
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
  top: 10%;
  left: 0;
  z-index: 99;
  width: 20%;
  margin-left: 20px;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(45deg, #e6e6e6, #ffffff);
  box-shadow: 6px -6px 12px #d9d9d9, -5px 5px 10px #ffffff;

  li {
    padding: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
a:hover {
  background-color: rgba(100, 148, 237, 0.773);
}
.comment-container {
  height: 200px;
}
</style>
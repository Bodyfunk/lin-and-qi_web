<template>
  <div class="card-container">
    <el-card shadow="always" :body-style="{ padding: '0px'}" @click="gotoInfo">
      <div class="card-content">
        <div class="left">
          <el-image :src="articleInfo.banner" style="width:110px; height:110px" fit="fill" class="image-container"></el-image>
        </div>
        <div class="right w-full">
          <strong>{{articleInfo.title}}</strong>
          <el-row>
            <el-col :span="12">
              <div class="item">
                <div class="item-label">作者
                </div>
                <div class="item-content">{{articleInfo.publisher}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="item">
                <div class="item-label">分类
                </div>
                <div class="item-content">
                  <el-tag size="small" type="success">{{articleInfo.category}}</el-tag>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <div class="item">
              <div class="item-label">正文
              </div>
              <div class="item-content fixed-div">{{articleInfo.summary}}</div>
            </div>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const props = defineProps({
  // 文章信息
  articleInfo: Object,
})

const gotoInfo = () => {
  router.push({
    path: '/articles/info',
    query: {
      cate: props.articleInfo.category,
      title: props.articleInfo.title,
    },
  })
}
</script>

<style scoped lang="scss">
:deep .el-descriptions__label {
  font-weight: 700;
}

:deep .el-card {
  border-radius: 10px;
}

:deep .el-descriptions__header {
  margin-bottom: 5px;
}

.card-container {
  margin: 0 0 20px 0;
  box-sizing: border-box;
}

.card-content {
  display: flex;
  height: 110px;
  align-items: center;

  .left {
    height: 110px;

    .image-container {
      border-radius: 10px 0 0 10px;
    }
  }

  .right {
    padding: 10px 10px 0 10px;
    height: 110px;
    box-sizing: border-box;
  }
}

.item {
  display: flex;
  width: 100%;
  align-items: baseline;
  font-size: 14px;
  padding-top: 5px;
  .item-label {
    font-weight: 700;
    width: 50px;
  }

  .item-content {
    flex: 1;
    font-weight: 400;
  }
}

.fixed-div {
  width: 200px;
  height: 48px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

:deep .el-tag--small {
  height: 21px;
  line-height: 21px;
}
</style>
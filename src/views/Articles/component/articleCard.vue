<template>
  <div class="card-container">
    <el-card shadow="always" :body-style="{ padding: '0px'}">
      <div class="card-content">
        <div class="left">
          <el-image :src="articleInfo.banner" style="width:110px; height:100%" fit="fill" class="image-container"></el-image>
        </div>
        <div class="right w-full">
          <el-descriptions :title="articleInfo.title">
            <el-descriptions-item label="作者">{{articleInfo.publisher}}</el-descriptions-item>
            <el-descriptions-item label="分类">
              <el-tag size="small">{{articleInfo.category}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="正文">{{articleInfo.summary}}</el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // 文章信息
  articleInfo: Object,
})
</script>

<style scoped lang="scss">
:deep .el-descriptions__label {
  font-weight: 700;
}

:deep .el-card {
  border-radius: 10px;
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
    padding: 10px;
  }
}
</style>
<template>
  <div class="container">
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
      <div class="layout">
        <div class="left"></div>
        <div class="middle">
          <router-view></router-view>
        </div>
        <div class="right"></div>
      </div>

    </el-container>
  </div>
</template>

<script lang="ts">
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  },
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
.layout {
  display: flex;
  height: 100%;

  .left {
    flex: 1;
  }

  .middle {
    width: 1000px;
  }

  .right {
    flex: 1;
  }
}
</style>

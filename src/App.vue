<template>
  <div class="container">
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

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

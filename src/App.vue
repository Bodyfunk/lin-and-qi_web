<template>
  <el-container class="container">
    <div class="glass fixed-div"></div>
    <el-header class="header">
      <div class="left"></div>
      <div class="middle">
        <Nav></Nav>
      </div>
      <div class="right"></div>
    </el-header>
    <div class="layout">
      <div class="left">
        <div class="fixed-catalogue">目录</div>
      </div>
      <div class="middle">
        <router-view></router-view>
      </div>
      <div class="right"></div>
    </div>
  </el-container>
</template>

<script lang="ts">
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  background: rgb(170, 206, 240);
  background: linear-gradient(
    180deg,
    rgba(170, 206, 240, 1) 29%,
    rgba(255, 255, 255, 1) 100%
  );
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

.header {
  display: flex;
  height: 10%;

  .left {
    flex: 1;
  }
  .middle {
    position: fixed;
    top: 0;
    left: 25%;
    z-index: 100;
    width: 50%;
  }
  .right {
    flex: 1;
  }
}

.glass {
  height: 62px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  color: rgba(255, 255, 255, 0.75);
}
.fixed-div {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 61px;
}

.fixed-catalogue {
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 99;
}
</style>

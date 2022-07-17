<template>
  <div class="home">
    <div class="content">
      <div class="logo-group">
        <!-- 主页头像 -->
        <div class="home-header">
          <router-link class="link" to="/">
            <img class="home-logo" src="../assets/image/ku.png" alt="aaayi logo" />
          </router-link>
        </div>
        <!-- 主页头像 -->
        <div class="home-header">
          <router-link class="link" to="/">
            <img class="home-logo" src="../assets/image/zzzqi.png" alt="zzzqi logo" />
          </router-link>
        </div>
      </div>
      <!-- 主页 内容 -->
      <div class="home-body">
        <div class="list">
          <router-link class="link" to="/articles">
            文章
          </router-link>
          <router-link class="link" to="/project">
            项目
          </router-link>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://github.com/biaochenxuying">
            github
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://juejin.im/user/591d6b4d0ce463006926ae40">
            掘金
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://www.zhihu.com/people/mo-xu-ming-53/posts">
            知乎
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://segmentfault.com/u/biaochenxuying">
            segmentfault
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://www.jianshu.com/u/91717b553bfd">
            简书
          </a>
        </div>
        <div class="introduce"> 时光正好，未来可期，加油 ！ </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.home {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/bro.png');
  background-size: cover;
  .content {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    text-align: center;
    padding-top: 12%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    .home-logo {
      width: 220px;
      height: 217px;
      border-radius: 50%;
    }
    .home-header {
      .link {
        display: block;
      }
    }
    .home-body {
      padding-top: 20px;
      .list {
        .link {
          display: inline-block;
          padding: 20px;
          color: #409eff;
          font-size: 24px;
          font-weight: 800;
          min-width: 80px;
          text-decoration: none;
        }
        .link:hover {
          color: rgb(155, 35, 35);
        }
      }
    }
    .introduce {
      padding-top: 20px;
      color: #fff;
    }
  }
}

.logo-group {
  display: flex;
  justify-content: center;
}
</style>
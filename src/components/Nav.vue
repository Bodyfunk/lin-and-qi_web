<template>
  <div class="nav">
    <div class="nav-content">
      <el-row :gutter="20">
        <!-- <el-col :span="3">
          <router-link to="/">
            <el-image class="logo" :src="logoImage" alt="lin-and-qi">
            </el-image>
          </router-link>
        </el-col> -->
        <el-col :span="24">
          <el-menu :router="true" :default-active="state.activeIndex" active-text-color="#409eff" class="el-menu-demo" mode="horizontal" @select="handleSelect">

            <el-menu-item v-for="item in state.list" :key="item.index" :index="item.index" :route="item.path">{{item.name}}</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
// import logoImage from '@/assets/image/bro.png'
import { ref, reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { NavListItem } from './NavType'
import { userInfo } from '../store/userInfo'

const store = userInfo()
const router = useRouter()
const state = reactive({
  visible: false,
  handleFlag: '',
  title: '首页',
  list: [
    {
      index: '1',
      path: '/',
      name: '首页',
    },
    {
      index: '2',
      path: '/articles',
      name: '文章',
    },
    {
      index: '3',
      path: '/about',
      name: '关于',
    },
  ] as Array<NavListItem>,
  activeIndex: '0',
  enterSlideUp: false,
  leaveSlideDown: false,
  isShow: false,
})
const handleSelect = (key: string, keyPath: string[]) => {
  state.activeIndex = key
}

const routeChange = (val: any, oldVal: any) => {
  for (let i = 0; i < state.list.length; i++) {
    const l: NavListItem = state.list[i]
    if (l.path === val.path) {
      state.activeIndex = i + 1 + ''
      state.title = l.name
      break
    }
  }
}

// 监视当前的路由
watch(router.currentRoute, (val, oldVal) => {
  routeChange(val, oldVal)
})
</script>

<style lang="less" scoped>
.logo {
  min-width: 100px;
  max-height: 65px;
  border-radius: 50%;
}

.el-menu-demo {
  background-color: rgba(0, 255, 255, 0);
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: #fff0;
}
</style>
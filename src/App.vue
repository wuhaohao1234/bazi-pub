<template>
  <a-config-provider>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <!-- 导航菜单 -->
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        class="mb-4 px-4 shadow-sm bg-white"
      >
        <a-menu-item key="home">
          <template #icon>
            <home-outlined />
          </template>
          <router-link to="/">八字基础</router-link>
        </a-menu-item>
        <a-menu-item key="yinyang">
          <template #icon>
            <interaction-outlined />
          </template>
          <router-link to="/yinyang">阴阳五行</router-link>
        </a-menu-item>
        <a-menu-item key="tiangan">
          <template #icon>
            <fire-outlined />
          </template>
          <router-link to="/tiangan">十天干</router-link>
        </a-menu-item>
        <a-menu-item key="dizhi">
          <template #icon>
            <gold-outlined />
          </template>
          <router-link to="/dizhi">十二地支</router-link>
        </a-menu-item>
        <a-menu-item key="wuxing">
          <template #icon>
            <thunderbolt-outlined />
          </template>
          <router-link to="/wuxing">五行生克</router-link>
        </a-menu-item>
        <a-menu-item key="nayin">
          <template #icon>
            <apartment-outlined />
          </template>
          <router-link to="/nayin">纳音五行</router-link>
        </a-menu-item>
        <a-menu-item key="shishen">
          <template #icon>
            <team-outlined />
          </template>
          <router-link to="/shishen">十神</router-link>
        </a-menu-item>
        <a-menu-item key="shenshas">
          <template #icon>
            <thunderbolt-outlined />
          </template>
          <router-link to="/shenshas">神煞</router-link>
        </a-menu-item>
      </a-menu>

      <!-- 内容区域 -->
      <div class="container mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </a-config-provider>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  HomeOutlined,
  InteractionOutlined,
  FireOutlined,
  GoldOutlined,
  ThunderboltOutlined,
  ApartmentOutlined,
  TeamOutlined
} from '@ant-design/icons-vue'

// 当前选中的菜单项
const selectedKeys = ref(['home'])
const route = useRoute()

// 监听路由变化，更新选中的菜单项
watch(
  () => route.path,
  (path) => {
    switch (path) {
      case '/':
        selectedKeys.value = ['home']
        break
      case '/yinyang':
        selectedKeys.value = ['yinyang']
        break
      case '/tiangan':
        selectedKeys.value = ['tiangan']
        break
      case '/dizhi':
        selectedKeys.value = ['dizhi']
        break
      case '/wuxing':
        selectedKeys.value = ['wuxing']
        break
      case '/nayin':
        selectedKeys.value = ['nayin']
        break
      case '/shishen':
        selectedKeys.value = ['shishen']
        break
      case '/shenshas':
        selectedKeys.value = ['shenshas']
        break
    }
  },
  { immediate: true }
)
</script>

<style>
/* 覆盖 Ant Design 菜单样式 */
.ant-menu-horizontal {
  border-bottom: none !important;
}

/* 调整路由链接样式 */
.ant-menu-item a {
  color: inherit;
  text-decoration: none;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .ant-menu-item {
    padding: 0 12px !important;
  }
  .ant-menu-item-icon {
    margin-right: 4px !important;
  }
}
</style>

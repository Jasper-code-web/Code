<template>
  <!-- <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于页</router-link>
  </div>
  <router-view></router-view> -->
  <div id="app">
    <a-layout :style="{ height: '100%'}">
      <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
          <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" theme="dark" mode="inline"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item key="1">
              <router-link to="/">首页</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/about">关于页</router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0 24px 24px">
            <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          </a-layout-header>
          <a-breadcrumb style="margin: 16px">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', margin: '24px', padding: '24px', height: '100%' }">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>

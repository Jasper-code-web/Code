<template>
    <div :style="{ height: '100%', margin: '0', padding: '0' }">
        <!-- <a-button type="primary" @click="gotoLearnA">toRefs and computed</a-button>
        <router-view></router-view> -->
        <a-layout :style="{ height: '100%' }">
            <a-layout-sider>
                <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" theme="dark" mode="inline"
                    :style="{ height: '100%', borderRight: 0 }">
                    <a-menu-item v-for="(child, index) in routes[2].children" :key="index">
                        <router-link :to="routes[2].path + '/' + child.path">{{ child.meta.title }}</router-link></a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout-content><router-view></router-view></a-layout-content>
        </a-layout>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import routes from '@/router/routes';
console.log(routes)
const selectedKeys2 = ref<string[]>(["0"])
const openKeys = ref<string[]>(["sub1"])
</script>

<style lang="scss" scoped>
</style>
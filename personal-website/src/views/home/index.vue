<template>
    <div id="home">
        <div class="top-menu">
            <top-menu />
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import TopMenu from './component/topMenu.vue'
</script>

<style scoped>
#home {
    width: 100%;
    height: 100%;
}
.container{
    height: calc(100% - 60px);
    width: 100%;
}
</style>
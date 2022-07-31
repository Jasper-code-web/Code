<template>
    <div>这是首页</div>
    <a-button type="primary" @click="gotoTest">Learn example</a-button>
</template>
<script lang="ts" setup>
import router from '@/router';

const gotoTest = () => {
    router.push({name: 'test'})
}
</script> 

<template>
    <div>这是首页</div>
    <a-button type="primary" @click="gotoTest">Learn example</a-button>
</template>
<script setup>
import router from '@/router';

const gotoTest = () => {
    router.push({name: 'test'})
}
</script> 

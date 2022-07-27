<template>
    <div>
        关于页
        <div v-for="item in 5" ref="setItemRef">a</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onUpdated  } from 'vue';
let itemRefs = []

const setItemRef = el => {
    console.log('el',el)
    if(el) {
        console.log(el)
        // itemRefs.push(el)
    }
}

</script>


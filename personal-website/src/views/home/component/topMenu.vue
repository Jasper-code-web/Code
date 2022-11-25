<template>
    <div class="menu-tabs">
        <div class="left-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125px"
                height="23px">
                <image x="0px" y="0px" width="80px" height="25px"
                    xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAXCAMAAAARMbArAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAD///8aXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvYaXvb///+dyUWXAAAAHHRSTlMAAADdu2aZRFWIzBGq7jMidwaR8PGSB5CN7YvvevHTsAAAAAFiS0dEAf8CLd4AAAAHdElNRQfmCxYUHC9Y4gDFAAAB4klEQVRIx72W2XaDIBCGaUBAETFtus/7P2eHHVETNOd0rgSFb5Z/QEIeGgWWBx1AfHx53giBXWMH6Wu3gT8KrZEuAESmc6BrelpIu2Z6NInL+o20e+NH6ACDwo/6djp+CpI8RQ+fEMUxfJ+uRvoIoKc0Ut3CAd6W+Uh3eeTtdDWgt6YsgniKjsHoZrrRUOqaKO0y10C/JFvS3WMbvdCbQZvnmZUCPEnvMl0O2raQ2aSjsqhGW/abWdGrdvT06+vb7f3jXuwybSyc99AjUCdfKNRmPRnu0rGlPP3Tjr5qelF3V1acn6id6/IWQdmD1oyxETMuMPF+rs8lo2X1qrPucnGB3Sq6KDUv6BQLLG3N0BmFkwtl+73nNJOLhHRJxR79e03f6nclmXZDHgW+UPY6zEIWuKJnY0E3jIki8z+RvjjrMl0M4cxydBGyC+YhXTq4xjagBd1qOqpO/75fl/Rwzke6GeILT09ZDE20aSTp1eZ9j77dcSXduD30KA/TJ6d/W6ht+t5ZV9Jt5NxWYpN+N/Nchhv2BF1F5VPlxsfphJyne1knyvjPdNddWO7R3poUTtLHk3RcSm0GYFfzAnaNkdDs0tErMw10Q0VWNT1Hd9ddRdfd47/KaBOqXg+SMNZVb/4Al7JaJxXkO1YAAAAASUVORK5CYII=" />
            </svg>
            <div class="menu-select">
                <div class="tab" v-for="routeItem of routes" :key="routeItem.meta?.id">
                    <router-link :to="routeItem.path" v-if="routeItem.path !== '/'"
                        :class="{ 'active': route.path === routeItem.path }">{{ routeItem.meta?.title }} </router-link>
                </div>
            </div>
        </div>
        <div class="right-wrap">
            <a-button style="width: 80px; margin-right: 20px; background-color: #E2E2E5; border-radius: 4px;" @click="changeModal(1)">登录
            </a-button>
            <a-button style="width: 80px; background-color: #1D8FFB; border-radius: 4px;" type="primary" @click="changeModal(2)">注册</a-button>
        </div>
        <a-modal v-model:visible="visible" :bodyStyle="modalStyle" :centered="true" :footer="null" width="366px">
            <div class="login-wrap">
                <div class="title">登录</div>
                
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type{ Ref } from 'vue';
import routes from '@/router/route'
import { useRoute } from 'vue-router';

const route = useRoute()
const visible: Ref<boolean> = ref(false)
const modalStyle = {
    borderRadius: '10px'
}

function changeModal(type: number) {
    visible.value = true
    console.log(type)
}
</script>

<style scoped lang="less">
.menu-tabs {
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
}

.left-wrap {
    display: flex;
}

.menu-select {
    display: flex;
    align-items: center;

    .tab {
        margin: 0 20px;

        a {
            color: #000;
        }

        .active {
            color: #1D8ffb;
        }
    }
}

.login-wrap{
    width: 100%;
    margin-top: 20px;
    .title{
        width: 100%;
        text-align: center;
    }
}
</style>
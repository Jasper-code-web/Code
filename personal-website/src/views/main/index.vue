<template>
    <div id="main">
        <div class="left-wrap">
            <span>规划</span><br>
            <span>Multiple reviews, precise positioning</span><br><br>
            <span>Target&Plan</span><br>
            <span>树立目标</span><br>
            <span>认清自己，不断调整。制定合理可行性计划</span><br>
            <div class="login-btn">登录</div>
        </div>
        <div class="right-wrap">
            <img src="@/assets/images/astronaut.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
#main {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(50deg,#7BF0A4 30%, #C2EDCC);
    /* background: #8799a3; */
    /* opacity: .2; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-wrap {
    user-select: none;
    span:nth-of-type(1) {
        font-size: 40px;
        font-weight: bold;
    }
    span:nth-of-type(2) {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 40px;
    }
    span:nth-of-type(3) {
        font-size: 30px;
    }
    span:nth-of-type(4) {
        font-size: 30px;
    }
    span:nth-of-type(5) {
        font-size: 20px;
    }
    .login-btn{
        width: 150px;
        height: 50px;
        background-color: #000;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        margin-top: 40px;
        cursor: pointer;
        user-select: none;
    }
}
.right-wrap{
    user-select: none;
    margin-left: 250px;
    img{
        width: 500px;
        height: 500px;
    }
}
</style>
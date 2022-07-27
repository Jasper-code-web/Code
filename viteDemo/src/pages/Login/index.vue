<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="Username" name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password" name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts">
import { login } from '@/api/useAction';
import router from '@/router';
import { defineComponent, reactive, ref } from 'vue';
import { message } from 'ant-design-vue';

interface FormState {
    username: string;
    password: string;
    remember?: boolean;
}
interface resData {
    code?: number,
    message?: string
}
export default defineComponent({
    setup() {
        const formState = reactive<FormState>({
            username: 'Jasper',
            password: '123456',
            remember: true,
        });
        //登录相关数据
        const loading = ref(false)
        //表单验证成功
        const onFinish = async (values: any) => {
            const loginForm: FormState = reactive({
                username: formState.username,
                password: formState.password
            })
            if (values) {
                loading.value = true
                const resData = await login(loginForm)
                loading.value = false
                if (resData && resData.code === 0) {
                    router.replace('/')
                } else {
                    message.error('登录失败，请重新登录')
                }
            } else {
                return false
            }
        };
        //验证失败
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },
});
</script>


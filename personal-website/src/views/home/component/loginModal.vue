<template>
    <div>
        <a-modal v-model:visible="visible" :bodyStyle="modalStyle" :centered="true" :footer="null" width="366px">
            <div class="login-wrap">
                <div class="title">登录</div>
                <a-form style="margin-top: 20px;" :model="formState" name="basic" :wrapper-col="{ span: 24 }"
                    autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                    <a-form-item name="username" :rules="[{ required: true, message: '请输入邮箱' }]">
                        <a-input v-model:value="formState.username" placeholder="请输入邮箱" />
                    </a-form-item>

                    <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                        <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                    </a-form-item>

                    <a-form-item name="remember" :wrapper-col="{ offset: 17, span: 7 }">
                        <a-checkbox v-model:checked="formState.remember">记住账号</a-checkbox>
                    </a-form-item>

                    <a-form-item style="width: 100%">
                        <a-button style="width: 100%; border-radius: 6px;" type="primary" html-type="submit">登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import type { Ref } from 'vue';

export interface Props {
    visible?: boolean
    type?: number
}

const props = withDefaults(defineProps<Props>(), {
    visible: false
})
const visible = ref<boolean>(props.visible)
watch(
    () => props.visible,
    () => {
        console.log('visible',visible)
    }
)

const modalStyle = {
    borderRadius: '10px'
}
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
});

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="less">
.login-wrap {
    width: 100%;
    margin-top: 20px;

    .title {
        width: 100%;
        text-align: center;
    }
}
</style>
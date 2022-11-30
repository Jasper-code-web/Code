<template>
    <div>
        <a-modal v-model:visible="visible" :bodyStyle="modalStyle" :centered="true" :footer="null" width="366px"
            @cancel="closeModal">
            <div class="login-wrap">
                <div class="title">{{ type === 1 ? '登录' : '注册' }}</div>
                <a-form style="margin-top: 20px;" :model="formState" name="basic" :wrapper-col="{ span: 24 }"
                    autocomplete="off">
                    <a-form-item name="username" :rules="[{ required: true, message: '请输入邮箱' }]">
                        <a-input v-model:value="formState.username" placeholder="请输入邮箱" />
                    </a-form-item>

                    <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                        <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                    </a-form-item>
                    <a-form-item name="password" :rules="[{ required: true, message: '请输入验证码' }]" v-if="type === 2">
                        <div style="display: flex;">
                            <a-input v-model:value="formState.password" placeholder="请输入验证码" />
                            <a-button>验证码</a-button>
                        </div>
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
const emit = defineEmits<{
    (e: 'changeVisible', type: boolean): void
}>()
const props = withDefaults(defineProps<Props>(), {
    visible: false
})
const visible = ref<boolean>(props.visible)
watch(
    () => props.visible,
    () => {
        console.log('visible', visible)
        visible.value = props.visible
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
function closeModal() {
    emit('changeVisible', false)
}
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
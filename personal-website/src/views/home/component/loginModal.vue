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
                    <a-form-item name="password" :rules="[{ required: type === 2, message: '请输入验证码' }]"
                        v-if="type === 2">
                        <div style="display: flex;">
                            <a-input v-model:value="formState.password" placeholder="请输入验证码" />
                            <a-button type="primary" ghost style="margin-left: 30px; width: 130px; border-radius: 4px;" @click="sendVerificationCode">{{ codeContent }}
                            </a-button>
                        </div>
                    </a-form-item>

                    <a-form-item name="remember" :wrapper-col="{ offset: 17, span: 7 }" v-if="type === 1">
                        <a-checkbox v-model:checked="formState.remember">记住账号</a-checkbox>
                    </a-form-item>

                    <a-form-item style="width: 100%">
                        <a-button style="width: 100%; border-radius: 6px;" type="primary" html-type="submit" @click="enterLogin">{{type===1?'登录':'注册'}}</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import type { Ref } from 'vue';
import { login } from '../config/api.config'; 

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
const codeContent = ref<string>("验证码")
const totalTime = ref<number>(60)
const visible = ref<boolean>(props.visible)
let clock: number | undefined = undefined


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
    username: '111@qq.com',
    password: '',
    remember: true,
});
function closeModal() {
    emit('changeVisible', false)
}

async function enterLogin() {
    const useInfo = await login()
    console.log('useInfo',useInfo)
}

function sendVerificationCode() {
    var telReg = (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(formState.username))
    if (telReg) {
        if (totalTime.value == 60 && !clock) {
            clock = window.setInterval(function () {
                totalTime.value --
                codeContent.value = totalTime.value + 's后重新发送'
                if (totalTime.value < 0) {
                    window.clearInterval(clock)
                    clock = undefined
                    codeContent.value = '重新发送验证码'
                    totalTime.value = 60
                }
            }, 1000)
            console.log('clock',clock)
        } else {
            return
        }
    } else {
        alert('邮箱输入错误')
    }
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
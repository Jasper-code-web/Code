<template>
    <a-card title="toRefs结构">
        <div>
            <div>name: {{ name }}</div>
            <div>age:{{ age }}</div>
            <a-button type="primary" @click="addAge">年龄增长</a-button>
        </div>
    </a-card>
    <a-card title="readyonly">
        <div>original: {{original.count}}</div>
        <div>copy: {{copy.count}}</div>
        <a-button type="primary" @click="addOriginal">累加original原数据</a-button>
        <a-button type="primary" @click="addCopy">累加copy数据</a-button>
    </a-card>
    <a-card title="isProxy">
        <div @click="judegRef">点击判断dataType: {{refData.identification}}</div>
        <div @click="judegReac">点击判断dataType: {{reacData.identification}}</div>
    </a-card>
    <a-card title="toRaw">
        <div @click="judegRef">toRaw: 获取到reactive和readonly代理的原始对象: {{isFoo}}</div>
    </a-card>
</template>

<script setup lang="ts">
import { react } from '@babel/types';
import { message } from 'ant-design-vue';
import { ref, reactive, toRefs, readonly, isProxy, shallowReactive, isReactive, toRaw, markRaw } from 'vue'

//使用toRefs结构响应式数据，可以使结构出来的数据保持原有的响应式关系
const testObj = reactive({
    name: 'Jasper',
    age: 24
})
const { name, age } = toRefs(testObj)
function addAge() {
    testObj.age++
}

//readonl：接收一个对象（响应式或原始）、ref,返回原数据的只读代理，只有原数据可以修改
const original = reactive({count: 0})
const copy = readonly(original)
function addOriginal() {
    original.count ++
}
function addCopy() {
    copy.count ++
    message.error('failed: target is readonly');
}

//isProxy检查对象是否是由reactive和readonly创建的proxy
const refData = ref({identification: 'ref'})
const reacData = reactive({identification: 'reactive'})
function judegRef() {
    message.info('是否是reactive或readyonly创建出的proxy:  ' + isProxy(refData))
}
function judegReac() {
    message.info('是否是reactive或readyonly创建出的proxy:  ' + isProxy(reacData))
}

//toRaw返回reactive和readonly代理的原始对象
const foo = {}
const reactiveFoo = reactive(foo)
const isFoo = (foo === toRaw(reactiveFoo))

//markRaw标识一个对象，使其不能转换为proxy。返回对象本身
const foo1 = markRaw({})
console.log(isReactive(foo)) // false

const bar = reactive({ foo1 })
console.log(isReactive(bar.foo1)) //false

//shallowReactive: 创建一个响应式代理，它跟踪其自身property的响应性，但不执行嵌套对象的深层响应式转换（暴露原始值）
const state = shallowReactive({
    foo: 1,
    nested: {
        bar: 2
    }
})
state.foo ++
isReactive(state.nested)
state.nested.bar ++

</script>

<style scoped>
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/counter'
import Api from '@/api/user'

const counter = useCounterStore()
const count = ref(0)
const addOneCount = () => count.value++
const addOneCounter = () => counter.increment()

const login = async () => {
  const { code, result, message } = await Api.login({
    username: 'a',
    password: 'b',
  })
  console.log({ code, result, message })
  // do something
}
</script>

<template>
  <h1 class="home">Home</h1>
  <h2>{{ count }}</h2>
  <button @click="addOneCount">Add One</button>
  <h2>{{ counter.count }}</h2>
  <button @click="addOneCounter">Add One</button>
  <van-button type="primary" @click="login">Login</van-button>
  <p>浏览器厂商前缀自动添加测试：未通过</p>
  <div class="flex">
    <div>1</div>
    <div>2</div>
  </div>
  <p>px转vw自动转换测试：通过</p>
  <div class="test-px-vw">测试</div>
</template>

<style scoped lang="less">
.home {
  display: block;
  color: #888;
  background-color: @color;
}

.flex {
  display: flex;
}

.test-px-vw {
  font-size: 75px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
const count = ref(0)
const addOneCount = () => count.value++
const addOneCounter = () => counter.increment()
</script>

<template>
  <h1>Home</h1>
  <h2>{{ count }}</h2>
  <button @click="addOneCount">Add One</button>
  <h2>{{ counter.count }}</h2>
  <button @click="addOneCounter">Add One</button>
</template>

<style scoped>
.read-the-docs {
  display: block;
  color: #888;
}
</style>

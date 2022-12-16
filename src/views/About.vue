<script setup lang="ts">
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red',
})
</script>

<template>
  <h1>About</h1>
  <div>mouse: x:{{ x }} - y:{{ y }}</div>
  <div>isDark: {{ isDark }}</div>
  <div>{{ store }}</div>
</template>

<style scoped>
.read-the-docs {
  display: block;
  color: #888;
}
</style>

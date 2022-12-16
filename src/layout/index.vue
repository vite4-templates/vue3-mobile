<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

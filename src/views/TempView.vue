<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>

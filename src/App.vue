<template>
  <nav class="mt-20 flex gap-5 items-center fixed -top-14">
    <RouterLink class="text-xl font-medium" to="/">To Do</RouterLink>
    <RouterLink class="text-xl font-medium" to="/users">User</RouterLink>
  </nav>
  <main class="mt-10">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>


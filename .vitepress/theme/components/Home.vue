<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="container mx-auto pt-20 px-6 lg:px-16 xl:px-32">
    <section class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1>{{ frontmatter.hero.name }}</h1>
        <p class="mt-4">
          {{ frontmatter.hero.text }}
        </p>
        <button class="mt-4 btn btn-error text-white font-semibold">Register now!</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  @apply font-bold text-6xl text-red-500;
}

p {
  @apply text-lg;
}

h2 {
  @apply font-semibold text-3xl;
}
</style>

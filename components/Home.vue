<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="container mx-auto pt-20 px-6 lg:px-16 xl:px-32">
    <section class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1 md:col-span-2">
        <h1 class="text-red-500 font-bold text-6xl">{{ frontmatter.hero.name }}</h1>
        <p class="text-gray-800 dark:text-gray-300 text-lg mt-4">
          {{ frontmatter.hero.text }}
        </p>
        <button type="button" class="mt-8 text-white bg-red-600 
          hover:bg-red-800 focus:(outline-none ring-4 ring-red-300)
          font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 
          dark:(bg-red-600 hover:(bg-red-700 ring-red-900))
          ">
          Register Now!
        </button>
      </div>
    </section>
    <section class="mt-10">
      <h1 class="text-2xl font-semibold">About the contest</h1>

      <div v-for="{ title, description } in frontmatter.about" class="mt-4">
        <p class="font-bold text-lg">
          {{ title }}
        </p>

        <p class="text-gray-800 dark:text-gray-300 text-lg mt-4">
          {{ description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	header: string
	icon: string
}>()
</script>

<template>
	<li class="flex flex-col text-white text-sm lg:text-base font-medium min-h-8 justify-center sm:justify-start sm:items-center sm:flex-row sm:gap-4">
		<h2 class="flex items-center justify-start text-gray-300 gap-x-2 min-w-full sm:mr-0 sm:min-w-[20%]">
			<Icon size="16" :name="icon" />
			{{ header }}
		</h2>
		<slot />
	</li>
</template>

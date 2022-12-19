<script setup lang="ts">
defineProps<{
	placeholder?: string
	error?: string
}>()

const emits = defineEmits(['inputChange'])

const input = ref('')
</script>

<template>
	<div class="relative flex flex-col w-full">
		<input
			v-model="input"
			class="w-full bg-transparent hover:bg-[#141418] rounded focus:outline-0 pl-0 sm:pl-1 p-1"
			type="email"
			:placeholder="placeholder ? placeholder : 'Empty...'"
			:class="error ? 'error' : ''"
			@change="() => emits('inputChange', input)"
		>
		<span class="absolute top-1/2 right-0 -translate-y-1/2 text-xs px-1 text-[#fa5152]">
			{{ error }}
		</span>
	</div>
</template>

<style scoped>
.error {
    @apply outline-[0.5px] outline outline-[#fa5152] text-[#fa5152];
}

.error::placeholder {
    @apply text-[#fa5152]
}
</style>
